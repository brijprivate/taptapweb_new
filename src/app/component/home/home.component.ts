import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('doughnutCanvas') doughnutCanvas;
  doughnutChart: any;
  constructor() { }

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
