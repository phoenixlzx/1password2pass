'use strict';

var fs = require('fs');

var onepifdata = fs.readFileSync('./data.1pif', 'utf8');

var items = onepifdata.split(/\n\*\*\*.*?\*\*\*\n/);


items.forEach(function(item, index) {
    if (item) {
        var i = JSON.parse(item);
        if (i.secureContents) {
            var f = {
                location: i.locationKey,
                username: '',
                password: ''
            };
            if (i.secureContents.password) {
                f.password = i.secureContents.password;
                console.log(JSON.stringify(f));
            }
            if (i.secureContents.fields) {
                i.secureContents.fields.forEach(function(field) {
                    // walk through every obj to find username and password
                    if (field.designation === 'username') {
                        f.username = field.value;
                    }
                    if (field.designation === 'password') {
                        f.password = field.value;
                    }
                });
                console.log(JSON.stringify(f));
            }
            console.log(index);
        }
    }
});
