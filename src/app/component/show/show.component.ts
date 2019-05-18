import { Component, OnInit } from '@angular/core';
import {
  NgbModal,
  ModalDismissReasons,
  NgbPanelChangeEvent,
  NgbCarouselConfig
} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { SeriveService } from '../../service/serive.service';
import { SharedserviceService } from '../../service/sharedservice.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  tapdata = [];
  type='';
  constructor(private router: Router, public api: SeriveService, private modalService: NgbModal, private SharedService: SharedserviceService
  ) {
    this.SharedService.tapdata.subscribe(tapdata => {
      console.log('page ', tapdata);


      if (this.isEmpty(tapdata)) {
        this.router.navigateByUrl('/component/history')
      }
      else {
        if(tapdata.image){
          alert('image'+tapdata.image)
        }
        this.tapdata = tapdata;
        
        this.type=tapdata.purpose;

      }
    })
  }
  isEmpty(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key))
        return false;
    }
    return true;
  }
  ngOnInit() {
  }

}
