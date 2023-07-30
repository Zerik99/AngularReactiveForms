import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidFormComponent } from './valid-form.component';

describe('ValidFormComponent', () => {
  let component: ValidFormComponent;
  let fixture: ComponentFixture<ValidFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidFormComponent]
    });
    fixture = TestBed.createComponent(ValidFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
