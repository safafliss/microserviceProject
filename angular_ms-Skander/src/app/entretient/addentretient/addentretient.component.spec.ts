import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddentretientComponent } from './addentretient.component';

describe('AddentretientComponent', () => {
  let component: AddentretientComponent;
  let fixture: ComponentFixture<AddentretientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddentretientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddentretientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
