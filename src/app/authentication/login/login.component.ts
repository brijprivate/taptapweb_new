import { Component } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { SeriveService } from '../../service/serive.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  public userFormErrors: any;
  public userForm: FormGroup;
  public submitted: boolean = false;
  public loader: boolean = true;

  loginform = true;
  recoverform = false;
  constructor(private formBuilder: FormBuilder, public api: SeriveService, private router: Router, private toastr: ToastrService, ) {
    /******************ERRORS OF userForm ********************** */
    this.userFormErrors = {
      email: {},
      password: {}
    };
    /****************************** ENDS **************************************** */

  }


  showRecoverForm() {
    this.loginform = !this.loginform;
    this.recoverform = !this.recoverform;
  }



  ngOnInit() {
    this.userForm = this.createLoginForm()
    this.userForm.valueChanges.subscribe(() => {
      this.onuserFormValuesChanged();
    });
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
    this.loader = true;
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

        something = value

        localStorage.setItem('userid', something.user._id);
        this.toastr.success('You are awesome!', 'Success!');
        this.loader = false;
        this.router.navigateByUrl('/component/homepage');

      },
        err => {
          console.log('err', err.error.message);
          this.toastr.error('Oops!', err.error.message);
          this.loader = false;

        })

    }
    else {
      this.loader = false;
    }

  }
  /****************************** ENDS **************************************** */

}
