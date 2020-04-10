import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleregisterationComponent } from './simpleregisteration.component';

describe('SimpleregisterationComponent', () => {
  let component: SimpleregisterationComponent;
  let fixture: ComponentFixture<SimpleregisterationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleregisterationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleregisterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
