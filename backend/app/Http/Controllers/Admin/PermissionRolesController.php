<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\permission_roles;
use App\Http\Requests\Storepermission_rolesRequest;
use App\Http\Requests\Updatepermission_rolesRequest;
use Spatie\Permission\Models\Role;
use App\Http\Requests\StorerolesRequest;
use App\Http\Requests\UpdaterolesRequest;
use Illuminate\Http\Request;

class PermissionRolesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
    public function store(Storepermission_rolesRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(permission_roles $permission_roles)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(permission_roles $permission_roles)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, permission_roles $permission_roles)
    {
        //
        echo "alow";
        return 200;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(permission_roles $permission_roles)
    {
        //
    }

    public function syncPermissionsToRoles(Role $role, Storepermission_rolesRequest $request, $id){
        $validPermissions = $request->validated();

        $role = Role::findById($id);
        $role->syncPermissions($validPermissions['permissions']);
    }
}
