import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingCitationsComponent } from './pending-citations.component';

describe('PendingCitationsComponent', () => {
  let component: PendingCitationsComponent;
  let fixture: ComponentFixture<PendingCitationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingCitationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingCitationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
