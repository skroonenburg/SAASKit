'use strict';

define([],
  function () {
      return {
              items:
              [
                  {
                      title: 'You',
                      link: '/status/you',
                      controller: 'UserStatusController',
                      templateUrl: 'views/locio/userstatus.html',
                      icon: 'icon-map-marker',
                      showNavBar: true,
                      showHeader: true,
                      isDefault: false
                  },
                  {
                      title: 'Teams',
                      link: '/teams',
                      controller: 'TeamListController',
                      templateUrl: 'views/locio/teamlist.html',
                      icon: 'icon-group',
                      showNavBar: true,
                      showHeader: true,
                      isDefault: true,
                      items: [
                          {
                              title: 'Team Members',
                              link: '/teams/:teamId/:teamName',
                              controller: 'PeopleListController',
                              templateUrl: 'views/locio/peoplelist.html',
                              icon: 'icon-user',
                              showNavBar: true,
                              showHeader: true,
                              visible: false
                          }
                      ]
                  },
                  {
                      title: 'People',
                      link: '/people',
                      controller: 'PeopleListController',
                      templateUrl: 'views/locio/peoplelist.html',
                      icon: 'icon-user',
                      showNavBar: true,
                      showHeader: true,
                      items: [
                          {
                              title: 'User Status',
                              icon: 'icon-user',
                              link: '/status/:userId',
                              controller: 'UserStatusController',
                              templateUrl: 'views/locio/userstatus.html',
                              showNavBar: true,
                              showHeader: true,
                              visible: false
                          }
                      ]
                  },
                  {
                      title: 'Map View',
                      link: '/map',
                      controller: 'MapViewController',
                      templateUrl: 'views/locio/mapview.html',
                      icon: 'icon-hospital',
                      showNavBar: true,
                      showHeader: true
                  },
                  {
                      title: 'Rooms',
                      link: '/rooms',
                      controller: 'RoomListController',
                      templateUrl: 'views/locio/roomlist.html',
                      icon: 'icon-th',
                      showNavBar: true,
                      showHeader: true
                  },
                  {
                      title: 'Settings',
                      icon: 'icon-cog',
                      showNavBar: true,
                      showHeader: true,
                      items: [
                          {
                              title: 'Users',
                              icon: 'icon-user',
                              link: '/users',
                              controller: 'UserListController',
                              templateUrl: 'views/userlist.html',
                              showNavBar: true,
                              showHeader: true,
                              items: [
                                  {
                                      link: '/users/:userId',
                                      title: 'Edit User',
                                      showNavBar: true,
                                      showHeader: true,
                                      visible: false,
                                      controller: 'EditUserController',
                                      templateUrl: 'views/edituser.html'
                                  }
                              ]
                          }
                      ]
                  },
                  {
                      link: '/login',
                      title: 'Sign Out',
                      icon: 'icon-signout',
                      showNavBar: false,
                      showHeader: false,
                      controller: 'LoginController',
                      templateUrl: 'views/login.html'
                  }
              ]
          };
  });