'use strict'

const ncp = require('ncp').ncp;
const fs = require('fs');
var zipdir = require('zip-dir');

let srcPath = '../static'; //current folder
let destPath = '../extension/static'; //Any destination folder

ncp.limit = 16;

ncp(srcPath, destPath, function (err) {
    if (err) {
        return console.error(err);
    }
    console.log('cp done!');


    zipdir('../extension', { saveTo: '../extension.zip' }, function (err, buffer) {
        console.log('zip done!')
        // `buffer` is the buffer of the zipped file
        // And the buffer was saved to `~/myzip.zip`
    });
});



