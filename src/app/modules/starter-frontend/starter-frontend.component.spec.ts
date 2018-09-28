import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterFrontendComponent } from './starter-frontend.component';

describe('StarterFrontendComponent', () => {
  let component: StarterFrontendComponent;
  let fixture: ComponentFixture<StarterFrontendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarterFrontendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarterFrontendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
