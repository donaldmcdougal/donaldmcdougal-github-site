import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterBackendComponent } from './starter-backend.component';

describe('StarterBackendComponent', () => {
  let component: StarterBackendComponent;
  let fixture: ComponentFixture<StarterBackendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarterBackendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarterBackendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
