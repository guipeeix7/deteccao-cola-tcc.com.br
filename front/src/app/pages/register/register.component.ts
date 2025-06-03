import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/api-auth/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { RegisterDirective } from './../../directives/register/register.directive';
import { Router } from "@angular/router"
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(public authService: AuthService, private fb: FormBuilder, private router: Router) { }

  public loading: boolean;
  public disabled: boolean;

  registerForm = this.fb.group({
    name: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
    email: ['', { validators: Validators.compose([Validators.required, Validators.email]), updateOn: 'blur' }],
    password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    password_confirmation: ['', { validators: [Validators.compose([Validators.required, Validators.minLength(6)])] }]
  }, { validators: RegisterDirective.validatePassword }
    //IN near future implement password strnght metter (;
  );

  get name() { return this.registerForm.get('name'); }
  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }
  get password_confirmation() { return this.registerForm.get('password_confirmation'); }

  ngOnInit() {
    this.authService.getIfIsLogged().subscribe(
      (resp) => {
        if (resp.body.status == 'auth') {
          this.loading = true;
          this.disabled = true;
          this.email.setValue(resp.body.email);
          this.password.setValue('*********');
          this.router.navigate(['questao/select-to-train']);

          setTimeout(() => {
            this.router.navigate(['']);
          }, 1000)
        }
      })
  }

  onSubmit(): void {
    if(!this.registerForm.valid) return;
    this.loading = true;
    this.disabled = true;

    this.authService.register(this.registerForm.value).subscribe(
      (resp) => {
        Swal.fire({
          position: 'center',
          icon: 'info',
          title: '<h4>Conta não validada, por favor checar seu email para confirmação!</h4> ou <br><br> <div class="text-center"> <a class="btn btn-primary" href="/resend-account-confirm"> Enviar novo email ',
          showConfirmButton: true,
        }).then(function(isConfirm){
          if (isConfirm) {  
            console.log(resp)
            this.router.navigate(['resend-account-confirm']);
          }
        })
        // this.authService.getUserPermission().subscribe(
        //   (resp) => {
        //     Swal.fire({
        //       position: 'top-end',
        //       icon: 'success',
        //       title: 'Login feito com sucesso',
        //       showConfirmButton: false,
        //       timer: 1500
        //     }).then(()=>{
        //       console.log(resp)
        //       localStorage.setItem('permissions', JSON.stringify(resp['data'].map((x) => {return x.name})));
        //       this.router.navigate(['curso/list-all']);
        //     })
        //   },
        // )
        //   this.loading = false;
        //   this.disabled = false;

      },
      (error) => {
        console.log(error.message)

        this.loading = false;
        this.disabled = false;
      }
    )
  }
}
