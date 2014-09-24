'use strict';

var test = require('ava'),
    api = require('./'),
    properties = ['assert', 'buffer', 'child_process', 'cluster', 'console', 'constants',
        'crypto', 'dgram', 'dns', 'domain', 'events', 'freelist', 'fs', 'http', 'https', 'module',
        'net', 'os', 'path', 'punycode', 'querystring', 'readline', 'repl', 'stream',
        'string_decoder', 'sys', 'timers', 'tls', 'tty', 'url', 'util', 'vm', 'zlib'];

test('should make available all module names', function(t) {
    var expected = properties.join(','),
        actual = Object.keys(api).join(',');

    t.plan(1);
    t.assert(expected === actual);
});

test('should load assert module', function(t) {
    t.plan(1);
    t.assert(api.assert === require('assert'));
});

test('should load buffer module', function(t) {
    t.plan(1);
    t.assert(api.buffer === require('buffer'));
});

test('should load child_process module', function(t) {
    t.plan(1);
    t.assert(api.child_process === require('child_process'));
});

test('should load cluster module', function(t) {
    t.plan(1);
    t.assert(api.cluster === require('cluster'));
});

test('should load console module', function(t) {
    t.plan(1);
    t.assert(api.console === require('console'));
});

test('should load constants module', function(t) {
    t.plan(1);
    t.assert(api.constants === require('constants'));
});

test('should load crypto module', function(t) {
    t.plan(1);
    t.assert(api.crypto === require('crypto'));
});

test('should load dgram module', function(t) {
    t.plan(1);
    t.assert(api.dgram === require('dgram'));
});

test('should load dns module', function(t) {
    t.plan(1);
    t.assert(api.dns === require('dns'));
});

test('should load domain module', function(t) {
    t.plan(1);
    t.assert(api.domain === require('domain'));
});

test('should load events module', function(t) {
    t.plan(1);
    t.assert(api.events === require('events'));
});

test('should load freelist module', function(t) {
    t.plan(1);
    t.assert(api.freelist === require('freelist'));
});

test('should load fs module', function(t) {
    t.plan(1);
    t.assert(api.fs === require('fs'));
});

test('should load http module', function(t) {
    t.plan(1);
    t.assert(api.http === require('http'));
});

test('should load https module', function(t) {
    t.plan(1);
    t.assert(api.https === require('https'));
});

test('should load module module', function(t) {
    t.plan(1);
    t.assert(api.module === require('module'));
});

test('should load net module', function(t) {
    t.plan(1);
    t.assert(api.net === require('net'));
});

test('should load os module', function(t) {
    t.plan(1);
    t.assert(api.os === require('os'));
});

test('should load path module', function(t) {
    t.plan(1);
    t.assert(api.path === require('path'));
});

test('should load punycode module', function(t) {
    t.plan(1);
    t.assert(api.punycode === require('punycode'));
});

test('should load querystring module', function(t) {
    t.plan(1);
    t.assert(api.querystring === require('querystring'));
});

test('should load readline module', function(t) {
    t.plan(1);
    t.assert(api.readline === require('readline'));
});

test('should load repl module', function(t) {
    t.plan(1);
    t.assert(api.repl);
});

test('should load stream module', function(t) {
    t.plan(1);
    t.assert(api.stream === require('stream'));
});

test('should load string_decoder module', function(t) {
    t.plan(1);
    t.assert(api.string_decoder === require('string_decoder'));
});

test('should load sys module', function(t) {
    t.plan(1);
    t.assert(api.sys === require('sys'));
});

test('should load timers module', function(t) {
    t.plan(1);
    t.assert(api.timers === require('timers'));
});

test('should load tls module', function(t) {
    t.plan(1);
    t.assert(api.tls === require('tls'));
});

test('should load tty module', function(t) {
    t.plan(1);
    t.assert(api.tty === require('tty'));
});

test('should load url module', function(t) {
    t.plan(1);
    t.assert(api.url === require('url'));
});

test('should load util module', function(t) {
    t.plan(1);
    t.assert(api.util === require('util'));
});

test('should load vm module', function(t) {
    t.plan(1);
    t.assert(api.vm === require('vm'));
});

test('should load zlib module', function(t) {
    t.plan(1);
    t.assert(api.zlib === require('zlib'));
});
