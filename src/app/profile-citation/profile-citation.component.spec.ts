import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCitationComponent } from './profile-citation.component';

describe('ProfileCitationComponent', () => {
  let component: ProfileCitationComponent;
  let fixture: ComponentFixture<ProfileCitationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileCitationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileCitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
