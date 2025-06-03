import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeviewSelectableComponent } from './treeview-selectable.component';

describe('TreeviewSelectableComponent', () => {
  let component: TreeviewSelectableComponent;
  let fixture: ComponentFixture<TreeviewSelectableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreeviewSelectableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeviewSelectableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
