<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\ALUNO;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rules;

class RegisteredUserController extends Controller
{
    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', 'unique:'.User::class],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'fotoPerfil' => 'nullable|string|max:120',
        ]);

        if($request->file('fotoPerfil')){
            $path = Storage::putFile('users', $request->file('fotoPerfil'));
        }

        $validated['fotoPerfil'] = $path;

        $user = User::create([
            'email_verified_at' => date("Y-m-d H:i:s"),
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'status' => 1,
            'fotoPerfil' => $validated['imagemCurso']
        ]);

        event(new Registered($user));
        $this->linkEmptyStudent($user);

        return response()->json(['userId' => $user->id]);
    }

    public function linkEmptyStudent($user){
        $user->assignRole('client');
    }
}
