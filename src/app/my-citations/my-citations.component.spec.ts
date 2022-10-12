import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCitationsComponent } from './my-citations.component';

describe('MyCitationsComponent', () => {
  let component: MyCitationsComponent;
  let fixture: ComponentFixture<MyCitationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCitationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCitationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
