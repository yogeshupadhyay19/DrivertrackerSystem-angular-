import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedriveComponent } from './updatedrive.component';

describe('UpdatedriveComponent', () => {
  let component: UpdatedriveComponent;
  let fixture: ComponentFixture<UpdatedriveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatedriveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
