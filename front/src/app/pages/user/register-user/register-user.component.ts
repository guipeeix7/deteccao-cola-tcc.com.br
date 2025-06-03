import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../shared/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss'],
})
export class RegisterUserComponent implements OnInit {
  constructor(
    private userService: UsersService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  loading = false;
  
  registrationForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password_confirmation: ['', Validators.required]
  }, { validators: this.passwordMatchingValidator });

  get name() { return this.registrationForm.get('name'); }
  get email() { return this.registrationForm.get('email'); }
  get password() { return this.registrationForm.get('password'); }
  get passwordConfirmation() { return this.registrationForm.get('password_confirmation'); }

  ngOnInit(): void {}

  passwordMatchingValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('password_confirmation');

    return password && confirmPassword && password.value !== confirmPassword.value
      ? { passwordsNotMatching: true }
      : null;
  }

  onSubmit(): void {
    if (this.registrationForm.invalid) {
      return;
    }

    this.loading = true;

    const userData = {
      name: this.name.value,
      email: this.email.value,
      password: this.password.value,
      password_confirmation: this.passwordConfirmation.value
    };

    this.userService.registerUser(userData).subscribe({
      next: (response) => {
        this.loading = false;
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Usuário registrado com sucesso',
          showConfirmButton: false,
          timer: 2000
        }).then(() => {
          this.router.navigate(['/user/update/'+response['userId']]);
        });
      },
      error: (error) => {
        
        console.log(error)

        this.loading = false;
        let errorMessage = 'Falhar no registro, verifique se o email já existe.';
        
        if (error.error && error.error.errors) {
          const errors = error.error.errors;
          errorMessage = Object.values(errors).flat().join('<br>');
        }
        else if(error.message){
          errorMessage = error.message;          
        }
        
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Falhar no registro',
          html: errorMessage,
          confirmButtonText: 'Try Again'
        });
      }
    });
  }
}