import {Component, Input, OnInit} from '@angular/core';
import {ApiCallService} from '../api-call.service';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _apiCallServic: ApiCallService) { }
  public id;
  public client;
  public session;
  public subscription;
  ngOnInit() {
  }
  onClickMe() {
    console.log(this.session);
    this._apiCallServic.call(this.id).subscribe(
      res => this.formatResponse(res),
      err => console.log(err)
    );
  }
  formatResponse(v) {
    console.log(v);
    try {
      this.client = v.ClientPro ;
    } catch (e) {
      console.log(e);
    }
    try {
      this.session = v.SessionPro;
    } catch (e) {
      console.log(e);
    }
    try {
      this.subscription = v.SubscriptionPro;
    } catch (e) {
      console.log(e);
    }
  }
}
