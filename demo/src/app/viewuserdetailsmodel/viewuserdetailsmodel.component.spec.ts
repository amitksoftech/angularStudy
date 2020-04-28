import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewuserdetailsmodelComponent } from './viewuserdetailsmodel.component';

describe('ViewuserdetailsmodelComponent', () => {
  let component: ViewuserdetailsmodelComponent;
  let fixture: ComponentFixture<ViewuserdetailsmodelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewuserdetailsmodelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewuserdetailsmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
