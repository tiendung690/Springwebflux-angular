import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletetweetComponent } from './deletetweet.component';

describe('DeletetweetComponent', () => {
  let component: DeletetweetComponent;
  let fixture: ComponentFixture<DeletetweetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletetweetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletetweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
