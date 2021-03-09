let express = require('express');
let app = express();

let routes = require('./routes');
app.use('/',routes);

let dbConnexion = require('./dbConnexion');

let port = 3000;




app.listen(port, function () {
    console.log('serveur running on port' + port);
});

