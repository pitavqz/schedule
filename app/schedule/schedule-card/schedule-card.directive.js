angular
    .module('app')
    .directive('scheduleCard', scheduleCard);

function scheduleCard() {
    var directive = {
        restrict: 'EA',
        templateUrl: 'schedule/schedule-card/schedule-card.html',
        controller: ScheduleCardCtrl,
        controllerAs: 'vm',
        bindToController: true
    };

    return directive;
}

function ScheduleCardCtrl() {
    var vm = this;
    vm.day = "Monday";
}