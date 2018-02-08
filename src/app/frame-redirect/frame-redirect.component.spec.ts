import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameRedirectComponent } from './frame-redirect.component';

describe('FrameRedirectComponent', () => {
  let component: FrameRedirectComponent;
  let fixture: ComponentFixture<FrameRedirectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrameRedirectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
