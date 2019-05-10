import { Routes } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { DevicesComponent } from './devices/devices.component';
import { MilageComponent } from './milage/milage.component';
import { TimeComponent } from './time/time.component';
import { SearchComponent } from './search/search.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { ProfileComponent } from './profile/profile.component';


export const ComponentsRoutes: Routes = [
  {
    path: '',
    children: [
     
      {
        path: 'homepage',
        component: HomeComponent,
        data: {
          title: 'Homepage',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            // { title: 'ngComponent' },
            // { title: 'Pagination' }
          ]
        }
      },
      {
        path: 'time',
        component: TimeComponent,
        data: {
          title: 'Time',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
           
          ]
        }
      },
      {
        path: 'milage',
        component: MilageComponent,
        data: {
          title: 'Milage',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: 'Pagination' }
          ]
        }
      },
      {
        path: 'search',
        component: SearchComponent,
        data: {
          title: 'Search',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: 'Pagination' }
          ]
        }
      },
      {
        path: 'favourite',
        component: FavouriteComponent,
        data: {
          title: 'Favourite',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: 'Pagination' }
          ]
        }
      },
      {
        path: 'devices',
        component: DevicesComponent,
        data: {
          title: 'Devices',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: 'Pagination' }
          ]
        }
      },
      {
        path: 'profile',
        component: ProfileComponent,
        data: {
          title: 'Profile',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: 'Pagination' }
          ]
        }
      },

      
    ]
  }
];
