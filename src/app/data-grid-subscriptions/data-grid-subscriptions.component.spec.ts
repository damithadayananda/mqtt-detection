import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataGridSubscriptionsComponent } from './data-grid-subscriptions.component';

describe('DataGridSubscriptionsComponent', () => {
  let component: DataGridSubscriptionsComponent;
  let fixture: ComponentFixture<DataGridSubscriptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataGridSubscriptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataGridSubscriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
