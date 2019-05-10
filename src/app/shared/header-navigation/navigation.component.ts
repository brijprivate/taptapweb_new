import { Component, AfterViewInit, EventEmitter, Output } from '@angular/core';
import {
  NgbModal,
  ModalDismissReasons,
  NgbPanelChangeEvent,
  NgbCarouselConfig
} from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { SharedserviceService } from '../../service/sharedservice.service';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements AfterViewInit {
  @Output() toggleSidebar = new EventEmitter<void>();

  public config: PerfectScrollbarConfigInterface = {};

  public showSearch = false;
  public profiledata: any;
  baseurl = 'http://ec2-18-225-10-142.us-east-2.compute.amazonaws.com:5450/'
  public display_image: String = "";
  imgid: any;
  name:'';

  constructor(private modalService: NgbModal, private SharedService: SharedserviceService, private router: Router,) {

    this.SharedService.profiledata.subscribe(profiledata => {
      console.log('page ', profiledata);


      if (this.isEmpty(profiledata)) {

      } 
      else {
        this.profiledata = profiledata.result;
        this.name=this.profiledata.name;
          console.log(this.profiledata)
        if (this.profiledata.imageId != null) {
          this.imgid = this.profiledata.imageId._id;
          this.getimage();
        }

      }

    });


  }


  isEmpty(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key))
        return false;
    }
    return true;
  }
  getimage() {

    if (this.imgid) {
      this.display_image = this.baseurl + 'file/getImage?imageId=' + this.imgid;
      console.log('dscdsvcsdv', this.display_image);
    }
  }


  // This is for Notifications
  notifications: Object[] = [
    {
      btn: 'btn-danger',
      icon: 'ti-link',
      title: 'Luanch Admin',
      subject: 'Just see the my new admin!',
      time: '9:30 AM'
    },
    {
      btn: 'btn-success',
      icon: 'ti-calendar',
      title: 'Event today',
      subject: 'Just a reminder that you have event',
      time: '9:10 AM'
    },
    {
      btn: 'btn-info',
      icon: 'ti-settings',
      title: 'Settings',
      subject: 'You can customize this template as you want',
      time: '9:08 AM'
    },
    {
      btn: 'btn-primary',
      icon: 'ti-user',
      title: 'Pavan kumar',
      subject: 'Just see the my admin!',
      time: '9:00 AM'
    }
  ];

  // This is for Mymessages
  mymessages: Object[] = [
    {
      useravatar: 'assets/images/users/1.jpg',
      status: 'online',
      from: 'Pavan kumar',
      subject: 'Just see the my admin!',
      time: '9:30 AM'
    },
    {
      useravatar: 'assets/images/users/2.jpg',
      status: 'busy',
      from: 'Sonu Nigam',
      subject: 'I have sung a song! See you at',
      time: '9:10 AM'
    },
    {
      useravatar: 'assets/images/users/2.jpg',
      status: 'away',
      from: 'Arijit Sinh',
      subject: 'I am a singer!',
      time: '9:08 AM'
    },
    {
      useravatar: 'assets/images/users/4.jpg',
      status: 'offline',
      from: 'Pavan kumar',
      subject: 'Just see the my admin!',
      time: '9:00 AM'
    }
  ];

  ngAfterViewInit() {

  }
  logout(){
    console.log('logout')
    this.router.navigateByUrl('');
    localStorage.clear();
  }
}
