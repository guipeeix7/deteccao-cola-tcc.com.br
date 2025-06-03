import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DyamicSelectComponent } from './dyamic-select.component';

describe('DyamicSelectComponent', () => {
  let component: DyamicSelectComponent;
  let fixture: ComponentFixture<DyamicSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DyamicSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DyamicSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
