import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBComponent } from './input-b.component';

describe('InputBComponent', () => {
  let component: InputBComponent;
  let fixture: ComponentFixture<InputBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
