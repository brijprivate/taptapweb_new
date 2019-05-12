import { Component, OnInit } from '@angular/core';
import { SeriveService } from '../../service/serive.service';

@Component({
  selector: 'app-milage',
  templateUrl: './milage.component.html',
  styleUrls: ['./milage.component.css']
})
export class MilageComponent implements OnInit {

  constructor(public api: SeriveService) {
    this.getmilage();
  }

  ngOnInit() {
  }

  getmilage() {
    this.api.getmilage().subscribe(result => {
      console.log(result)
    },
      err => {
        console.log(err)
      })
  }
}
