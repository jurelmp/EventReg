'use strict';

eventsApp.controller('EditEventController',
    function EventController($scope, eventData) {
        $scope.saveEvent = function (event, newEventForm) {
            if (newEventForm.$valid) {
                eventData.save(event)
                    .$promise
                    .then(function (response) {
                        console.log('success');
                    })
                    .catch(function (response) {
                        console.log('failure');
                    });
            }
        };
        $scope.cancelEdit = function () {
            window.location = '/EventDetails.html';
        };
    }
);