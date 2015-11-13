"use strict";

var argv = require('minimist')(process.argv.slice(2));

var fs = require('fs');

var parse = require('./parse');
var insert = require('./insert');

module.exports = function() {

    if (argv._[0]) {

        try {
            var onepifdata = fs.readFileSync(argv._[0], 'utf8');
        } catch (e) {
            console.error(e.message);
            process.exit(1);
        }

        insert(parse(onepifdata));

    } else {
        printHelp();
    }

};

function printHelp() {
    console.log('Usage: 1password2pass [path/to/your.1pif]');
}
