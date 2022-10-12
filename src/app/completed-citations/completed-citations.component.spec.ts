import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedCitationsComponent } from './completed-citations.component';

describe('CompletedCitationsComponent', () => {
  let component: CompletedCitationsComponent;
  let fixture: ComponentFixture<CompletedCitationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedCitationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedCitationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
