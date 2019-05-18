import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { Router } from '@angular/router';
import { SeriveService } from '../../service/serive.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

declare var $;
declare var $JssorArrowNavigator$;
declare var $JssorBulletNavigator$;
declare var $JssorSlider$;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('doughnutCanvas') doughnutCanvas;
  doughnutChart: any;
  userid: any;
  dashboarddata: any = {
    event: 0,
    business: 0,
    contact: 0,
    fashion: 0,
    favourite: 0,
    general: 0,
    groceries: 0
  };
  today = 0;
  total = 0;
  pretoday = false;
  pretotal = false;


  constructor(private router: Router, public api: SeriveService, private modalService: NgbModal) {

    this.userid = localStorage.getItem('userid')
    this.getdetailsbyuserid();
    console.log(this.userid);
    this.tapdataindate();

   
  }



  getdetailsbyuserid() {

    this.pretotal = false;
    let something: any;
    this.api.getdetailsbyuserid(this.userid).subscribe(result => {
      console.log('userdata', result);
      something = result;
      this.dashboarddata = something.result;
      this.total = this.dashboarddata.totalTap;
      this.pretotal = true;
    },
      err => {
        console.log(err);
        alert('something went wrong');
      })
  }
  tapdataindate() {
    let _base=this;
    this.pretoday = false;
    var something: any;
    _base.api.tapdataindate().subscribe(result => {
      something = result;
      _base.today = something.result.length;
      _base.pretoday = true;
      let x = setInterval(function () {

        console.log('this is today', _base.today, _base.total, _base.pretoday,_base.pretotal);

        if (_base.pretoday == true && _base.pretotal == true) {
          _base.chartdata();
          clearInterval(x);
        }
      }, 1000)

    },
      err => {
        console.log(err);
      })

  }
  chartdata() {
    var today = this.today;
    var total = this.total;
    console.log('this is today in chart', this.today, this.total);

    var _base = this;
    setTimeout(function () {
      _base.doughnutChart = new Chart(_base.doughnutCanvas.nativeElement, {

        type: 'doughnut',
        data: {
          labels: ["Today", "Total"],
          datasets: [{

            // label: '# of Votes',
            data: [total, today],
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

  ngOnInit() {

    jQuery(document).ready(function ($) {

      var xyz = function () {
        var jssor_2_options = {
          $AutoPlay: 1,
          $AutoPlaySteps: 1,
          $SlideDuration: 160,
          $SlideWidth: 200,
          $SlideSpacing: -1,
          $ArrowNavigatorOptions: {
            $Class: $JssorArrowNavigator$,
            $Steps: 5
          },
          $BulletNavigatorOptions: {
            $Class: $JssorBulletNavigator$
          }
        };

        var jssor_2_slider = new $JssorSlider$("jssor_2", jssor_2_options);

        /*#region responsive code begin*/

        var MAX_WIDTH = 980;

        function ScaleSlider() {
          var containerElement = jssor_2_slider.$Elmt.parentNode;
          var containerWidth = containerElement.clientWidth;

          if (containerWidth) {

            var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

            jssor_2_slider.$ScaleWidth(expectedWidth);
          }
          else {
            window.setTimeout(ScaleSlider, 30);
          }
        }

        ScaleSlider();

        $(window).bind("load", ScaleSlider);
        $(window).bind("resize", ScaleSlider);
        $(window).bind("orientationchange", ScaleSlider);
      }
      xyz();

      /*#endregion responsive code end*/
    });

   
  }
}
