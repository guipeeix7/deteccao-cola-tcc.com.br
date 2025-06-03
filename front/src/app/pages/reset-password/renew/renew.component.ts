import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResetPasswordService } from '../shared/reset-password.service'
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-renew',
  templateUrl: './renew.component.html',
  styleUrls: ['./renew.component.scss']
})
export class RenewComponent {
  constructor(private route:ActivatedRoute, private router: Router,private fb:FormBuilder, private resetPasswordService: ResetPasswordService){}
  loading
  renewPassForm = this.fb.group(
    {
      token: ['',{validators: [Validators.required]}],
      password: ['',{validators:[Validators.required]}],
      password_confirmation: ['',{validators:[Validators.required]}],
      email: ['',{disabled: true}]
    }
  )

  get token(){ return this.renewPassForm.get('token');}
  get email(){return this.renewPassForm.get('email')}
  get password(){return this.renewPassForm.get('password')}
  get password_confirmation(){return this.renewPassForm.get('password_confirmation')}
  ngOnInit(){
    this.token.setValue(this.route.snapshot.paramMap.get('token'))
    this.email.setValue(this.route.snapshot.queryParamMap.get('email'))
  }

  submitPassowrd(){
    this.loading = true;
    if(this.password_confirmation.value == this.password.value){
      this.resetPasswordService.renewPass(this.renewPassForm.value).subscribe((resp)=>{
        // alert('data sended')
        this.loading = false;
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Senha atualizada com sucesso',
          showConfirmButton:true,
          confirmButtonText:'Fazer Login',
          text:'Pronto para fazer o login',
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(['login'])
          }
        })
      });

    }
    else{
      alert('As senhas não coincidem');
    }
  }
}
