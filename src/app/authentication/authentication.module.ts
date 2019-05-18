import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { AuthenticationRoutes } from './authentication.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthenticationRoutes),
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(),
  ],
  declarations: [
    LoginComponent,
    SignupComponent,
  
  ]
})
export class AuthenticationModule {}
