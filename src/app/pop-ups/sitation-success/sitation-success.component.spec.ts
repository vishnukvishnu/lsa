import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitationSuccessComponent } from './sitation-success.component';

describe('SitationSuccessComponent', () => {
  let component: SitationSuccessComponent;
  let fixture: ComponentFixture<SitationSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitationSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitationSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
