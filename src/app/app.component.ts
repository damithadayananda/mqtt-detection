import {Component, OnInit} from '@angular/core';
import {ApiCallService} from './api-call.service';
import {timer} from 'rxjs';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html' ,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private api: ApiCallService) { }
  title = 'app';
  public clients ;
  public filtering = false;
  public filteringSession = false;
  public filteringSubscription = false;
  public getAll = false;
  public SubscriptionGetAll = false;
  public SessionGetAll = false;
  ngOnInit(): void {
    // this.api.callForAll().subscribe(
    //   res => {this.clients = res;
    //     //  console.log(res);
    //     this.setClient(res);
    //   }
    // );
    const interval = environment.refreshInterval;
    const source = timer(1000, interval);
    source.subscribe(val => {
      this.api.callForAll().subscribe(
        res => {this.clients = res;
          //  console.log(res);
          this.setClient(res);
        }
      );
    });
  }
  setClient(v) {
    this.clients = v;
  }
  setFilter() {
      this.filtering = true;
      this.getAll = false;
  }
  setFilterSession() {
    this.filteringSession = true;
    this.SessionGetAll = false;
  }
  setFilterSubscription() {
    this.filteringSubscription = true;
    this.SubscriptionGetAll = false;
  }
  setGetAll() {
      this.getAll = true;
      this.filtering = false;
  }
  setSubscriptionGetAll() {
    this.SubscriptionGetAll = true;
    this.filteringSubscription = false;
  }
  setSessionGetAll() {
    this.SessionGetAll = true;
    this.filteringSession = false;
  }
}
