import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSelectizeComponent } from './ng-selectize.component';

describe('NgSelectizeComponent', () => {
  let component: NgSelectizeComponent;
  let fixture: ComponentFixture<NgSelectizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgSelectizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSelectizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
