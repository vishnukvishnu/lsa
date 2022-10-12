import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfCitationsComponent } from './self-citations.component';

describe('SelfCitationsComponent', () => {
  let component: SelfCitationsComponent;
  let fixture: ComponentFixture<SelfCitationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfCitationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfCitationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
