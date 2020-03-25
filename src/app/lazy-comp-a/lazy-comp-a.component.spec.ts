import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyCompAComponent } from './lazy-comp-a.component';

describe('LazyCompAComponent', () => {
  let component: LazyCompAComponent;
  let fixture: ComponentFixture<LazyCompAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyCompAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyCompAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
