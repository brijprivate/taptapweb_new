import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaphistoryComponent } from './taphistory.component';

describe('TaphistoryComponent', () => {
  let component: TaphistoryComponent;
  let fixture: ComponentFixture<TaphistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaphistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaphistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
