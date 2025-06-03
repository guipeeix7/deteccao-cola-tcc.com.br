import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSelectableListComponent } from './custom-selectable-list.component';

describe('CustomSelectableListComponent', () => {
  let component: CustomSelectableListComponent;
  let fixture: ComponentFixture<CustomSelectableListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomSelectableListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomSelectableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
