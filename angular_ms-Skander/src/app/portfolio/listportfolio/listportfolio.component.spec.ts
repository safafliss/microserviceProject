import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListportfolioComponent } from './listportfolio.component';

describe('ListportfolioComponent', () => {
  let component: ListportfolioComponent;
  let fixture: ComponentFixture<ListportfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListportfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListportfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
