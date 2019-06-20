import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-data-grid-subscriptions',
  templateUrl: './data-grid-subscriptions.component.html',
  styleUrls: ['./data-grid-subscriptions.component.css']
})
export class DataGridSubscriptionsComponent implements OnInit, OnChanges {
  private gridApi;
  private gridColumnApi;
  constructor() { }
  @Input() client;
  @Input() filteringSubscription;
  @Input() SubscriptionGetAll;
  columnDefs = [
    {headerName: 'ClientID', field: 'ClientID' },
    {headerName: 'Qos', field: 'Qos'},
    {headerName: 'Topic', field: 'Topic'}
  ];
  rowData;
  checkValue;
  checkGetAll = true ;
  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['client']) {
      this.setSubscription(this.client);
    }
    if (changes['filteringSubscription']) {
      this.detectAbnormal('');
    }
    if (changes['SubscriptionGetAll']) {
      this.reverseAbnormal();
    }
  }
  setSubscription(v) {
    let dataw = [];
    for (let i  in v) {
      try {
        for (let j in v[i].SubscriptionPro) {
          dataw.push(v[i].SubscriptionPro[j]);
        }
      } catch (e) {
        console.log(e);
      }
    }
    this.rowData = dataw;
    console.log(dataw.length);
  }
  isExternalFilterPresent() {
    if (this.filteringSubscription === true ) {
      return true;
    }
    if (this.SubscriptionGetAll) {
      return false;
    }
  }
  doesExternalFilterPass(node) {
    let truecount = 0;
    for (let i of this.rowData) {
      if (i['ClientID'] === node.data.ClientID ) {
        truecount++;
      }
    }
    if (truecount < 2) {
      return true;
    } else {
    }
  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }
  detectAbnormal(v) {
    console.log('in detect abnormal');
    this.checkValue = this.filteringSubscription;
    this.gridApi.onFilterChanged();
  }
  reverseAbnormal() {
    console.log('in reverse abnormal');
    this.checkGetAll = this.SubscriptionGetAll;
    if (this.checkGetAll) {
      console.log(this.checkGetAll);
      this.gridApi.onFilterChanged();
    }
  }

}
