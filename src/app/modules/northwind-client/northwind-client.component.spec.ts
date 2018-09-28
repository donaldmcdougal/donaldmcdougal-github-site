import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NorthwindClientComponent } from './northwind-client.component';

describe('NorthwindClientComponent', () => {
  let component: NorthwindClientComponent;
  let fixture: ComponentFixture<NorthwindClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NorthwindClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NorthwindClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
