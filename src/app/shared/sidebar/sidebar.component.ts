import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ROUTES } from './menu-items';
import { RouteInfo } from './sidebar.metadata';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SeriveService } from '../../service/serive.service';
import { SharedserviceService } from '../../service/sharedservice.service';

declare var $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  showMenu = '';
  showSubMenu = '';
  public sidebarnavItems: any[];
  userid: string;
  profiledata: any;
  imgid: any;
  name: any;
  // this is for the open close
  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }
  addActiveClass(element: any) {
    if (element === this.showSubMenu) {
      this.showSubMenu = '0';
    } else {
      this.showSubMenu = element;
    }
  }
  baseurl = 'http://ec2-18-225-10-142.us-east-2.compute.amazonaws.com:5450/'
  display_image: String = "";

  constructor(
    private modalService: NgbModal,
    private router: Router,
    private route: ActivatedRoute,
    public api: SeriveService,
    private SharedService: SharedserviceService
  ) {
    this.userid = localStorage.getItem('userid');
    this.getprofilebyuserid();

  }


  getprofilebyuserid() {
    this.api.getprofilebyuserid(this.userid).subscribe(result => {
      console.log('userprofile', result)
      this.profiledata = result;
      this.name = this.profiledata.result.name;
      this.getimage();
      console.log(this.name, 'sdffffffffffffffffffffffffffff');
      if (this.profiledata.result.imageId != null) {
        this.imgid = this.profiledata.result.imageId._id;
        this.getimage();
      }
      this.SharedService.profile(this.profiledata);

    },
      err => {
        console.log(err);
        alert('something went wrong');
      })
  }


  // getprofilebyuserid() {

  //   let something: any;
  //   this.api.getprofilebyuserid(this.userid).subscribe(result => {
  //     console.log('userprofile', result);
  //     something = result;
  //     this.profiledata = something;
  //     console.log(',asufgsjf', this.profiledata)
  //     // this.SharedService.check(x);
  //     if (this.profiledata.result.imageId != null) {
  //       this.imgid = this.profiledata.result.imageId._id;
  //       this.getimage();
  //     }

  //     // this.SharedService.profile(this.profiledata);


  //   },
  //     err => {
  //       console.log(err);
  //       alert('something went wrong');
  //     })
  // }

  getimage() {

    if (this.imgid) {
      this.display_image = this.baseurl + 'file/getImage?imageId=' + this.imgid;
      console.log(this.display_image)
    }
  }

  // End open close
  ngOnInit() {
    this.sidebarnavItems = ROUTES.filter(sidebarnavItem => sidebarnavItem);

  }
  goto(x){
    console.log('as')
    this.router.navigateByUrl(x);

  }
  logout(){
    console.log('logout');
    localStorage.clear();
    this.router.navigateByUrl('');
   
  }
}
