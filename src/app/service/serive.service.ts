import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

let baseURL = 'http://ec2-18-225-10-142.us-east-2.compute.amazonaws.com:5450/'

@Injectable({
  providedIn: 'root'
})
export class SeriveService {
  public APIURL: string = 'ec2-18-225-10-142.us-east-2.compute.amazonaws.com:5450/';
  userid: string;

  constructor(private http: HttpClient) {
    this.userid = localStorage.getItem('userid');

  }
  login(data) {
    return this.http.post(baseURL + 'user/login', data);
  }
  getdetailsbyuserid(id) {
    return this.http.get(baseURL + 'user/userDashboard?userId=' + id);
  }
  getprofilebyuserid(id) {
    return this.http.get(baseURL + 'user/profile?id=' + id);

  }
  verify(data) {
    return this.http.post(baseURL + 'user/registration', data);
  }
  register(data) {
    return this.http.post(baseURL + 'user/sendcode', data);
  }

  saveprofile(id,data) {
    return this.http.put(baseURL + 'user/updateprofile?id=' + (id), data);
  }
  getdevice(id) {
    return this.http.get(baseURL + 'device/pairedList?owner=' + id);
  }

  upload(file: any) {
    return this.http.post(baseURL + 'file/upload', file);

  }

  tapdataindate(id) {
    var date = new Date().toISOString();

    return this.http.get(baseURL + 'tapped/userdate?userId=' + id + '&date' + date);

  }

  gettime(id) {
    return this.http.get(baseURL + 'time/list?userId=' + id);
  }
  getmilage(id) {
    return this.http.get(baseURL + 'milage/usermilage?userId=' + id);
  }
  getnotifications(id) {
    return this.http.get(baseURL + 'notifications/list?userId=' + id);
  }
  gettapdatabyuser(id) {
    return this.http.get(baseURL + 'tapped/usertappedItems?userId=' + id);

  }


  updatelostinfo(id, data) {
    return this.http.put(baseURL + 'device/updateDeviceInfo=' + (id), data);

  }
  // upload(file: any) {
  //   let _base = this;
  //   return new Promise(function (resolve, reject) {

  //     _base.http.post(baseURL + 'file/upload', file)
  //       .pipe(map(res => res))
  //       .subscribe(function (success) {
  //         resolve(success);
  //       }, function (error) {
  //         reject(error);
  //       });

  //   });
  // }
}
