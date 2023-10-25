import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddoffreemploisComponent } from './addoffreemplois.component';

describe('AddoffreemploisComponent', () => {
  let component: AddoffreemploisComponent;
  let fixture: ComponentFixture<AddoffreemploisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddoffreemploisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddoffreemploisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
