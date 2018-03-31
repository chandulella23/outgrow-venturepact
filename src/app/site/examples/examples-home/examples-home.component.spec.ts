import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamplesHomeComponent } from './examples-home.component';

describe('ExamplesHomeComponent', () => {
  let component: ExamplesHomeComponent;
  let fixture: ComponentFixture<ExamplesHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamplesHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamplesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
