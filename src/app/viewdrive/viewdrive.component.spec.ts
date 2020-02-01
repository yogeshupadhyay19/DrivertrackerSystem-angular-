import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdriveComponent } from './viewdrive.component';

describe('ViewdriveComponent', () => {
  let component: ViewdriveComponent;
  let fixture: ComponentFixture<ViewdriveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewdriveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
