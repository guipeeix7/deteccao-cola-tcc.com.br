import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileFormsComponent } from './user-profile-forms.component';

describe('UserProfileFormsComponent', () => {
  let component: UserProfileFormsComponent;
  let fixture: ComponentFixture<UserProfileFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProfileFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserProfileFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
