'use strict';

module.exports = function(onepifdata) {

    var items = onepifdata.split(/\n\*\*\*.*?\*\*\*\n/);

    var creds = [];
    var count_password = 0;
    var count_credential = 0;

    items.forEach(function(item) {
        if (item) {
            var i = JSON.parse(item);
            var f = {
                location: i.locationKey,
                username: '',
                password: ''
            };

            if (i.typeName === 'passwords.Password') {
                f.password = i.secureContents.password;
                creds.push(f);
                count_password++;
                console.log('INFO: Password for ' + i.locationKey + ' collected.');
            } else if (i.typeName === 'webforms.WebForm') {
                i.secureContents.fields.forEach(function(field) {

                    if (field.designation === 'username') {
                        f.username = field.value;
                    }
                    if (field.designation === 'password') {
                        f.password = field.value;
                    }

                });
                creds.push(f);
                count_credential++;
                console.log('INFO: Credential for ' + i.locationKey + ' collected.');
            } else {
                console.log('WARN: Unknown type "' + i.typeName + '" item skipped.');
            }
        }
    });

    console.log('INFO: ' + items.length + ' items parsed\n' +
        'INFO: ' + count_credential + ' credentials collected\n' +
        'INFO: ' + count_password + ' passwords collected\n' +
        'INFO: Total ' + (count_credential + count_password) + ' collected. Now continuing...');

    return creds;

};
