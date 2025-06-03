<?php
namespace App\Http\Controllers\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Auth\Events\Verified;
// use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\RedirectResponse;
use App\Providers\RouteServiceProvider;
use App\Http\Requests\EmailVerificationRequest;
use App\Models\User;

class VerifyEmailController extends Controller
{

    public function __invoke(EmailVerificationRequest $request)
    {
        $user = User::find(request()->route('id'));
        if ($user->hasVerifiedEmail()) {
            // return redirect()->intended(RouteServiceProvider::HOME.'?verified=1');
            return redirect()->away(env('FRONTEND_URL'));
            // return redirect()->away(env('FRONTEND_URL'));
        }

        if ($user->markEmailAsVerified()) {
            event(new Verified($user));
        }
        return redirect()->away(env('FRONTEND_URL'));
    }
}
