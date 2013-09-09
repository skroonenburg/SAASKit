'use strict';

define([],
  function () {
          return {
              items:
              [
                  {
                      title: 'Dashboard',
                      link: '/dashboard',
                      controller: 'DashboardController',
                      templateUrl: '/app/views/dashboard.html',
                      icon: 'icon-bar-chart',
                      showNavBar: true,
                      showHeader: true
                  },
                  {
                      title: 'Administration',
                      icon: 'icon-cog',
                      showNavBar: true,
                      showHeader: true,
                      items: [
                          {
                              title: 'Users',
                              icon: 'icon-user',
                              link: '/users',
                              controller: 'UserListController',
                              templateUrl: '/app/views/userlist.html',
                              showNavBar: true,
                              showHeader: true,
                              items: [
                                  {
                                      link: '/users/:userId',
                                      title: 'Edit User',
                                      showNavBar: true,
                                      showHeader: true,
                                      controller: 'EditUserController',
                                      templateUrl: '/app/views/edituser.html'
                                  }
                              ]
                          }
                      ]
                  },
                  {
                      link: '/login',
                      title: 'Login',
                      icon: 'icon-signin',
                      showNavBar: false,
                      showHeader: false,
                      controller: 'LoginController',
                      templateUrl: '/app/views/login.html'
                  }
              ]
          };
  });