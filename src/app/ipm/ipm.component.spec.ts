<<<<<<< HEAD
import { TestBed, async } from '@angular/core/testing';
import { IpmComponent } from './ipm.component';
describe('IpmComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        IpmComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(IpmComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(IpmComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(IpmComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
=======
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
>>>>>>> 5621d817a9c3d4f8b3180483bb819f6ec4d03033
});
