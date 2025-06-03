import { Router } from "@angular/router"
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { AuthService } from '../../services/api-auth/auth.service';
import { SwalComponent } from "@sweetalert2/ngx-sweetalert2";
// import Swal from 'sweetalert2';
import Swal from 'sweetalert2';
import { forkJoin } from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(public authService: AuthService, private fb: FormBuilder, private router: Router) { }


  public loading: boolean;
  public disabled: boolean;

  loginForms = this.fb.group({
    email: ['', { validators: Validators.compose([Validators.required, Validators.email]), updateOn: 'blur' }],
    password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
  }
    //IN near future implement password strnght metter (;
  );

  get email() { return this.loginForms.get('email'); }
  get password() { return this.loginForms.get('password'); }

  headers = []
  ngOnInit() {
    this.authService.getIfIsLogged().subscribe(
      (resp) => {
        if (resp.body.status == 'auth') {
          this.loading = true;
          this.disabled = true;

          this.email.setValue(resp.body.email);
          this.password.setValue('*********');

          setTimeout(() => {
            // this.router.navigate(['overview'])
            this.redirectToUserSpace()
          }, 100)
        }else if(resp.body.status == 'guest'){
          return;
        }
      })
  }
  ngOnDestroy() {
  }

  loginAttempt() {
    if(this.loginForms.invalid) return;

    this.loading = true
    this.authService.login(this.loginForms.value).subscribe(
      (resp) => {
        const keys = resp.headers.keys();
        this.headers = keys.map(key =>
          `${key}: ${resp.headers.get(key)}`);
          this.loading = false

          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Login feito com sucesso',
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
            this.loading = false;
            this.disabled = false;

            // Use forkJoin to combine both observables
            forkJoin({
              permissions: this.authService.getUserPermission(),
              userInfo: this.authService.getLoggedUserInfo()
            }).subscribe(
              (result) => {
                localStorage.setItem('permissions',
                  JSON.stringify(result.permissions['data'].map((x) => x.name)));

                localStorage.setItem('userInfo',
                  JSON.stringify(result.userInfo['data']));

                this.redirectToUserSpace();
              },
              (error) => {
                // Handle error if needed
                console.error('Error fetching user data:', error);
              }
            );
          })
      },
      (error) => {                              //Error callback
        console.log(error.message)
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Email ou senha incorretos',
          showConfirmButton: true,
          timer: 1500
        }).then(() => {
          this.loading = false;
          this.disabled = false;
        })
      });
  }

  redirectToUserSpace(){
    let permissionsArray = JSON.parse( localStorage.getItem('permissions') );

    this.router.navigate(['user/my-account']);
  }

  onSubmit(): void {
    this.loading = true;
    this.disabled = true;


    console.log(this.loginForms.value)
    this.authService.login(this.loginForms.value).subscribe(
      (resp) => {
        console.log(resp)
        this.loading = false;
        this.disabled = false;
      },
      (error) => {                              //Error callback
        console.log(error.message)
        alert('error')
        this.loading = false;
        this.disabled = false;
      }
    )
  }
}
