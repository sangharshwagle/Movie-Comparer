import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAComponent } from './input-a.component';

describe('InputAComponent', () => {
  let component: InputAComponent;
  let fixture: ComponentFixture<InputAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
