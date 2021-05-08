const { request } = require("express");

let Athlete = require('../models/athleteModel');
let Trial = require('../models/trialModel');
let dbConnexion = require('../dbConnexion');


exports.getAllTrial = function(request, response){
    dbConnexion.dbConnexion.query("SELECT * FROM Trial ORDER BY startHour;", function(error, resultSQL){
        if(error){
            response.status(400).json({'message' : error});
        }
        else{
            response.status(200).json(resultSQL);
        }
    }); 
}

exports.getTrialById = function(request, response){
    let idTrial = request.params.id;
    dbConnexion.dbConnexion.query("SELECT * FROM Trial where idTrial = ?;", idTrial, function(error, resultSQL){
        if(error){
            response.status(400).json({'message' : error});
        }
        else{
            response.status(200).json(resultSQL);
        }
    }); 
}


exports.createTrial = function(request, response){
    let trialRequest = new Trial(null,request.body.label,request.body.gender,request.body.startHour,request.body.duration);
    let sqlStatement = "INSERT INTO Trial SET ? ;";

    dbConnexion.dbConnexion.query(sqlStatement,trialRequest.getData(),function(error, resultSQL){
        if(error){
            response.status(400).json({'message' : error});
        }
        else{
            response.status(200).json(resultSQL);
        }
    });
}

exports.deleteTrial = function(request, response){
    let idTrial = request.params.id;
    let sqlStatementParticipation = "DELETE FROM Participation WHERE trialId = ?;";
    let sqlStatementTrial = "DELETE FROM Trial WHERE idTrial = ?";

    dbConnexion.dbConnexion.query(sqlStatementParticipation,idTrial,function(error, resultSQL){
        if(error){
            response.status(400).json({'message' : error});
        }
        else{
            dbConnexion.dbConnexion.query(sqlStatementTrial,idTrial,function(error, resultSQL){
                if(error){
                    response.status(400).json({'message' : error});
                }
                else{
                    response.status(200).json(resultSQL);
                }
            }); 
        }
    }); 
}

exports.editTrial = function(request, response){
    let trialRequest = new Trial(request.body.idTrial,request.body.label,request.body.gender,request.body.startHour,request.body.duration);
    let sqlStatement = "UPDATE Trial SET ? WHERE idTrial = ? ;";

    dbConnexion.dbConnexion.query(sqlStatement,[trialRequest.getData(), trialRequest.idTrial],function(error, resultSQL){
        if(error){
            response.status(400).json({'message' : error});
        }
        else{
            response.status(200).json(resultSQL);
        }
    }); 
}

exports.getTrialByAthlete = function(request, response){
    let idTrial = request.params.id;
    dbConnexion.dbConnexion.query("SELECT a.* FROM Athlete a INNER JOIN Participation p ON p.athleteId = a.idAthlete WHERE p.trialId = ?;", idTrial, function(error, resultSQL){
        if(error){
            response.status(400).json({'message' : error});
        }
        else{
            response.status(200).json(resultSQL);
        }
    }); 
}