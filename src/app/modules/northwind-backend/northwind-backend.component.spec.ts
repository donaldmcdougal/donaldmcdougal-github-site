import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NorthwindBackendComponent } from './northwind-backend.component';

describe('NorthwindBackendComponent', () => {
  let component: NorthwindBackendComponent;
  let fixture: ComponentFixture<NorthwindBackendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NorthwindBackendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NorthwindBackendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
