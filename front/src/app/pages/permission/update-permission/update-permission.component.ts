import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Permission } from './../shared/permission'
import { PermissionService } from './../shared/permission.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Role } from '../../role/shared/role';

@Component({
  selector: 'app-update-permission',
  templateUrl: './update-permission.component.html',
  styleUrls: ['./update-permission.component.scss']
})
export class UpdatePermissionComponent {
  constructor(private fb: FormBuilder , private permissionService : PermissionService, private route: ActivatedRoute ){}

  form!: FormGroup;
  loading = false;
  disabled = false;
  permission : Permission;
  errorMessages: ValidationErrors;
  dataId : number;
  rolesList: Role[] = [];

  permissionForm = this.fb.group({
    name: ['',{
      validators: [Validators.compose([Validators.required]) ] ,
      asyncValidators: [
        // CustomAsyncValidatorss.uniqueNameValidator(this.baseService,  'name', 'permission-verify-name')
      ],
      // updateOn: 'blur'
    }],
    roles: [,],
    idArea: [,]
  });

  get name(){ return this.permissionForm.get('name')}
  get roles() { return this.permissionForm.get('roles'); }
  get idArea() { return this.permissionForm.get('idArea'); }

  getData(resp){
    this.permission = resp

    // this.areaList = resp['areas']

    this.rolesList = resp['roles']
    // console.log('rolees', this.rolesList)
    // this.permissionForm.patchValue({roles: this.rolesList.map((x) => {return x['id']})});

    this.name.setValue(this.permission.name);
    return;
  }

  ngOnInit(){
    this.dataId = Number(this.route.snapshot.paramMap.get('id'));
    this.permissionService.getDataById(this.dataId).subscribe((resp) => {this.getData(resp['data'])})
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
    this.permissionService.updateDataInputs(this.dataId, this.permissionForm.value).subscribe(() => {
      this.permissionService.getDataById(this.dataId ).subscribe((resp) => {this.getData(resp['data'])})

      this.toggleSubmit()

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Registro atualizado com sucesso',
        showConfirmButton: false,
        timer: 2000
      })
    })
  }

}
