import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ResetPasswordService } from '../shared/reset-password.service';
import Swal from 'sweetalert2';
import { UsersService } from '../../user/shared/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-open-request',
  templateUrl: './open-request.component.html',
  styleUrls: ['./open-request.component.scss']
})
export class OpenRequestComponent {
  constructor(private fb: FormBuilder, private router:Router, private resetPasswordService:ResetPasswordService, private userService: UsersService){}
  resetRequestFb = this.fb.group({
    email:['',{validators:[Validators.required]}]
  });
  loading:boolean = false;
  // ngOnInit(){
  //   this.userService.logout().subscribe((resp) => {
  //     localStorage.setItem('permissions', JSON.stringify(""))
  //     this.router.navigate(['/login']);
  //   })
  // }

  submitEmail(){
    this.loading = true;
    return this.resetPasswordService.resetPass(this.resetRequestFb.value).subscribe((resp)=>{
      Swal.fire({
        position: 'center',
        icon: 'info',
        title: 'Informação',
        text:resp['status'],
        showConfirmButton: true,
      }).then(() => {
        this.loading = false;
      })
    });
  }
}
