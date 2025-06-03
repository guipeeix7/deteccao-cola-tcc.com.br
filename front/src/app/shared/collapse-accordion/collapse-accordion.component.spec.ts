import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapseAccordionComponent } from './collapse-accordion.component';

describe('CollapseAccordionComponent', () => {
  let component: CollapseAccordionComponent;
  let fixture: ComponentFixture<CollapseAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollapseAccordionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollapseAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
