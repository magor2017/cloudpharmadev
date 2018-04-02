import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirecteComponent } from './directe.component';

describe('DirecteComponent', () => {
  let component: DirecteComponent;
  let fixture: ComponentFixture<DirecteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirecteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirecteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
