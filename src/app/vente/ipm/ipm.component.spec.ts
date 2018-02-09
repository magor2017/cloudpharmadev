import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpmComponent } from './ipm.component';

describe('IpmComponent', () => {
  let component: IpmComponent;
  let fixture: ComponentFixture<IpmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
