import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-data-grid-sessions',
  templateUrl: './data-grid-sessions.component.html',
  styleUrls: ['./data-grid-sessions.component.css']
})
export class DataGridSessionsComponent implements OnInit, OnChanges {
  private gridApi;
  private gridColumnApi;
  constructor() { }
  @Input() client;
  @Input() filteringSession;
  @Input() SessionGetAll;
  columnDefs = [
    {headerName: 'ClientID', field: 'ClientID' },
    {headerName: 'CreatedAt', field: 'CreatedAt'},
    {
      headerName: 'Subscriptions',
      field: 'Subscriptions',
    }
  ];

  rowData;
  checkValue;
  checkGetAll = true ;
  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['client']) {
       this.setSession(this.client);
    }
    if (changes['filteringSession']) {
      this.detectAbnormal('');
    }
    if (changes['SessionGetAll']) {
      this.reverseAbnormal();
    }
  }

  setSession(v) {
    let dataw = [];
    for (let i  in v) {
      try {
        for (let j in v[i].SessionPro) {
          dataw.push(v[i].SessionPro[j]);
        }
      } catch (e) {
        console.log(e);
      }
    }
    this.rowData = dataw;
    console.log(dataw.length);
  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }
  isExternalFilterPresent() {
    if (this.filteringSession === true ) {
      return true;
    }
    if (this.SessionGetAll) {
      return false;
    }
  }
  doesExternalFilterPass(node) {
    return node.data.Subscriptions < 2;
  }
  detectAbnormal(v) {
    this.checkValue = this.filteringSession;
    this.gridApi.onFilterChanged();
  }
  reverseAbnormal() {
    this.checkGetAll = this.SessionGetAll;
    if (this.checkGetAll) {
      this.gridApi.onFilterChanged();
    }
  }
}
