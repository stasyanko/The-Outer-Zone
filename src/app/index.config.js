(function() {
  'use strict';

  angular
    .module('outerZone')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig, hotkeysProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 2000;
    toastrConfig.positionClass = 'toast-top-center';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = false;

    hotkeysProvider.includeCheatSheet = false;
  }

})();
