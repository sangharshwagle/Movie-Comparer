import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupHomeComponent } from './signup-home.component';

describe('SignupHomeComponent', () => {
  let component: SignupHomeComponent;
  let fixture: ComponentFixture<SignupHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
