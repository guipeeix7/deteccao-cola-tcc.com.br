import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseService } from 'src/app/shared/base.service';
import { PermissionService } from 'src/app/pages/permission/shared/permission.service';
import Swal from 'sweetalert2';
import { CustomAsyncValidatorss } from 'src/app/shared/unique-validator.directive';

@Component({
  selector: 'app-create-permission',
  templateUrl: './create-permission.component.html',
  styleUrls: ['./create-permission.component.scss']
})
export class CreatePermissionComponent {
  constructor(private fb: FormBuilder, private router: Router, private baseService: BaseService, private route: ActivatedRoute
  ) { }
  loading = false;
  disabled = false;
  errorMessages: ValidationErrors;
  permissionForms = this.fb.group({
    name: ['',{
      validators: [Validators.compose([Validators.required]) ] ,
      asyncValidators: [
        CustomAsyncValidatorss.uniqueNameValidator(this.baseService,  'name', 'permission-verify-name')
      ],
      updateOn: 'blur'
    }],
  });

  get name() { return this.permissionForms.get('name'); }

  ngOnInit(){
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

  get isValid(){
    return this.permissionForms.controls['name'].valid;
  }

  get isTouched(){
    return this.permissionForms.controls['name'].touched;
  }

  onSubmit(){

      this.toggleSubmit()
      this.baseService.createItem('permission', this.permissionForms.value).subscribe(resp =>{

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Registro atualizado com sucesso',
        showConfirmButton: false,
        timer: 2000
      }).then(()=>{
        this.router.navigate(['permission/update/'+resp['data'].id])
      })
      this.toggleSubmit()
    })
  }

}
