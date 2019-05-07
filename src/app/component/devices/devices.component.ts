import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeriveService } from '../../service/serive.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {
  devices=[];
  constructor(private router: Router,public api:SeriveService,) { }

  ngOnInit() {
    this.getdevices()
  }
  getdevices() {
    let something:any;
    this.api.getdevide().subscribe(result => {
      console.log('device list', result);
      something=result;
      this.devices=something.result;
      console.log(this.devices)
    },
      err => {
        console.log(err);
        alert('something went wrong');
      })
  }
}
