import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProfileService } from '../../../../services/profile/profile.service';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/api-auth/auth.service';

@Component({
  selector: 'app-user-profile-forms',
  templateUrl: './user-profile-forms.component.html',
  styleUrls: ['./user-profile-forms.component.scss']
})
export class UserProfileFormsComponent {
  constructor(private profileService: ProfileService, private fb: FormBuilder, private authService: AuthService) { }
  public isCollapsed = false;
  @Input() loading:boolean = false;
  userProfile:any =[];
  userId:number;
  statusValue:string;
  updated: boolean = false;
  @Input() loaded!:boolean | number;
  @Output() loadEmmit = new EventEmitter<boolean>();
  @Output() accountStatusEmmit = new EventEmitter<boolean>();

  profileForm = this.fb.group({
    name: ['', Validators.required],
    nickname: ['', Validators.required],
    CPF: ['', Validators.required],
    bornDate: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    password_confirmation: ['', Validators.required],
    status: ['', Validators.required],
    lastIpAddress: ['', Validators.required],
    telefone: ['', Validators.required],
    country: ['', Validators.required],
    state: ['', Validators.required],
    city: ['', Validators.required],
    neighborhood: ['', Validators.required],
    complement: [''],
    number: ['', Validators.required]
  });


  get name() { return this.profileForm.get('name'); }
  get nickname() { return this.profileForm.get('nickname'); }
  get CPF() { return this.profileForm.get('CPF'); }
  get bornDate() { return this.profileForm.get('bornDate'); }
  get email() { return this.profileForm.get('email'); }
  get password() { return this.profileForm.get('password'); }
  get password_confirmation() { return this.profileForm.get('password_confirmation'); }
  get status() { return this.profileForm.get('status'); }
  get telefone() { return this.profileForm.get('telefone'); }
  get country() { return this.profileForm.get('country'); }
  get state() { return this.profileForm.get('state'); }
  get city() { return this.profileForm.get('city'); }
  get neighborhood() { return this.profileForm.get('neighborhood'); }
  get complement() { return this.profileForm.get('complement'); }
  get number() { return this.profileForm.get('number'); }

  getData(data){
    this.userProfile = data
    this.statusValue = data.status;
    this.name.setValue(data.name);
    this.userId = data.name;
    this.email.setValue(data.email);
    this.status.setValue(data.status);
    this.CPF.setValue(data.cpf);
    this.telefone.setValue(data.telefone);
    this.loaded = true;
    this.loadEmmit.emit(true);
    this.accountStatusEmmit.emit(data.status)

  }
  ngOnInit() {
    this.profileService.getProfile().subscribe((response) => {
      this.getData(response['data'])
    })
  }

  onSubmit() {
    this.updated = false;
    this.loading = true;
    return this.profileService.updateProfile(this.profileForm.value).subscribe(
      (resp) => {
        if(typeof resp?.message !== 'undefined' && resp?.message != ""){
          this.authService.getLoggedUserInfo().subscribe((result) => {
            localStorage.setItem('userInfo', JSON.stringify(result.data));
          });
          Swal.fire({
            position: 'top-right',
            icon: 'error',
            title: resp['message'],
            showConfirmButton: true,
            text: '',
          })
          return;
        }
        Swal.fire({
          position: 'top-right',
          icon: 'success',
          title: 'Dados atualizados com sucesso.',
          showConfirmButton: false,
          text: '',
          timer: 1500
        })
        this.loading = false;
    })
  }
}
