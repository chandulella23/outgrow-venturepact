import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyInteractiveHomeComponent } from './why-interactive-home.component';

describe('WhyInteractiveHomeComponent', () => {
  let component: WhyInteractiveHomeComponent;
  let fixture: ComponentFixture<WhyInteractiveHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyInteractiveHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyInteractiveHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
