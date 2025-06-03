<?php
namespace App\Http\Controllers\Admin;

// use App\Models\roles;
use Illuminate\Http\Request;
// use Spatie\Permission\Models\Role;
use App\Models\Role;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreRolesRequest;
use App\Http\Requests\UpdaterolesRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use App\Models\Permissions;
use Illuminate\Support\Facades\Schema;
use App\Http\Resources\RoleResource;
use Illuminate\Support\Facades\DB;
use App\Models\Shared\UtilQueries;

class RolesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $name = $request->input('name');
        $per_page = $request->input('per_page', 5);
        $all_roles_in_database = UtilQueries::withSimpleSearchByClass(Role::class, $name, 'name');

        return RoleResource::collection($all_roles_in_database);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // $role = new Role;
        $role =  new StoreRolesRequest;

        $rules = $role->rules();
        $dataTypes = $role->dataTypes();

        // $data = Role::findById(1);
        $data = [];
        return RoleResource::collection($data);

        // return [ 'data' => $data , 'dataTypes' => $dataTypes ,'rules' => $rules];
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRolesRequest $request)
    {
        $validated = $request->validated();

        $role = Role::create(['name' => $validated['name']]);

        $role = Role::findById($role->id);
        $role->syncPermissions([$request->get('permissions')]);
        app()->make(\Spatie\Permission\PermissionRegistrar::class)->forgetCachedPermissions();
        // return $role;
        return $role;
        // return RoleResource::collection($role);

    }


    public function verifyUnique(Request $request){
        $name = $request->input('name');
        $role = Role::where('name', $name)->get();
        return RoleResource::collection($role);
    }

    /**
     * Display the specified resource.
     */
    public function show(Role $roles, $id)
    {

        $role =  new StoreRolesRequest;
        $rules = $role->rules();
        $dataTypes = $role->dataTypes();

        $data = Role::findById($id);

        $count = $data->permissions->count();
        $data['permissions'] = $data->permissions;

        return ['data' => $data];
        // return RoleResource::collection($data);

        // return ['data' => $data, 'dataTypes' => $dataTypes ,'rules' => $rules];
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Role $roles)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdaterolesRequest $request, Role $roles, $id)
    {
        //
        $validated = $request->validated();

        Role::findById( $id)
        ->update(['name' => $validated['name']]);

        // $permissions = [];
        // foreach($request->get('permissions') as $permission ){
            //     $permssionValue = Permissions::where('id' , '=', $permission)->first();
            //     array_push($permissions, $permssionValue->name);
            // }

        $role = Role::findById( $id);
        $role->syncPermissions([$request->get('permissions')]);

        app()->make(\Spatie\Permission\PermissionRegistrar::class)->forgetCachedPermissions();
        // return RoleResource::collection($role);

        return ['data' => $role];
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Role $roles, $id)
    {
        $deleted = Role::where('id', $id)
            ->delete();
        // return RoleResource::collection($data);

        return $deleted;
    }

    public function addPermissionsToRole(Request $request){
        $validated = $request->validate([
            'roleId' => 'required|integer',
            'permissionNames' => 'required|array',
            "permissionNames.*"  => "distinct",
        ],
        [
            'roleId.integer' => 'O parâmetro da role deve ser passado como inteiro',
            'permissionNames.string*' => 'O nome das roles devem estar em formato de texto',
        ]
        );

        $role = Role::findById($validated['roleId']);
        $role->syncPermissions($validated['permissionNames']);
        return RoleResource::collection($role);

        // return $role;
    }

    public function assingUserSingleToRole(Request $request){
        $user = User::where('id', '=', $request->userId)->first();

        $validated = $request->validate([
                'roleId' => 'required|integer',
                'userId' => 'required|integer'
            ],
            [
                'roleId.integer' => 'O parâmetro da role deve ser passado como inteiro',
                'userId.integer' => 'O id do usuário deve ser no formato inteiro',
            ]
        );

        $role = Role::findById($validated['roleId']);
        $user = User::where('id', '=', $validated['userId'])->first();

        $user->assignRole($role);


        return [$role, $user];
    }

    public function assingUserToRoles(Request $request){
        $validated = $request->validate([
                'userId' => 'required|integer',
                'roleNames' => 'required|array',
                "roleNames.*"  => "required|string|distinct"
            ],
            [
                'userId.integer' => 'O id do usuário deve ser no formato inteiro',
            ]
        );
        $user = User::where('id', '=', $validated['userId']);

        $user->syncRoles($validated['roleNames']);
        return [$user];
    }


    public function assignSuperAdmin(){


        $admin = User::where('email', '=', 'admin@admin.com');
        if(!$admin->exists()){
            $admin = User::create([
                'name' => 'admin',
                'email' => 'admin@admin.com',
                'password' => Hash::make('$[-_passwordToAdmin_-]$(;'),
            ]);
        }

        $supRole = Role::where('nam e', '=', 'admin');
        if(!$supRole->exists()){
            $supRole = Role::create(['name' => 'admin']);
        }
        $admin->first()->assignRole($supRole->first());

        return;
    }

    public function getCurrentUserRoles(){
        $user = auth()->user();
        $permissions = $user->getAllPermissions();

        return ['data' => $permissions];
        // return User::with('roles')->where('id', '=', $user->id)->first()['roles']->toJson(JSON_PRETTY_PRINT);
    }

    public function getAllFromLoginAttempt(){
        // $role_permissions = Role::with('permissions')->get();
        $role_permissions = DB::table('role_has_permissions')
        ->select('permissions.name AS pName', 'roles.name AS rName  ')
        ->leftJoin('permissions', 'permissions.id', '=', 'role_has_permissions.permission_id')
        ->leftJoin('roles', 'roles.id', '=', 'role_has_permissions.role_id')->get();

        // $data = DB::table(function ($query) use ($idProfessor) {
        //     $query->select('idCorrecao', 'idProfessor')
        //         ->from('CORRECAO')
        //         ->where('idProfessor', '=', $idProfessor);
        // }, 'C')
        // ->joinSub(function ($query) use ($idQuestion) {
        //     $query->select('idCorrecao', 'idQUestao')
        //         ->from('explicada')
        //         ->where('idQUestao', '=', $idQuestion);
        // }, 'E', function ($join) {
        //     $join->on('C.idCorrecao', '=', 'E.idCorrecao');
        // })->first();
        return ['data' => $role_permissions];
    }
}
