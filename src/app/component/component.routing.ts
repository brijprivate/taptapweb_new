import { Routes } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { DevicesComponent } from './devices/devices.component';
import { MilageComponent } from './milage/milage.component';
import { TimeComponent } from './time/time.component';
import { SearchComponent } from './search/search.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { ProfileComponent } from './profile/profile.component';
import { HelpComponent } from './help/help.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FeedComponent } from './feed/feed.component';
import { ShowComponent } from './show/show.component';
import { TaphistoryComponent } from './taphistory/taphistory.component';



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
            { title: 'Milage', url: '/Milage' },
            // { title: 'ngComponent' },
            // { title: 'Pagination' }
          ]
        }
      },
      {
        path: 'search',
        component: SearchComponent,
        data: {
          title: 'Search',
          urls: [
            { title: 'Dashboard', url: '/Search' },
            // { title: 'ngComponent' },
            // { title: 'Pagination' }
          ]
        }
      },
      {
        path: 'favourite',
        component: FavouriteComponent,
        data: {
          title: 'Favourite',
          urls: [
            { title: 'Favourite', url: '/Favourite' },
            // { title: 'ngComponent' },
            // { title: 'Pagination' }
          ]
        }
      },
      {
        path: 'devices',
        component: DevicesComponent,
        data: {
          title: 'Devices',
          urls: [
            { title: 'Devices', url: '/Devices' },
            // { title: 'ngComponent' },
            // { title: 'Pagination' }
          ]
        }
      },
      {
        path: 'profile',
        component: ProfileComponent,
        data: {
          title: 'Profile',
          urls: [
            { title: 'Profile', url: '/Profile' },
            // { title: 'Pagination' }
          ]
        }
      },

      {
        path: 'help',
        component: HelpComponent,
        data: {
          title: 'Help',
          urls: [
            { title: 'Help', url: '/Help' },
            
            // { title: 'Pagiation' }
          ]
        }
      },
      {
        path: 'about',
        component: AboutComponent,
        data: {
          title: 'About',
          urls: [
            { title: 'About', url: '/about' },
            // { title: 'ngComponent' },
            // { title: 'Pagination' }
          ]
        }
      },
      {
        path: 'history',
        component: TaphistoryComponent,
        data: {
          title: 'history',
          urls: [
            { title: 'history', url: '/history' },
            // { title: 'ngComponent' },
            // { title: 'Pagination' }
          ]
        }
      },

      {
        path: 'contact',
        component: ContactComponent,
        data: {
          title: 'Contact',
          urls: [
            { title: 'Contact', url: '/Contact' },
            // { title: 'ngComponent' },
            // { title: 'Pagination' }
          ]
        }
      },
      {
        path: 'feed',
        component: FeedComponent,
        data: {
          title: 'Feed',
          urls: [
            { title: 'Feed', url: '/Feed' },
            // { title: 'ngComponent' },
            // { title: 'Pagination' }
          ]
        }
      },
      {
        path: 'show',
        component: ShowComponent,
        data: {
          title: 'Show',
          urls: [
            { title: 'Show', url: '/Show' },
            // { title: 'ngComponent' },
            // { title: 'Pagination' }
          ]
        }
      },
      
    ]
  }
];
