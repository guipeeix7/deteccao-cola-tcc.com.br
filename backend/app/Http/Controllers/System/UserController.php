<?php

namespace App\Http\Controllers\System;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\StoreusersRequest;
use App\Http\Requests\UpdateusersRequest;
use Illuminate\Support\Facades\Auth;
use App\Models\User as USER;
use App\Services\UserServiceContainer;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Shared\Helper;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rules;

class UserController extends Controller
{
    public function __construct(private UserServiceContainer $userServiceContainer) {}
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $usersList = $this->multiFieldSeach($request);

        return UserResource::collection($usersList);
    }

    public function multiFieldSeach(Request $request)
    {
        $name = $request->input('name');
        $email = $request->input('email');
        $userType = $request->input('userType');
        $userStatus = $request->input('status');

        // $name, $userType, $email
        $builder = USER::where('name', 'LIKE',  "%" . $name . "%")
            ->where('email', 'LIKE', "%" . $email . "%");
        if ($userType != "") {
            if ($userType == "aluno") {
                $builder->has('aluno');
            } else if ($userType == "professor") {
                $builder->has('professor');
            }
        }
        if ($userStatus != '') {
            $builder->where('status', '=', $userStatus);
        }

        return $builder->paginate(15);
    }

    public function currentUserData()
    {
        return ['data' => Auth::user()];
    }

    /**
     * Store a newly created resource in storage.
     *
     * PLEASE NOTE:
     * THIS METHOD HAVE BEEN IMPLEMENTED IN RegisterUserController under Auth folder
     * DO NOT OVERRIDE IT DUE TO SECURITY REASONS!!
     */

    public function store(StoreusersRequest $request)
    {
        //

    }

    /**
     * Display the specified resource.
     */
    public function show(user $user)
    {
        //Need to recover the user with aluno and professor field, if they exists!!!
        $professor = DB::table('PROFESSOR')->where('idUser', '=', $user->id)->first();
        $user['professor'] = $professor;

        $aluno = DB::table('ALUNO')->where('idUser', '=', $user->id)->first();
        $user['aluno'] = $aluno;

        $user['userBillings'] =  DB::table('wp_wc_orders')
            ->select(DB::raw('DISTINCT billing_email'))
            ->pluck('billing_email');


        $user['roles'] = $user->roles;

        return ['data' => $user];
    }
    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateusersRequest $request, User $user)
    {   
        
        // Get validated data from the request
        $validated = $request->validated();

        // Handle the password (keep existing if empty)
        if ($request->input('password') != "") {
            $validated['password'] = Hash::make($request->input('password'));
        } else {
            $validated['password'] = $user->password;
        }

        // Handle roles (convert comma-separated string to array if needed)
        if (is_string($request->input('roles'))) {
            $roles = explode(',', $request->input('roles'));
            $validated['roles'] = $roles;
        }

        // Handle file upload - BEFORE handling null values
        if ($request->hasFile('fotoPerfil') && $request->file('fotoPerfil')->isValid()) {
            $path = Storage::putFile('users', $request->file('fotoPerfil'));
            $validated['fotoPerfil'] = $path;
        } else if ($user->fotoPerfil != null ) {
            // Keep existing image if no new one uploaded
            $validated['fotoPerfil'] = $user->fotoPerfil;
        }

        // Handle null/undefined values
        $fieldsToCheck = ['apelido', 'dataNascimento', 'lastIpAddress'];
        foreach ($fieldsToCheck as $field) {
            if ($request->input($field) === 'null' || $request->input($field) === 'undefined') {
                $validated[$field] = null;
            }
        }

        // Fix the CPF field name to match the database column (lowercase)
        if ($request->has('CPF')) {
            if ($request->input('CPF') === 'null' || $request->input('CPF') === 'undefined') {
                $validated['cpf'] = null;
            } else {
                $validated['cpf'] = $request->input('CPF');
            }
        }

        // Add schoolSufix if present
        if ($request->has('schoolSufix')) {
            $validated['schoolSufix'] = $request->input('schoolSufix');
        }

        // Sync roles with the user
        $user->syncRoles($validated['roles'] ?? []);

        // Remove roles from validated data before updating user
        unset($validated['roles']);

        // return $validated;
        // Update user with validated data
        $result = $user->update($validated);

        return $user;
    }

    public function updateCurrentUser(Request $request)
    {
        $userId = Auth::id();
        $userRequest = new UpdateusersRequest();
        $rules = [
            'CPF'  => 'required',
            'telefone'  => 'numeric',
            'email' => 'required|email',
            'name' => 'required|string|max:255',
        ];

        if ($request->input('password') != "") {
            $rules['password'] = ['confirmed', Rules\Password::defaults()];
        }


        $validator = Validator::make($request->all(), $rules, $userRequest->messages());
        $validated = $validator->validated();

        if (!Helper::validaCPF($validated['CPF'])) {
            return ['code' => 4, "message" => "Por favor insira um CPF válido para continuar"];
        }
        $password = DB::table('users')->select('password')->where('id', '=', $userId)->first()->password;
        if (isset($validated['password'])) {
            $password = Hash::make($request->password);
        }
        if (!isset($validated['telefone'])) {
            $validated['telefone'] = DB::table('users')->select('telefone')->where('id', '=', $userId)->first()->telefone;
        }

        USER::where('id', $userId)
            ->update([
                'name' => $validated['name'],
                'email' => $validated['email'],
                'CPF' => $validated['CPF'],
                'telefone' => $validated['telefone'],
                'password' => $password,
            ]);
    }
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(user $user)
    {
        $deleted = $user->delete();
        return $deleted;
    }

    /**
     * The following set of functions gonna make new row in database to corresponded user Role, then set their privileges
     * in the roles - permissions system
     */


    public function grantAdminRole(User $user)
    {
        $user->assignRole('admin');
    }

    public function grantStudentRole(User $user)
    {
        $user->assignRole('professor');
        $this->linkNewEmptyProfessor($user->id);
    }
}
