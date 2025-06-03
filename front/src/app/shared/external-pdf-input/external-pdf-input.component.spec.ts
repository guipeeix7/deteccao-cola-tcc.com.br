import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalPdfInputComponent } from './external-pdf-input.component';

describe('ExternalPdfInputComponent', () => {
  let component: ExternalPdfInputComponent;
  let fixture: ComponentFixture<ExternalPdfInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExternalPdfInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExternalPdfInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
