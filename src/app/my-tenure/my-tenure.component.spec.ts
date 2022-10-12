import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTenureComponent } from './my-tenure.component';

describe('MyTenureComponent', () => {
  let component: MyTenureComponent;
  let fixture: ComponentFixture<MyTenureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTenureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTenureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
