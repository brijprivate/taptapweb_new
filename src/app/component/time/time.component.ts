import { Component, OnInit } from '@angular/core';
import { SeriveService } from '../../service/serive.service';
@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {
  userid: string;

  constructor(public api: SeriveService) {
    this.userid = localStorage.getItem('userid');

    this.gettime();
  }

  ngOnInit() {
  }

  gettime() {
    this.api.gettime(this.userid).subscribe(result => {
      console.log(result)
    },
      err => {
        console.log(err)
      })
  }
}
