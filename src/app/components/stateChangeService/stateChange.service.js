(function () {
  'use strict';

  angular
    .module('outerZone')
    .service('stateChangeService', stateChangeService);

  function stateChangeService() {
    var vm = this;

    vm.playerState = 'startScreen';

    vm.setPlayerState = function(state) {
      vm.playerState = state;
    }

  }

})();
