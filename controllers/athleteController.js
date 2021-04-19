const { request } = require("express");


let Athlete = require('../models/athleteModel');
let Test = require('../models/testModel');
let dbConnexion = require('../dbConnexion');


exports.getAllAthlete = function(request, response){
    dbConnexion.dbConnexion.query("SELECT * FROM Athlete;", function(error, resultSQL){
        if(error){
            response.status(400).json({'message' : error});
        }
        else{
            response.status(200).json(resultSQL);
        }
    }); 
}

exports.getAthlete = function(request, response){
    let idAthlete = request.params.id;
    dbConnexion.dbConnexion.query("SELECT * FROM Athlete where idAthlete = ?;", idAthlete, function(error, resultSQL){
        if(error){
            response.status(400).json({'message' : error});
        }
        else{
            response.status(200).json(resultSQL);
        }
    }); 
}


exports.createAthlete = function(request, response){
    let athleteRequest = new Athlete(null,request.body.lastName,request.body.firstName,request.body.birthYear,request.body.club,request.body.gender);
    let sqlStatement = "INSERT INTO Athlete SET ? ;";

    dbConnexion.dbConnexion.query(sqlStatement,athleteRequest.getData(),function(error, resultSQL){
        if(error){
            response.status(400).json({'message' : error});
        }
        else{
            response.status(200).json(resultSQL);
        }
    }); 
}


exports.deleteAthlete = function(request, response){
    let idAthlete = request.params.id;
    let sqlStatement = "DELETE FROM Athlete WHERE idAthlete = ?";

    dbConnexion.dbConnexion.query(sqlStatement,idAthlete,function(error, resultSQL){
        if(error){
            response.status(400).json({'message' : error});
        }
        else{
            if(resultSQL.affectedRows == 0)
            {
                response.status(400).json({'message' : "Erreur : id introuvable"});
            }
            else
            {
                response.status(200).json(resultSQL);
            }
        }
    }); 
}

exports.editAthlete = function(request, response){
    let athleteRequest = new Athlete(request.body.idAthlete,request.body.lastName,request.body.firstName,request.body.birthYear,request.body.club,request.body.gender);
    let sqlStatement = "UPDATE Athlete SET ? WHERE idAthlete = ? ;";

    dbConnexion.dbConnexion.query(sqlStatement,[athleteRequest.getData(), athleteRequest.idAthlete],function(error, resultSQL){
        if(error){
            response.status(400).json({'message' : error});
        }
        else{
            response.status(200).json(resultSQL);
        }
    }); 
}

exports.searchAthlete = function(request, response){

}

exports.getAthleteByTrial = function(request, response){

}





