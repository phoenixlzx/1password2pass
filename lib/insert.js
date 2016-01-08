'use strict';

var fs = require('fs');
var execSync = require('child_process').execSync;

module.exports = function(creds) {

    creds.forEach(function(c) {
        var cmd = '';
        if (c.username) {
            cmd = 'pass insert -e "' + c.location + '/' + c.username + '"';
        } else {
            cmd = 'pass insert -e "Passwords/' + c.location + '"';
        }
        execSync(cmd, {input: c.password});
        console.log('INFO: ' + (c.username || 'Password entry') + ' at ' + c.location + ' imported.');
    });

};
