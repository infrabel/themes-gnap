var express = require('express'),
    app = express(),
    port = parseInt(process.argv[2]),
    path = process.argv[3];

app.use(express.static(path));

var server = app.listen(port, function() {
    console.log('Listening on port %d', port);
});