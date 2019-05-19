import { Component, OnInit } from '@angular/core';
import { SharedserviceService } from '../../service/sharedservice.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SeriveService } from '../../service/serive.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public profileFormErrors: any;
  public profileForm: FormGroup;
  public submitted: boolean = false;
  public loader: boolean;

  public showSearch = false;
  public profiledata: any;
  baseurl = 'http://ec2-18-225-10-142.us-east-2.compute.amazonaws.com:5450/'
  public display_image: String = "https://style.anu.edu.au/_anu/4/images/placeholders/person_8x10.png";
  imgid: any;
  name = '';
  address = ''
  city = '';
  zip = '';
  country = '';
  website = ''
  email: any;
  userid: string;

  constructor(private SharedService: SharedserviceService, private formBuilder: FormBuilder, public api: SeriveService, private router: Router) {
    this.userid = localStorage.getItem('userid');
    this.profileFormErrors = {
      name: {},
      address: {},
      city: {},
      zip: {},
      country: {},
      website: {},
    };
    this.SharedService.profiledata.subscribe(profiledata => {
      console.log('page ', profiledata);


      if (this.isEmpty(profiledata)) {
        console.log('empty')
      }
      else {
        this.profiledata = profiledata.result;
        this.name = this.profiledata.name;
        console.log(this.profiledata)
        if (this.profiledata.imageId != null) {
          this.imgid = this.profiledata.imageId._id;
          
        }
        this.name = this.profiledata.name;
        this.address = this.profiledata.address;
        this.city = this.profiledata.city;
        this.zip = this.profiledata.zip;
        this.country = this.profiledata.country;
        this.website = this.profiledata.website;
        this.email = this.profiledata.email
      }
      console.log(this.name,this.email)
      this.profileForm = this.createProfileForm()
      this.profileForm.valueChanges.subscribe(() => {
        this.onprofileFormValuesChanged();
      });
      this.getimage();
    });
  }

  ngOnInit() {
   
  }




  /******************************IT CATCHES ALL CHANGES IN FORM******************/
  onprofileFormValuesChanged() {
    for (const field in this.profileFormErrors) {
      if (!this.profileFormErrors.hasOwnProperty(field)) {
        continue;
      }
      // Clear previous errors
      this.profileFormErrors[field] = {};
      // Get the control
      const control = this.profileForm.get(field);

      if (control && control.dirty && !control.valid) {
        this.profileFormErrors[field] = control.errors;
      }
    }
  }
  /****************************** ENDS **************************************** */



  /***********************LOGIN FORM ***************************** */
  createProfileForm() {
    console.log(this.profileForm);
    return this.formBuilder.group({
      name: [this.name, [Validators.required]],
      address: [this.address, Validators.required],
      city: [this.city, Validators.required],
      zip: [this.zip, Validators.required],
      country: [this.country, Validators.required],
      website: [this.website, Validators.required],

    });
  }
  /****************************** ENDS **************************************** */
  /*************************LOGIN ********************** */
  saveprofile() {

    console.log('data,dat')
    let something: any;
    console.log(this.profileForm);
    this.submitted = true;
    this.loader = true;
    if (this.profileForm.valid) {
      this.submitted = false;
      let data = {
        name: this.profileForm.value.name,
        address: this.profileForm.value.address,
        city: this.profileForm.value.city,
        zip: this.profileForm.value.zip,
        country: this.profileForm.value.country,
        website: this.profileForm.value.website,
        imageId: this.imgid,
      }
      console.log('data,dat', data)
      this.api.saveprofile(this.userid,data).subscribe(value => {
        // this.toastr.success('Welcome!', 'Successfully Logged In'),
        console.log('login', value);
        something = value

        // this.router.navigateByUrl('/starter');
        // this.SharedService.profile(something);
        window.location.reload();
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

  selectFile(event) {
    let fileList: FileList = event.target.files;

    if (fileList.length > 0) {
      let file: File = fileList[0];
      if (file) {
        var reader = new FileReader();
        reader.onload = (event: any) => {
          this.display_image = event.target.result;
        }
        reader.readAsDataURL(event.target.files[0]);
      }
      console.log("File information :");
      console.log(file);
      let formData: FormData = new FormData();
      formData.append('file', file, file.name);
      this.upload(formData);
    }
  }

  upload(file) {
    let something: any;
    this.api.upload(file).subscribe(value => {
      something = value;
      console.log(value);
      this.imgid = (something.upload._id);
    },
      err => {
        console.log(err);
        // this.display_image = event.target.result;
      })


    // let _base = this;
    // _base.api.upload(file)
    //   .then(function (success: any) {
    //     console.log(success.upload._id);
    //     _base.imgid = (success.upload._id);
    //   }, function (error) {
    //     console.log(error);
    //   });
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



}
