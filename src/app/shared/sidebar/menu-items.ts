import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  {
    path: '',
    title: 'Personal',
    icon: 'mdi mdi-dots-horizontal',
    class: 'nav-small-cap',
    extralink: true,
    submenu: []
  },
  {
    path: '/starter',
    title: 'Starter Page',
    icon: 'icon-Files',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '',
    title: 'UI',
    icon: 'mdi mdi-dots-horizontal',
    class: 'nav-small-cap',
    extralink: true,
    submenu: []
  },
  {
    path: '',
    title: 'Home',
    icon: 'icon-Paint-Brush',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      
      {
        path: '/component/homepage',
        title: 'homepage',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
     
    ]
  },
  {
    path: '',
    title: 'Authentication',
    icon: 'icon-Administrator',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/authentication/login',
        title: 'Login',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/authentication/login2',
        title: 'Login 2',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/authentication/signup',
        title: 'Register',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/authentication/signup2',
        title: 'Register 2',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/authentication/404',
        title: '404',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/authentication/lock',
        title: 'Lockscreen',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'TapTap',
    icon: 'icon-Paint-Brush',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      
      {
        path: '/component/devices',
        title: 'Devices',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/time',
        title: 'Time',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/milage',
        title: 'Milage',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/search',
        title: 'Search',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/favourite',
        title: 'Favourite',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
     
    ]
  },
  // {
  //   path: '',
  //   title: 'Menu Levels',
  //   icon: 'mdi mdi-notification-clear-all',
  //   class: 'has-arrow',
  //   extralink: false,
  //   submenu: [
  //     {
  //       path: '',
  //       title: 'Second Level',
  //       icon: '',
  //       class: '',
  //       extralink: true,
  //       submenu: []
  //     },
  //     {
  //       path: '',
  //       title: 'Second Child',
  //       icon: '',
  //       class: 'has-arrow',
  //       extralink: false,
  //       submenu: [
  //         {
  //           path: '',
  //           title: 'Third 1.1',
  //           icon: '',
  //           class: '',
  //           extralink: false,
  //           submenu: []
  //         },
  //         {
  //           path: '',
  //           title: 'Third 1.2',
  //           icon: '',
  //           class: '',
  //           extralink: false,
  //           submenu: []
  //         }
  //       ]
  //     }
  //   ]
  // }
];
