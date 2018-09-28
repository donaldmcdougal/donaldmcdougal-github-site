import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuralComponent } from './neural.component';

describe('NeuralComponent', () => {
  let component: NeuralComponent;
  let fixture: ComponentFixture<NeuralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeuralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeuralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
