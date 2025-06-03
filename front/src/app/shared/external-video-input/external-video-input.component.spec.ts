import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalVideoInputComponent } from './external-video-input.component';

describe('ExternalVideoInputComponent', () => {
  let component: ExternalVideoInputComponent;
  let fixture: ComponentFixture<ExternalVideoInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExternalVideoInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExternalVideoInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
