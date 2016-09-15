(function () {
  'use strict';

  angular
    .module('outerZone')
    .service('alliesService', alliesService);

  alliesService.$inject = ["stateChangeService", "progressTracker", "fightLogService", '$timeout'];

  function alliesService(stateChangeService, progressTracker, fightLogService, $timeout) {
    var vm = this;

    vm.allies = [
      {
        'name' : 'The Scarecrow',
        'id' : 101,
        'level' : 1,
        'exp' : 0,
        'status' : 'inactive',
        'stats' : {
          'maxHealth' : 1,
          'maxEnergy' : 1,
          'strength' : 1,
          'speed' : 1,
          'defense' : 1
        },
        'builds' : [
          {
            'name' : 'Berserker',
            'description' : 'The Berserker fights with reckless abandon. He favors speed and brute force over accuracy.' +
            ' He isn\'t concerned with preservation, only destruction.',
            'baseStats' : {
                'maxHealth' : 250,
                'maxEnergy' : 40,
                'strength' : 550,
                'speed' : 110,
                'defense' : 500
            },
            'moves' : [['Fury', 1], ['Unchained', 5], ['Bloodbath', 10]]
            //TODO would be cool to eventually add a passive ability to each class.

          },
          {
            'name' : 'Brawler',
            'description' : 'The Brawler engages in a careful chess match with his opponent. The Brawler is not' +
            ' concerned with who appears to be winning the fight. He always deals the final blow.',
            'baseStats' : {
                'maxHealth' : 350,
                'maxEnergy' : 20,
                'strength' : 3,
                'speed' : 3,
                'defense' : 3
            },
            'moves' : [['Parry', 1], ['Knockout', 5], ['Death Punch', 10]]
          },
          {
            'name' : 'Tank',
            'description' : 'The Tank is built on pure endurance. By minimizing the damage taken he wears down his' +
            ' opponents and finishes them off in their weakened state.',
            'baseStats' : {
                'maxHealth' : 500,
                'maxEnergy' : 10,
                'strength' : 3,
                'speed' : 1,
                'defense' : 6
            },
            'moves' : [['Fortify', 1], ['Absorb', 5], ['Man of Stone', 10]]
          }
        ]
      },
      {
        'name' : 'Dorothy',
        'id' : 102,
        'level' : 1,
        'status' : 'inactive',
        'stats' : {
          'maxHealth' : 1,
          'maxEnergy' : 1,
          'strength' : 1,
          'speed' : 1,
          'defense' : 1
        },
        'builds' : [
          {
            'name' : 'Medic',
            'description' : 'The Medic sticks to the back. She prefers to keep her allies healthy while they deal' +
            ' with the enemy.',
            'baseStats' : {
              'maxHealth' : 250,
              'maxEnergy' : 40,
              'strength' : 3,
              'speed' : 7,
              'defense' : 1
            },
            'moves' : [['Heal', 1], ['Energize', 5], ['Restore', 10]]
          },
          {
            'name' : 'Commander',
            'description' : 'The Commander leads the group. She isn\'t always the most powerful opponent on the' +
            ' field, but her presence inspires those around her.',
            'baseStats' : {
              'maxHealth' : 350,
              'maxEnergy' : 20,
              'strength' : 3,
              'speed' : 3,
              'defense' : 3
            },
            'moves' : [['Charge', 1], ['Inspire', 5], ['Vanquish', 10]]
          },
          {
            'name' : 'Engineer',
            'description' : 'The Engineer lives and dies by her own preparation. When she\'s aware of the enemy,' +
            ' there\'s no stopping her. Catching her off guard is another story.',
            'baseStats' : {
              'maxHealth' : 500,
              'maxEnergy' : 10,
              'strength' : 3,
              'speed' : 1,
              'defense' : 6
            },
            'moves' : [['Upgrade', 1], ['Hijack Weapons', 5], ['Build Turret', 10]]
        }
      ]
      },
      {
        'name' : 'The Lion',
        'id' : 103,
        'level' : 1,
        'status' : 'inactive',
        'stats' : {
          'maxHealth' : 1,
          'maxEnergy' : 1,
          'strength' : 1,
          'speed' : 1,
          'defense' : 1
        },
        'builds' : [
          {
            'name' : 'Berserker',
            'description' : 'The Berserker fights with reckless abandon. He favors speed and brute force over accuracy.' +
            ' He isn\'t concerned with preservation, only destruction.',
            'baseStats' : {
              'maxHealth' : 250,
              'maxEnergy' : 40,
              'strength' : 3,
              'speed' : 7,
              'defense' : 1
            }
          },
          {
            'name' : 'Brawler',
            'description' : 'The Brawler engages in a careful chess match with his opponent. The Brawler is not' +
            ' concerned with who appears to be winning the fight. He always deals the final blow.',
            'baseStats' : {
              'maxHealth' : 350,
              'maxEnergy' : 20,
              'strength' : 3,
              'speed' : 3,
              'defense' : 3
            }
          },
          {
            'name' : 'Tank',
            'description' : 'The Tank is built on pure endurance. By minimizing the damage taken he wears down his' +
            ' opponents and finishes them off in their weakened state.',
            'baseStats' : {
              'maxHealth' : 500,
              'maxEnergy' : 10,
              'strength' : 3,
              'speed' : 1,
              'defense' : 6
            }
          }
        ]
      },
      {
        'name' : 'Tin Man',
        'id' : 104,
        'level' : 1,
        'status' : 'inactive',
        'stats' : {
          'maxHealth' : 1,
          'maxEnergy' : 1,
          'strength' : 1,
          'speed' : 1,
          'defense' : 1
        },
        'builds' : [
          {
            'name' : 'Berserker',
            'description' : 'The Berserker fights with reckless abandon. He favors speed and brute force over accuracy.' +
            ' He isn\'t concerned with preservation, only destruction.',
            'baseStats' : {
              'maxHealth' : 250,
              'maxEnergy' : 40,
              'strength' : 3,
              'speed' : 7,
              'defense' : 1
            }
          },
          {
            'name' : 'Brawler',
            'description' : 'The Brawler engages in a careful chess match with his opponent. The Brawler is not' +
            ' concerned with who appears to be winning the fight. He always deals the final blow.',
            'baseStats' : {
              'maxHealth' : 350,
              'maxEnergy' : 20,
              'strength' : 3,
              'speed' : 3,
              'defense' : 3
            }
          },
          {
            'name' : 'Tank',
            'description' : 'The Tank is built on pure endurance. By minimizing the damage taken he wears down his' +
            ' opponents and finishes them off in their weakened state.',
            'baseStats' : {
              'maxHealth' : 500,
              'maxEnergy' : 10,
              'strength' : 3,
              'speed' : 1,
              'defense' : 6
            }
          }
          ]
      },
      {
        'name' : 'The Wizard',
        'id' : 105,
        'level' : 1,
        'status' : 'inactive',
        'stats' : {
          'maxHealth' : 1,
          'maxEnergy' : 1,
          'strength' : 1,
          'speed' : 1,
          'defense' : 1
        },
        'builds' : [
          {
            'name' : 'Berserker',
            'description' : 'The Berserker fights with reckless abandon. He favors speed and brute force over accuracy.' +
            ' He isn\'t concerned with preservation, only destruction.',
            'baseStats' : {
              'maxHealth' : 250,
              'maxEnergy' : 40,
              'strength' : 3,
              'speed' : 7,
              'defense' : 1
            }
          },
          {
            'name' : 'Brawler',
            'description' : 'The Brawler engages in a careful chess match with his opponent. The Brawler is not' +
            ' concerned with who appears to be winning the fight. He always deals the final blow.',
            'baseStats' : {
              'maxHealth' : 350,
              'maxEnergy' : 20,
              'strength' : 3,
              'speed' : 3,
              'defense' : 3
            }
          },
          {
            'name' : 'Tank',
            'description' : 'The Tank is built on pure endurance. By minimizing the damage taken he wears down his' +
            ' opponents and finishes them off in their weakened state.',
            'baseStats' : {
              'maxHealth' : 500,
              'maxEnergy' : 10,
              'strength' : 3,
              'speed' : 1,
              'defense' : 6
            }
          }
          ]
      }
    ];

    vm.activateAlly = function(ally) {
      ally.status = 'alive';
      vm.updateActives();
    };

    vm.levelUp = function(ally) {
      ally.level++;
    };

    vm.deactivateAlly = function(ally) {
      ally.status = 'inactive';
      vm.updateActives();
    };

    vm.updateActives = function() {
      vm.activeAllies = [];
      angular.forEach(vm.allies, function(ally) {
        if (ally.status !== 'inactive') {
          vm.activeAllies.push(ally);
        }
      });
      angular.forEach(vm.activeAllies, function(ally) {
        vm.updatePercentages(ally);
      });
    };

    vm.updatePercentages = function(ally) {
      ally.percentageHealth = (ally.stats.health/ally.stats.maxHealth)*100 + '%';
      ally.percentageEnergy = (ally.stats.energy/ally.stats.maxEnergy)*100 + '%';
    };

    vm.checkForDeath = function(ally) {
      if (ally.stats.health <= 0) {
        ally.stats.health = 0;
        ally.status = 'dead';
        vm.checkForDefeat();
      }
    };

    vm.checkForDefeat = function() {
      var livingAllies = 0;
      angular.forEach(vm.activeAllies, function(ally) {
        if (ally.status === 'alive') {
          livingAllies++;
        }
      });
      if (livingAllies === 0) {
        progressTracker.stopFight();
        fightLogService.pushToFightLog('Defeated');
        $timeout(function() {
          stateChangeService.setPlayerState('fightSummary');
        }, 2500)
      }
    };

    vm.restoreAll = function() {
      angular.forEach(vm.activeAllies, function(ally) {
        ally.stats = ally.baseStats;
        //TODO stats should be a 'ghost' of baseStats. 'clone' etc.
      });
      angular.forEach(vm.activeAllies, function(ally) {
        ally.status = 'alive';
        ally.stats.health = ally.stats.maxHealth;
        ally.stats.energy = ally.stats.maxEnergy;
        vm.updatePercentages(ally);
      });
    };

    vm.updateActives();
  }
})();
