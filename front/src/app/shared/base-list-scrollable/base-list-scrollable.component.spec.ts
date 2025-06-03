import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseListScrollableComponent } from './base-list-scrollable.component';

describe('BaseListScrollableComponent', () => {
  let component: BaseListScrollableComponent;
  let fixture: ComponentFixture<BaseListScrollableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseListScrollableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseListScrollableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
