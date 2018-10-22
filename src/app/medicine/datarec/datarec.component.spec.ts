import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatarecComponent } from './datarec.component';

describe('DatarecComponent', () => {
  let component: DatarecComponent;
  let fixture: ComponentFixture<DatarecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatarecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatarecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
