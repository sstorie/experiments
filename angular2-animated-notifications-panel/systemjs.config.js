/**
 * PLUNKER VERSION (based on systemjs.config.js in angular.io)
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {

  var ngVer = '@2.0.0-rc.4'; // lock in the angular package version; do not let it float to current!

  //map tells the System loader where to look for things
  var map = {
    'app': 'app',

    '@angular': 'node_modules/@angular',
    'rxjs': 'node_modules/rxjs'
  };

  //packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app': { main: 'main.js', defaultExtension: 'js' },
    'rxjs': { main: 'Rx.js', format: 'cjs' }
  };

  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'platform-browser',
    'platform-browser-dynamic'
  ];

  // Add package entries for angular packages
  ngPackageNames.forEach(function (pkgName) {
    packages['@angular/' + pkgName] = { main: 'bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  });

  var config = {
    map: map,
    packages: packages
  }

  System.config(config);

})(this);


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/