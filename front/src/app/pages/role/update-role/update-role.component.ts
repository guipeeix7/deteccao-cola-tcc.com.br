import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Role } from './../shared/role'
import { RoleService } from './../shared/role.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CustomAsyncValidatorss } from 'src/app/shared/unique-validator.directive';
import { BaseService } from 'src/app/shared/base.service';
import { Permission } from '../../permission/shared/permission';
import { AuthService } from 'src/app/services/api-auth/auth.service'

@Component({
  selector: 'app-update-role',
  templateUrl: './update-role.component.html',
  styleUrls: ['./update-role.component.scss']
})
export class UpdateRoleComponent {
  constructor(private fb: FormBuilder , private router: Router,  private authService: AuthService, private baseService: BaseService, private roleService : RoleService, private route: ActivatedRoute ){}

  form!: FormGroup;
  loading = false;
  disabled = false;
  role : Role;
  errorMessages: ValidationErrors;
  dataId : number;
  permissionsList:Permission[] = [];
  roleForm = this.fb.group({
    name: ['',{
      validators: [Validators.compose([Validators.required]) ] ,
      asyncValidators: [
        // CustomAsyncValidatorss.uniqueNameValidator(this.baseService,  'name', 'role-verify-name')
      ],
      // updateOn: 'blur'
    }],
    permissions: [,]
  });

  get name(){ return this.roleForm.get('name')}
  get siglaRole() { return this.roleForm.get('siglaRole'); }
  get permissions() { return this.roleForm.get('permissions'); }

  getData(resp){
    this.role = resp
    this.permissionsList = resp['permissions'];
    this.permissions.setValue(this.permissionsList.map((x) => {return x['id']}))
    this.name.setValue(this.role.name);
  }

  ngOnInit(){
    this.dataId = Number(this.route.snapshot.paramMap.get('id'));

    this.roleService.getDataById(this.dataId).subscribe((resp) => {this.getData(resp['data'])})
  }

  toggleSubmit(){
    if(this.loading == true){
      this.loading = false;
      this.disabled = false;
    }else{
      this.loading = true;
      this.disabled = true;
    }
  }

  onSubmit(){
    this.toggleSubmit()
    this.roleService.updateDataInputs(this.dataId, this.roleForm.value).subscribe(() => {
      this.roleService.getDataById(this.dataId ).subscribe((resp) => {this.getData(resp['data'])})

      this.toggleSubmit()

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Registro atualizado com sucesso',
        showConfirmButton: false,
        timer: 2000
      }).then(() => {
        this.authService.getUserPermission().subscribe(
          (resp) => {
            localStorage.setItem('permissions', JSON.stringify(resp['data'].map((x) => {return x.name})));
            window.location.reload()
          },
        )
      })
    })
  }

}
