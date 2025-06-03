<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use App\Models\Profile;
use App\Models\Address;


class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request, )
    {
        $profileInfo = User::all();
        // $userInfo = User::find($request->user()->id);

        $userInfo = DB::table('users')
        ->select('name', 'status', 'email', DB::raw('LPAD(cpf,11,0) AS cpf'), 'telefone')
        ->where('id', '=', $request->user()->id)
        ->first();

        return response()->json(['data'=>[
                'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
                'status' => session('status'),
                'profile' => $request->user()->name,
                'email' => $request->user()->email,
                'telefone' => $userInfo->telefone,
                'cpf' => $userInfo->cpf,
                'name' => $userInfo->name,
                'status' => $userInfo->status,
                'email' => $userInfo->email,
            ]]
        );
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        $profile = new Profile([request()->all(), 'user_id' => $request->user()->id]);

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        return Redirect::route('profile.edit');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current-password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
