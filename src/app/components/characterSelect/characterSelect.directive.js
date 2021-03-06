(function () {
    'use strict';

    angular
        .module('outerZone')
        .directive('characterSelect', characterSelect);

    characterSelect.$inject = ["alliesService", "stateChangeService", "progressTracker", "lootService", "saveGame", "achievementsService"];

    function characterSelect(alliesService, stateChangeService, progressTracker, lootService, saveGame, achievementsService) {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/characterSelect/characterSelect.html',
            controller: characterSelectController,
            controllerAs: 'characterSelect',
            bindToController: true
        };

        return directive;

        function characterSelectController() {
            var vm = this;

            vm.allies = alliesService.allies;
            vm.newAlly = vm.allies[progressTracker.getNewAlly()];
            vm.builds = alliesService.getBuilds();

            activate();

            function activate() {
                achievementsService.allyUnlockAchievement(vm.newAlly);
            }

            vm.makeActiveSelection = function (build) {
                vm.activeSelection = build;
            };

            vm.confirmClass = function () {
                alliesService.setClassForAlly(vm.newAlly, vm.activeSelection);
                lootService.pullFromVault(vm.newAlly);
                alliesService.activateAlly(vm.newAlly);
                saveGame.saveGame();
                stateChangeService.playerState = 'mainMenu';
            };

        }
    }
})();
