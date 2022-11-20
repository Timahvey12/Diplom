import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoginInComponent } from './user-login-in.component';

describe('UserLoginInComponent', () => {
  let component: UserLoginInComponent;
  let fixture: ComponentFixture<UserLoginInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLoginInComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLoginInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
