eventsApp.factory('userData', function ($resource) {
    var resource = $resource('/data/user/:id', {id: '@id'}, {
        'getAll': {
            method: 'GET',
            isArray: true,
            params: {something: 'foo'}
        }
    });

    return {
        getUser: function () {
            return resource.get({id: 1});
        },
        saveUser: function (user) {
            user.id = 1;
            return resource.save(user)
        }
    };
});