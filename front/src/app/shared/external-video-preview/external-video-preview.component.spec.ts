import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalVideoPreviewComponent } from './external-video-preview.component';

describe('ExternalVideoPreviewComponent', () => {
  let component: ExternalVideoPreviewComponent;
  let fixture: ComponentFixture<ExternalVideoPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExternalVideoPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExternalVideoPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
