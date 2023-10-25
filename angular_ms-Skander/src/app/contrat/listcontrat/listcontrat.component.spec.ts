import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcontratComponent } from './listcontrat.component';

describe('ListcontratComponent', () => {
  let component: ListcontratComponent;
  let fixture: ComponentFixture<ListcontratComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListcontratComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcontratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
