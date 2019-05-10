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
  public submitted: boolean = false;
  public loader: boolean;

  constructor(private router: Router, public api: SeriveService, private modalService: NgbModal, private formBuilder: FormBuilder, ) { }

  ngOnInit() {
    this.getdevices();
    this.userForm = this.createLoginForm()
    this.userForm.valueChanges.subscribe(() => {
      this.onuserFormValuesChanged();
    });
  }
  getdevices() {
    let something: any;
    this.api.getdevide().subscribe(result => {
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
  /****************************** ENDS **************************************** */



  /***********************LOGIN FORM ***************************** */
  createLoginForm() {
    return this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]

    });
  }
  /****************************** ENDS **************************************** */
  /*************************LOGIN ********************** */
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
}
