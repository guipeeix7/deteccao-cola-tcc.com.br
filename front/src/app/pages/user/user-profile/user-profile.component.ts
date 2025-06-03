import { AfterViewInit, Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProfileService } from '../../../services/profile/profile.service';
import Swal from 'sweetalert2';
import { UserProfileFormsComponent } from '../shared/user-profile-forms/user-profile-forms.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements AfterViewInit{
  userProfile:any =[];
  constructor(private profileService: ProfileService, private fb: FormBuilder) { }
  statusValue:string;
  public isCollapsed = false;
  formsLoaded:boolean = false;
  loading:boolean = false;

  // @ViewChildren(UserProfileFormsComponent) userProfileFormsComponent!: UserProfileFormsComponent;
  @ViewChild(UserProfileFormsComponent)
  userProfileFormsComponent
  ngAfterViewInit() {
  //   this.formsLoaded = this.userProfileFormsComponent.loaded;
  }

  submitForms(){
    this.userProfileFormsComponent.onSubmit();
  }
  // profileForm = this.fb.group({
  //   name: ['', Validators.required],
  //   nickname: ['', Validators.required],
  //   CPF: ['', Validators.required],
  //   bornDate: ['', Validators.required],
  //   email: ['', [Validators.required, Validators.email]],
  //   password: ['', Validators.required],
  //   password_confirmation: ['', Validators.required],
  //   status: ['', Validators.required],
  //   lastIpAddress: ['', Validators.required],
  //   telefone: ['', Validators.required],
  //   country: ['', Validators.required],
  //   state: ['', Validators.required],
  //   city: ['', Validators.required],
  //   neighborhood: ['', Validators.required],
  //   complement: [''],
  //   number: ['', Validators.required]
  // });

  // get name() { return this.profileForm.get('name'); }
  // get nickname() { return this.profileForm.get('nickname'); }
  // get CPF() { return this.profileForm.get('CPF'); }
  // get bornDate() { return this.profileForm.get('bornDate'); }
  // get email() { return this.profileForm.get('email'); }
  // get password() { return this.profileForm.get('password'); }
  // get password_confirmation() { return this.profileForm.get('password_confirmation'); }
  // get status() { return this.profileForm.get('status'); }
  // get telefone() { return this.profileForm.get('telefone'); }
  // get country() { return this.profileForm.get('country'); }
  // get state() { return this.profileForm.get('state'); }
  // get city() { return this.profileForm.get('city'); }
  // get neighborhood() { return this.profileForm.get('neighborhood'); }
  // get complement() { return this.profileForm.get('complement'); }
  // get number() { return this.profileForm.get('number'); }

  // getData(data){
  //   this.userProfile = data
  //   this.statusValue = data.status;
  //   this.name.setValue(data.name);
  //   this.email.setValue(data.email);
  //   this.status.setValue(data.status);
  //   this.CPF.setValue(data.cpf);
  //   this.telefone.setValue(data.telefone);
  // }

  // ngOnInit() {
  //   this.profileService.getProfile().subscribe((response) => {
  //     this.getData(response['data'])
  //   })
  // }

  deleteAccount(){
    Swal.fire({
      position: 'center',
      icon: 'warning',
      title: 'Esta ação nao poderá ser desfeita e TODOS os dados da sua conta inclusive compras serão excluidos',
      showCancelButton: true,
      text: '',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Deletar Conta!',
      cancelButtonText: 'Cancelar'
      })
      .then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'Sua solicitação de exclusão será enviada e sua conta excluida no periodo de 30 dias.',
            showCancelButton: true,
            text: '',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Solicitar!',
            cancelButtonText: 'Cancelar'
        }).then((result)=>{
          if (result.isConfirmed) {
            this.profileService.deleteAccount().subscribe((resp) => {
              window.location.reload();
            });
          }
        })
        }
      })

  }

  cancelAccountDeletion(){
    this.profileService.cancelAccountDeletion().subscribe((resp) => {
      window.location.reload();

    });
  }

  // onSubmit(): void {
  //   this.profileService.updateProfile(this.profileForm.value).subscribe({
  //     next: (resp) => {
  //       Swal.fire({
  //         position: 'top-right',
  //         icon: 'success',
  //         title: 'Dados atualizados com sucesso.',
  //         showConfirmButton: false,
  //         text: '',
  //       })
  //       console.log(resp)
  //     },
  //     error : (error) => {                              //Error callback
  //       console.log(error.message)
  //       alert('error')
  //     }
  //   })
  // }

}
