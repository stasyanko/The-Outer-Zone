(function() {
  'use strict';

  angular
    .module("outerZone")
    .service('saveGame', saveGame);

  saveGame.$inject = ["alliesService", "progressTracker", "inventoryService"];

  function saveGame(alliesService, progressTracker, inventoryService) {
    var svc = this;

    svc.saveFile = {};

    svc.saveGame = function() {
      store.set('saveFile', {'storyProgress' : progressTracker.storyProgress, 'allyProgress' : progressTracker.newAlly, 'allies' : alliesService.allies, 'equipment' : inventoryService.equipment, 'money': inventoryService.money})
    };

    svc.loadGame = function() {
      svc.saveFile = store.get('saveFile');
      alliesService.setAllies(svc.saveFile.allies);
      progressTracker.loadGame(svc.saveFile.storyProgress, svc.saveFile.allyProgress);
      inventoryService.loadGame(svc.saveFile.equipment, svc.saveFile.money);
    };

    svc.checkForSaveFile = function() {
      return (store.get('saveFile') !== undefined)
    }
  }
})();
