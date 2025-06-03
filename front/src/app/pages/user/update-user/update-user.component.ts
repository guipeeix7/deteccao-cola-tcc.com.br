import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../shared/user.service';
import { User } from '../shared/user';
import Swal from 'sweetalert2';
import { Role } from '../../role/shared/role';
import { environment } from 'src/environments/environment';
import { last, map } from 'rxjs';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { convertReactiveIntoformData } from 'src/app/shared/utils';
import { BaseService } from 'src/app/shared/base.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss'],

})
export class UpdateUserComponent {
  constructor(private userService: UsersService, private fb: FormBuilder, private route: ActivatedRoute, private roter:Router, private baseService: BaseService) { }
  dataId : number;
  user : User;
  loading : any;
  disabled : any;
  file:File;
  preview:any;
  rolesList: Role[] = [];
  private API_URL = environment.API_URL;

  userForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: [''],
    apelido: ['', Validators.maxLength(60)],
    CPF: ['', Validators.pattern(/^\d{11}$/)],
    dataNascimento: [''],
    status: ['', Validators.required],
    lastIpAddress: ['', Validators.maxLength(46)],
    fotoPerfil: ['', Validators.maxLength(120)],
    roles: [,],
    schoolSufix: ['']
  });

  get name() {return this.userForm.get('name');}
  get email() {return this.userForm.get('email');}
  get password() {return this.userForm.get('password');}
  get apelido() {return this.userForm.get('apelido');}
  get CPF() {return this.userForm.get('CPF');}
  get dataNascimento() {return this.userForm.get('dataNascimento');}
  get status() {return this.userForm.get('status');}
  get lastIpAddress() {return this.userForm.get('lastIpAddress');}
  get fotoPerfil() {return this.userForm.get('fotoPerfil');}
  get roles() {return this.userForm.get('roles');}
  get schoolSufix() {return this.userForm.get('schoolSufix');}
  progress:number = 0


  ngOnInit() {
    this.dataId = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getDataById(this.dataId).subscribe((resp) => {this.getData(resp['data'])})
  }

  getData(resp){
    this.user = resp
    this.name.setValue(this.user.name);
    this.apelido.setValue(this.user.apelido);
    this.email.setValue(this.user.email);
    this.CPF.setValue(this.user.CPF);
    this.dataNascimento.setValue(this.user.dataNascimento);
    this.status.setValue(this.user.status.toString());
    this.fotoPerfil.setValue(this.user.fotoPerfil);
    this.schoolSufix.setValue(this.user.schoolSufix);
    this.roles.setValue( this.user['roles'].map((x) => {return x['id']}));
    this.rolesList = this.user['roles']

    if(this.user.fotoPerfil != null){
      this.preview = (
          this.user.fotoPerfil.indexOf('http://') >= 0 ||
          this.user.fotoPerfil.indexOf('https://') >= 0
        ) ?
        this.user.fotoPerfil :
        this.API_URL+'storage/'+this.user.fotoPerfil
    }
  }

  assingUserType(userType){

    Swal.fire({
      position: 'center',
      icon: 'warning',
      title: 'Atenção',
      html: 'Esta ação irá alterar permanentemente os dados referente ao tipo de usuário até então armazenados. Sendo necessário o preenchimento por parte do usuário.',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Alterar!',
      cancelButtonText: 'Cancelar'
      })
      .then((result) => {
        if (result.isConfirmed) {
          this.userService.assignUserType(this.dataId, userType).subscribe((resp) => {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Tipo de usuário alterado com sucesso',
              showConfirmButton: false,
              timer: 2000
            }).then(() => {
              this.userService.getDataById(this.dataId).subscribe((resp) => {this.getData(resp['data'])})
            })
          })
        }
      })

  }

  deleteAccount(){
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'A conta do usuário será deleta de forma COMPLETAMENTE irreversível.',
        showCancelButton: true,
        text: '',
        confirmButtonColor:'#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Deletar!',
        cancelButtonText: 'Cancelar'
      }).then((result)=>{
        if (result.isConfirmed) {
            this.userService.deleteUsersByRequest(this.dataId).subscribe((resp) => {
              if(resp['error'] == ''){
                Swal.fire({
                  position: 'center',
                  icon: 'info',
                  title: 'Conta deletada.',
                  text: '',
                })
                .then(() => {
                  this.roter.navigate(['/user']);
                });
              }
           })
        }
    })
  }

  toggleSubmit() {
    if (this.loading == true) {
      this.loading = false;
      this.disabled = false;
    } else {
      this.loading = true;
      this.disabled = true;
    }
  }
  private getEventMessage(event: HttpEvent<any>, file: File) {
      if (event.type == HttpEventType.UploadProgress) {
        this.progress = event.total ? Math.round(100 * event.loaded / event.total) : 0;
      }
    }
    
  

  onSubmit(): void {
    this.toggleSubmit()

    
    let formData = new FormData();
    formData = convertReactiveIntoformData(formData,this.userForm);
    
    // this.baseService.updateItemWithFile('curso/'+this.dataId, formData).pipe(
          // map(event => this.getEventMessage(event, this.file)),
          // last(),
    //   )

    this.baseService.updateItemWithFile('user/'+this.dataId, formData).pipe(
        map(event => this.getEventMessage(event, this.file)),
        last(),
      ).subscribe(resp => {
        console.log(resp)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Registro atualizado com sucesso',
          showConfirmButton: false,
          timer: 2000
        }).then(() => {
          
          // this.router.navigate(['cursos/update/' + resp['data']['id']])
        })
        this.toggleSubmit()
    })
    // this.userService.updateDataInputs(this.dataId, this.userForm).subscribe( 
    //   {
    //   next: (resp) => {
    //     Swal.fire({
    //       position: 'top-end',
    //       icon: 'success',
    //       title: 'Registro atualizado com sucesso',
    //       showConfirmButton: false,
    //       timer: 2000
    //     }).then(() => {
    //       this.userService.getDataById(this.dataId).subscribe((resp) => {this.getData(resp['data'])})
    //     })
    //     this.toggleSubmit()
    //   },
    //   error : (error) => {

    //   }
    // })

    // this.userService.updateDataInputs(this.dataId, this.userForm.value).subscribe({
    //   next: (resp) => {
    //     Swal.fire({
    //       position: 'top-end',
    //       icon: 'success',
    //       title: 'Registro atualizado com sucesso',
    //       showConfirmButton: false,
    //       timer: 2000
    //     }).then(() => {
    //       this.userService.getDataById(this.dataId).subscribe((resp) => {this.getData(resp['data'])})
    //     })
    //     this.toggleSubmit()
    //   },
    //   error : (error) => {

    //   }
    // })
  }
}
