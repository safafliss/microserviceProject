import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListoffreemploisComponent } from './listoffreemplois.component';

describe('ListoffreemploisComponent', () => {
  let component: ListoffreemploisComponent;
  let fixture: ComponentFixture<ListoffreemploisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListoffreemploisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListoffreemploisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
