import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeItemComponent } from './take-item.component';

describe('TakeItemComponent', () => {
  let component: TakeItemComponent;
  let fixture: ComponentFixture<TakeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
