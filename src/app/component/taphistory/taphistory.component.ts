import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeriveService } from '../../service/serive.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SharedserviceService } from '../../service/sharedservice.service';
declare var $;
declare var $JssorArrowNavigator$;
declare var $JssorBulletNavigator$;
declare var $JssorSlider$;
@Component({
  selector: 'app-taphistory',
  templateUrl: './taphistory.component.html',
  styleUrls: ['./taphistory.component.css']
})
export class TaphistoryComponent implements OnInit {

  tapdata=[];
  constructor(private router: Router, public api: SeriveService, private modalService: NgbModal,  private SharedService: SharedserviceService
    ) {
    this.gettapdatabyuser();
   }

  ngOnInit() {
    jQuery(document).ready(function ($) {

      var xyz = function () {
        var jssor_1_options = {
          $AutoPlay: 1,
          $AutoPlaySteps: 1,
          $SlideDuration: 160,
          $SlideWidth: 100,
          $SlideSpacing: 0,
          $ArrowNavigatorOptions: {
            $Class: $JssorArrowNavigator$,
            $Steps: 5
          },
          $BulletNavigatorOptions: {
            $Class: $JssorBulletNavigator$
          }
        };

        var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

        /*#region responsive code begin*/

        var MAX_WIDTH = 980;

        function ScaleSlider() {
          var containerElement = jssor_1_slider.$Elmt.parentNode;
          var containerWidth = containerElement.clientWidth;

          if (containerWidth) {

            var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

            jssor_1_slider.$ScaleWidth(expectedWidth);
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


  gettapdatabyuser() {
    let _base=this;
    
    var something: any;
    _base.api.gettapdatabyuser().subscribe(result => {
      something = result;
      console.log(something);
      this.tapdata=something.result;

    },
      err => {
        console.log(err);
      })

  }


  goto(tap){
    this.SharedService.taps(tap);
    this.router.navigateByUrl('/component/show')
  }
}
