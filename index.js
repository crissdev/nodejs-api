'use strict';

var API = {},
    modules = ['assert', 'buffer', 'child_process', 'cluster', 'console', 'constants', 'crypto',
        'dgram', 'dns', 'domain', 'events', 'freelist', 'fs', 'http', 'https', 'module', 'net',
        'os', 'path', 'punycode', 'querystring', 'readline', 'repl', 'stream', 'string_decoder',
        'sys', 'timers', 'tls', 'tty', 'url', 'util', 'vm', 'zlib'];

modules.forEach(function(id) {
    Object.defineProperty(API, id, {
        enumerable: true,
        get: function() {
            return require(id);
        }
    });
});


module.exports = API;
