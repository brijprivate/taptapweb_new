import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ComponentsRoutes } from './component.routing';

import { HomeComponent } from './home/home.component';
import { DevicesComponent } from './devices/devices.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { TimeComponent } from './time/time.component';
import { MilageComponent } from './milage/milage.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule,
    ReactiveFormsModule,
    JsonpModule,
    NgbModule
  ],
  declarations: [
   
    HomeComponent,
   
    DevicesComponent,
   
    ProfileComponent,
   
    SearchComponent,
   
    FavouriteComponent,
   
    TimeComponent,
   
    MilageComponent
  ]
})
export class ComponentsModule { }
