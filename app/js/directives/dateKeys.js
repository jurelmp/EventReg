'use strict';

eventsApp.directive('dateKeys', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs, controller) {
            element.on('keydown', function (event) {
                if (isNumericKeyCode(event.keyCode)
                    || isForwaredSlashKeyCode(event.key)
                    || isNavigationKeyCode(event.keyCode)) {
                    return true;
                }
                return false;
            });
        }
    };

    function isNumericKeyCode(keyCode) {
        return (event.keyCode >= 48 && event.keyCode <= 57)
            || (event.keyCode >= 96 && event.keyCode <= 105);
    }

    function isForwaredSlashKeyCode(keyCode) {
        return event.keyCode === 191;
    }

    function isNavigationKeyCode(keyCode) {
        switch (keyCode) {
            case 8: // backspace
            case 35: // end
            case 37: // home
            case 38: // left
            case 39: // up
            case 40: // right
            case 45: // down
            case 46: // del
                return true;
            default:
                return false;
        }
    }
});