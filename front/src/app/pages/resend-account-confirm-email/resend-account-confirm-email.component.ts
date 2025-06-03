import { Component } from '@angular/core';
import { ResendAccountConfirmEmailService } from './resend-account-confirm-email.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { UsersService } from '../user/shared/user.service';

@Component({
  selector: 'app-resend-account-confirm-email',
  templateUrl: './resend-account-confirm-email.component.html',
  styleUrls: ['./resend-account-confirm-email.component.scss']
})
export class ResendAccountConfirmEmailComponent {
  constructor(private resendAccountConfirmEmailService: ResendAccountConfirmEmailService, private router:Router, private userService: UsersService){}
  email:string|undefined;
  loading:boolean = false;
  ngOnInit(){
    this.resendAccountConfirmEmailService.getUserInfo().subscribe((res)=>{
      this.getData(res['data'])
      if(res['data']['mustVerifyEmail'] == false){
        this.router.navigate([''])
      }
    });
  }
  resendEmail(){
    this.loading = true;
    this.resendAccountConfirmEmailService.sendEmailAttempt().subscribe((res)=>{
      Swal.fire({
        // position: 'top-end',
        icon: 'info',
        title: 'Informação',
        html: res['status'],
        showCancelButton: true,
        cancelButtonText: "Voltar!",
        showConfirmButton: true,
      })
      this.loading = false;
    });
  }
  getData(res){
    this.email = res['email'];
  }

  switchAccount(){
    this.userService.logout().subscribe((resp) => {
      localStorage.setItem('permissions', JSON.stringify(""))
      this.router.navigate(['/login']);
    })
  }
  
}
