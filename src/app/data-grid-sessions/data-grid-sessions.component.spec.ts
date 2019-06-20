import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataGridSessionsComponent } from './data-grid-sessions.component';

describe('DataGridSessionsComponent', () => {
  let component: DataGridSessionsComponent;
  let fixture: ComponentFixture<DataGridSessionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataGridSessionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataGridSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
