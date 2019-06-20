import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {map} from 'rxjs/operators';
import {ajax} from 'rxjs/ajax';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor() { }
  call(id) {
    console.log(id);
    console.log(environment.idUrl);
    const url = environment.idUrl + id;
    console.log(url);
    const resp = ajax(url).pipe(map(res => res.response));
    return resp;
  }
  callForAll() {
    const url = environment.allUrl;
    const resp = ajax(url).pipe(map(res => res.response));
    return resp;
  }
}
