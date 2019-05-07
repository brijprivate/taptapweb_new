import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SeriveService } from '../../service/serive.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent {
  loginform = true;
  recoverform = false;
  public userFormErrors: any;
  public userForm: FormGroup;
  public submitted: boolean = false;
  public loader: boolean;
  code: string;
  constructor(private formBuilder: FormBuilder, public api: SeriveService, private router: Router) {

    this.userFormErrors = {
      email: {},
      password: {}
    };
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
      password: ['', Validators.required],
      name: ['', [Validators.required]],
      rolw: 'role',

    });
  }
  /****************************** ENDS **************************************** */
  /*************************LOGIN ********************** */
  signup() {
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
      this.api.register(data).subscribe(value => {
        // this.toastr.success('Welcome!', 'Successfully Logged In'),
        console.log('login', value);
        something = value
        
        // this.router.navigateByUrl('/starter');
        this.showRecoverForm();
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




  verify() {
    let something:any;
    let data={
      email: this.userForm.value.email,
      code:this.code
    }
    console.log(data);
    this.api.verify(data).subscribe(result => {
      // this.toastr.success('Welcome!', 'Successfully Registered'),
      console.log('verify', result);
      console.log('userid', something.user._id);
        localStorage.setItem('userid', something.user._id);
      this.router.navigateByUrl('/starter');

    },
      err => {
        console.log(err)
      })


  }
  /****************************** ENDS **************************************** */

}
