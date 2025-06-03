import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseService } from 'src/app/shared/base.service';
import { AuthService } from 'src/app/services/api-auth/auth.service'
import { RoleService } from 'src/app/pages/role/shared/role.service';
import Swal from 'sweetalert2';
import { CustomAsyncValidatorss } from 'src/app/shared/unique-validator.directive';

@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.scss']
})
export class CreateRoleComponent {
  constructor(private fb: FormBuilder, private authService: AuthService,  private router: Router, private baseService: BaseService, private route: ActivatedRoute
  ) { }
  loading = false;
  disabled = false;
  errorMessages: ValidationErrors;
  roleForms = this.fb.group({
    name: ['',{
      validators: [Validators.compose([Validators.required]) ] ,
      asyncValidators: [
        CustomAsyncValidatorss.uniqueNameValidator(this.baseService,  'name', 'role-verify-name')
      ],
      updateOn: 'blur'
    }],
  });

  get name() { return this.roleForms.get('name'); }

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
    return this.roleForms.controls['name'].valid;
  }

  get isTouched(){
    return this.roleForms.controls['name'].touched;
  }

  onSubmit(){

      this.toggleSubmit()
      this.baseService.createItem('role', this.roleForms.value).subscribe(resp =>{

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Registro atualizado com sucesso',
        showConfirmButton: false,
        timer: 2000
      }).then(()=>{
        this.authService.getUserPermission().subscribe(
          (resp) => {
            localStorage.setItem('permissions', JSON.stringify(resp['data'].map((x) => {return x.name})));
            this.router.navigate(['role/update/'+resp['data'].id])
          },
        )
      })
      this.toggleSubmit()
    })
  }

}
