<?php

namespace App\Http\Controllers\Admin;

// use App\Models\Permissions;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\StorePermissionsRequest;
use App\Http\Requests\UpdatepermissionsRequest;
use Spatie\Permission\Models\Role;
// use Spatie\Permission\Models\Permission;
use App\Models\Permissions as Permission;
use Illuminate\Validation\Validator;
use App\Http\Resources\PermissionResource;
use App\Models\Shared\UtilQueries;

class PermissionsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        // $all_permissions_in_database = Permission::all();
        $name = $request->input('name');
        $all_permissions_in_database = UtilQueries::withSimpleSearchByClass(Permission::class,$name, 'name');
        // $all_roles_in_database = UtilQueries::withSimpleSearch(Role::class, $name, 'name');

        return PermissionResource::collection($all_permissions_in_database);

        // return $all_permissions_in_database->toJson(JSON_PRETTY_PRINT);
    }
    public function verifyUnique(Request $request){
        $name = $request->input('name');
        $permission = Permission::where('name', $name)->get();
        return PermissionResource::collection($permission);
    }
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePermissionsRequest $request)
    {
        $validated = $request->validated();
        $permission = Permission::create(['name' => $validated['name']]);

        return PermissionResource::make($permission);

        // $permission = Permission::findById($permission->id);
        // $permission->syncRole([$request->get('role')]);;
        // return $permission;
    }

    /**
     * Display the specified resource.
     */
    public function show(Permission $permissions, $id)
    {

        $permission =  new StorePermissionsRequest;
        $rules = $permission->rules();
        $dataTypes = StorePermissionsRequest::dataTypes();

        $data = Permission::findById($id);
        $count = $data->permissions->count();
        // echo json_encode($data);
        // return;
        return PermissionResource::make($data);
        // return ['data' => $data, 'dataTypes' => $dataTypes ,'rules' => $rules];
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Permission $permissions)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatepermissionsRequest $request, Permission $permissions, $id)
    {
        $validated = $request->validated();

        $permission = Permission::where('id', $id)
            ->update(['name' => $validated['name']]);

        app()->make(\Spatie\Permission\PermissionRegistrar::class)->forgetCachedPermissions();
        return PermissionResource::collection($permission);

        // return $permission;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Permission $permissions, $id)
    {
        $deleted = Permission::where('id', $id)
            ->delete();
        return $deleted;
    }



    public function getCurrentUserPermissions(Request $request){
        $user = auth()->user();

        $permissions = $user->getAllPermissions();
        return PermissionResource::collection($permissions);

        // return [$permissions];
    }

}
