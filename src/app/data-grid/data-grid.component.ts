import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {ApiCallService} from '../api-call.service';
import {forEach} from '@angular/router/src/utils/collection';


@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css']
})
export class DataGridComponent implements OnInit, OnChanges {
  private gridApi;
  private gridColumnApi;
  public  overlayLoadingTemplate;

  constructor() {
    this.overlayLoadingTemplate =
      '<span class="ag-overlay-loading-center">Please wait while filtering finish</span>';
  }
  @Input() client;
  @Input() filtering;
  @Input() getAll;
  columnDefs = [
    {headerName: 'ClientID',
      field: 'ClientID',
    },
    {headerName: 'ConnectedAt', field: 'ConnectedAt' },
    {headerName: 'Keepalive', field: 'Keepalive', filter: 'agNumberColumnFilter'},
    {headerName: 'Node', field: 'Node'}
  ];

  rowData;
  isGridLoaded = false;
  checkValue;
  checkGetAll = false;
  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['client']) {
      this.setClient(this.client);
    }
    if (changes['filtering']) {
       this.detectAbnormal();
    }
    if (changes['getAll']) {
      this.reverseAbnormal();
    }
  }
  setClient(v) {
    let dataw = [];
    for (let i  in v) {
      try {
        for (let j in v[i].ClientPro) {
          dataw.push(v[i].ClientPro[j]);
        }
      } catch (e) {
        console.log(e);
      }
    }
    this.rowData = dataw;
    console.log(dataw.length);
  }

  isExternalFilterPresent() {
    console.log(this.filtering);
    console.log(this.getAll);
    if ((this.filtering === true )) {
      return true;
    }
    if (this.getAll) {
      return false;
    }
  }
  doesExternalFilterPass(node) {
      return node.data.Keepalive < 10;
  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.isGridLoaded = true;
  }
  detectAbnormal() {
    this.checkValue = this.filtering;
    this.gridApi.onFilterChanged();
  }
  reverseAbnormal() {
    this.checkGetAll = this.getAll;
    if (this.checkGetAll) {
      this.gridApi.onFilterChanged();
    }
  }
}
