import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfettiAnimateComponent } from './confetti-animate.component';

describe('ConfettiAnimateComponent', () => {
  let component: ConfettiAnimateComponent;
  let fixture: ComponentFixture<ConfettiAnimateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfettiAnimateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfettiAnimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
