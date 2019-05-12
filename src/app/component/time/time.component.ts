import { Component, OnInit } from '@angular/core';
import { SeriveService } from '../../service/serive.service';
@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {

  constructor(public api: SeriveService) {
    this.gettime();
  }

  ngOnInit() {
  }

  gettime() {
    this.api.gettime().subscribe(result => {
      console.log(result)
    },
      err => {
        console.log(err)
      })
  }
}
