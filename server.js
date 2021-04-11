let express = require('express');
let app = express();

let routes = require('./routes');
app.use('/',routes);
app.use(express.json());
let dbConnexion = require('./dbConnexion');


// Cors
app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
    if (req.method == 'OPTIONS') {
    res.status(200).end();
    } else { next(); }
});


// Lauch App
let port = 3000;
app.listen(port, function () {
    console.log('serveur running on port' + port);
});

