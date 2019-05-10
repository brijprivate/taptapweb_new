import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {
  profiledata:BehaviorSubject<any> = new BehaviorSubject({});
  checks:BehaviorSubject<any> = new BehaviorSubject({});

  constructor() { }
  profile(params){
    this.profiledata.next(params)  
    console.log("profile data shared");
  }
  check(x){
    this.checks.next(x)  
    console.log("profile data shared");
  }
}
