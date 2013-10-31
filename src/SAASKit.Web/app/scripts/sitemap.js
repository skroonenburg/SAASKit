﻿'use strict';

define([],
  function () {
      return {
              items:
              [
                  {
                      title: 'Teams',
                      link: '/dashboard',
                      controller: 'DashboardController',
                      templateUrl: '/app/views/dashboard.html',
                      icon: 'icon-group',
                      showNavBar: true,
                      showHeader: true,
                      isDefault: true
                  },
                  {
                      title: 'People',
                      link: '/groups',
                      controller: 'GroupListController',
                      templateUrl: '/app/views/locio/grouplist.html',
                      icon: 'icon-user',
                      showNavBar: true,
                      showHeader: true,
                      items: [
                          {
                              title: 'User Status',
                              icon: 'icon-user',
                              link: '/status/:userId',
                              controller: 'UserStatusController',
                              templateUrl: '/app/views/locio/userstatus.html',
                              showNavBar: true,
                              showHeader: true,
                              visible: false
                          }
                      ]
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
                                      visible: false,
                                      controller: 'EditUserController',
                                      templateUrl: '/app/views/edituser.html'
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
                      templateUrl: '/app/views/login.html'
                  }
              ]
          };
  });