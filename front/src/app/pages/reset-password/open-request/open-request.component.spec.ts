import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenRequestComponent } from './open-request.component';

describe('OpenRequestComponent', () => {
  let component: OpenRequestComponent;
  let fixture: ComponentFixture<OpenRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
