//Uses random.org to generate a random integer
exports.metadata = {
    id: "randomizer",
    description: "Random number generator",
    dependencies: ['config', 'logger']
}

var request = require('request');
var url;

exports.init = function(server, callback) {

    var min = server.config.get('randomizer').min || 0;
    var max = server.config.get('randomizer').max || 100;
    url = 'http://www.random.org/integers/?num=1&min=' + min + '&max=' + max + '&col=1&base=10&format=plain&rnd=new';
    callback();
}

exports.get = function(callback) {
    request.get({url: url}, function(err, response, body) {
        callback(Number(body));
    });
}