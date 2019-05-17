import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeriveService } from '../../service/serive.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

declare var $;
declare var $JssorArrowNavigator$;
declare var $JssorBulletNavigator$;
declare var $JssorSlider$;

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  constructor(private router: Router, public api: SeriveService, private modalService: NgbModal) {
    this.gettapdatabyuser();
   }


   gettapdatabyuser() {
    let _base=this;
    
    var something: any;
    _base.api.gettapdatabyuser().subscribe(result => {
      something = result;
      console.log(something);

    },
      err => {
        console.log(err);
      })

  }

  ngOnInit() {
    jQuery(document).ready(function ($) {

      var xyz = function () {
        var jssor_1_options = {
          $AutoPlay: 1,
          $AutoPlaySteps: 1,
          $SlideDuration: 160,
          $SlideWidth: 325,
          $SlideSpacing: 5,
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

}
