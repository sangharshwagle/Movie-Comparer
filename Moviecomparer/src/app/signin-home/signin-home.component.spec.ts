import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInHomeComponent } from './signin-home.component';

describe('SignInHomeComponent', () => {
  let component: SignInHomeComponent ;
  let fixture: ComponentFixture<SignInHomeComponent >;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [  SignInHomeComponent  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
