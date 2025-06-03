import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeviewExpandOnlyComponent } from './treeview-expand-only.component';

describe('TreeviewExpandOnlyComponent', () => {
  let component: TreeviewExpandOnlyComponent;
  let fixture: ComponentFixture<TreeviewExpandOnlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreeviewExpandOnlyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeviewExpandOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
