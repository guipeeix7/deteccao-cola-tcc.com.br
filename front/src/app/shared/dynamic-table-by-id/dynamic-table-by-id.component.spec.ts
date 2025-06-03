import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicTableByIdComponent } from './dynamic-table-by-id.component';

describe('DynamicTableByIdComponent', () => {
  let component: DynamicTableByIdComponent;
  let fixture: ComponentFixture<DynamicTableByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicTableByIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicTableByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
