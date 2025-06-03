import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResendAccountConfirmEmailComponent } from './resend-account-confirm-email.component';

describe('ResendAccountConfirmEmailComponent', () => {
  let component: ResendAccountConfirmEmailComponent;
  let fixture: ComponentFixture<ResendAccountConfirmEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResendAccountConfirmEmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResendAccountConfirmEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
