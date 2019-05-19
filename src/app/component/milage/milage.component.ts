import { Component, OnInit } from '@angular/core';
import { SeriveService } from '../../service/serive.service';

@Component({
  selector: 'app-milage',
  templateUrl: './milage.component.html',
  styleUrls: ['./milage.component.css']
})
export class MilageComponent implements OnInit {
  userid: string;

  constructor(public api: SeriveService) {
    this.userid = localStorage.getItem('userid');

    this.getmilage();
  }

  ngOnInit() {
  }

  getmilage() {
    this.api.getmilage(this.userid).subscribe(result => {
      console.log(result)
    },
      err => {
        console.log(err)
      })
  }
}
