import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListentretientComponent } from './listentretient.component';

describe('ListentretientComponent', () => {
  let component: ListentretientComponent;
  let fixture: ComponentFixture<ListentretientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListentretientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListentretientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
