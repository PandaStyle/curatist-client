var zipdir = require('zip-dir');

zipdir('../extension', { saveTo: '../extension.zip' }, function (err, buffer) {
    console.log('zip done!')
    // `buffer` is the buffer of the zipped file
    // And the buffer was saved to `~/myzip.zip`
});
