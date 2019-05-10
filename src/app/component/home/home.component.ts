import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { Router } from '@angular/router';
import { SeriveService } from '../../service/serive.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('doughnutCanvas') doughnutCanvas;
  doughnutChart: any;
  userid: any;
  constructor(private router: Router,public api:SeriveService,private modalService: NgbModal) { 
    this.getdetailsbyuserid();
    this.userid=localStorage.getItem('userid')
    console.log(this.userid);
     }
  
   getdetailsbyuserid(){
    this.api.getdetailsbyuserid(this.userid).subscribe(result => {
    console.log('userdata', result)
    },
      err => {
        console.log(err);
        alert('something went wrong');
      })
  }
  ngOnInit() {
    var _base = this;
    setTimeout(function () {
      _base.doughnutChart = new Chart(_base.doughnutCanvas.nativeElement, {

        type: 'doughnut',
        data: {
          labels: ["Total", "Total"],
          datasets: [{

            // label: '# of Votes',
            data: [12, 19],
            backgroundColor: [
              '#a25757',
              '#93ca79',

            ],

          }]
        },
        options: {
          cutoutPercentage: 80,
          legend: {

              display: false,
             
          }
      }

      });

    }, 1000);
  }
  
}
