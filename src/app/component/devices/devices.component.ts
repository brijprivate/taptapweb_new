import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeriveService } from '../../service/serive.service';
import {
  NgbModal,
  ModalDismissReasons,
  NgbActiveModal
} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {
  devices = [];
  modeldata: any;
  public userFormErrors: any;
  public userForm: FormGroup;
  public lostFormErrors: any;
  public lostForm: FormGroup;
  public submitted: boolean = false;
  public loader: boolean;
  check: boolean;
  userid: string;

  constructor(private router: Router, public api: SeriveService, private modalService: NgbModal, private formBuilder: FormBuilder, ) {

    this.userid = localStorage.getItem('userid');
    this.lostFormErrors = {
      email: {},
      name: {},
      phoneNumber: {}
    };
    this.userFormErrors = {
      email: {},
      address: {},
      name: {},
      website:{},
      zip:{}
    };
  }

  ngOnInit() {
    this.getdevices();
    
  }
  getdevices() {
    let something: any;
    this.api.getdevice(this.userid).subscribe(result => {
      console.log('device list', result);
      something = result;
      this.devices = something.result;
      console.log(this.devices)
    },
      err => {
        console.log(err);
        alert('something went wrong');
      })
  }

  openVerticallyCentered(content3, device) {
    console.log(device);
    this.modeldata = device;
    this.userForm = this.createLoginForm(device)
    this.userForm.valueChanges.subscribe(() => {
      this.onuserFormValuesChanged();
    });


    this.lostForm = this.createlostForm(device);
    this.lostForm.valueChanges.subscribe(() => {
      this.onlostFormValuesChanged();
    });

    
    this.modalService.open(content3, { centered: true, size: 'lg' });
  }




  /******************************IT CATCHES ALL CHANGES IN FORM******************/
  onuserFormValuesChanged() {
    for (const field in this.userFormErrors) {
      if (!this.userFormErrors.hasOwnProperty(field)) {
        continue;
      }
      // Clear previous errors
      this.userFormErrors[field] = {};
      // Get the control
      const control = this.userForm.get(field);

      if (control && control.dirty && !control.valid) {
        this.userFormErrors[field] = control.errors;
      }
    }
  }



  onlostFormValuesChanged() {
    for (const field in this.userFormErrors) {
      if (!this.userFormErrors.hasOwnProperty(field)) {
        continue;
      }
      // Clear previous errors
      this.userFormErrors[field] = {};
      // Get the control
      const control = this.userForm.get(field);

      if (control && control.dirty && !control.valid) {
        this.userFormErrors[field] = control.errors;
      }
    }
  }


  /****************************** ENDS **************************************** */



  /***********************LOGIN FORM ***************************** */
  createLoginForm(device) {
    return this.formBuilder.group({
      email: [device.owner.email, [Validators.required, Validators.email]],
      address: [device.owner.address, [Validators.required]],
      name: [device.owner.name, [Validators.required]],
      website: [device.owner.website, [Validators.required]],
      zip: [device.owner.zip, [Validators.required]],
    });
  }

  createlostForm(device) {
    return this.formBuilder.group({
      email: [device.lost_info.email],
      name: [device.lost_info.name],
      phoneNumber: [device.lost_info.phoneNumber],

    });
  }

  /****************************** ENDS **************************************** */
  /************************* ********************** */


  savelostdata() {
    let something: any;
    console.log(this.lostForm.value);
    this.submitted = true;
    this.loader = true;
    if (this.lostForm.valid) {
      this.submitted = false;
      let lostdata = {
        email: this.lostForm.value.email,
        password: this.lostForm.value.password,
        phoneNumber: this.lostForm.value.phoneNumber
      }
      let data={
        deviceId:this.modeldata._id,
        device_title:'na',
        message:'a tag with no info',
        is_lost:this.check,
        lost_info:lostdata,

      }
      console.log(data);
      this.api.updatelostinfo(this.userid,data).subscribe(value => {
        // this.toastr.success('Welcome!', 'Successfully Logged In'),
        console.log(' lost device update', value);
       
        this.loader = false;
      },
        err => {
          console.log('err', err.error)
          this.loader = false;
          alert('something went wrong');
        })

    }
    else {
      this.loader = false;
    }
    this.getdevices()
  }




  login() {
    let something: any;
    console.log(this.userForm.value);
    this.submitted = true;
    this.loader = true;
    if (this.userForm.valid) {
      this.submitted = false;
      let data = {
        email: this.userForm.value.email,
        password: this.userForm.value.password
      }
      this.api.login(data).subscribe(value => {
        // this.toastr.success('Welcome!', 'Successfully Logged In'),
        console.log('login', value);
        something = value
        console.log('login', something.user._id);
        localStorage.setItem('userid', something.user._id);
        this.router.navigateByUrl('/starter');
        this.loader = false;
      },
        err => {
          console.log('err', err.error)
          this.loader = false;
          alert('something went wrong');
        })

    }
    else {
      this.loader = false;
    }

  }
  checklost(check,device){
    console.log(device);
    this.modeldata = device;
    this.check=check.currentTarget.checked;
    this.userForm = this.createLoginForm(device)
    this.userForm.valueChanges.subscribe(() => {
      this.onuserFormValuesChanged();
    });


    this.lostForm = this.createlostForm(device);
    this.lostForm.valueChanges.subscribe(() => {
      this.onlostFormValuesChanged();
    });
    
    
    console.log(check.currentTarget.checked,'jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj');
    this.savelostdata()
  }
}