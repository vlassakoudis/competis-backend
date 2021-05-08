let mysql = require('mysql');

let dbConnexion = mysql.createConnection({
    host : '192.168.0.104',
    port : '49153',
    user : 'root',
    password : 'yannick',
    database : 'competis',
    multipleStatements: true
})

dbConnexion.connect(function(error) { if (error) console.log("Erreur connexion base de données : " + error);});

exports.dbConnexion = dbConnexion;