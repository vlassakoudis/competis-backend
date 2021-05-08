const { request } = require("express");


let Athlete = require('../models/athleteModel');
let Test = require('../models/testModel');
let Participation = require('../models/participationModel');
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
    let sqlStatementParticipation = "DELETE FROM Participation WHERE athleteId = ?;";
    let sqlStatementAthlete = "DELETE FROM Athlete WHERE idAthlete = ?";

    dbConnexion.dbConnexion.query(sqlStatementParticipation,idAthlete,function(error, resultSQL){
        if(error){
            response.status(400).json({'message' : error});
        }
        else{
            dbConnexion.dbConnexion.query(sqlStatementAthlete,idAthlete,function(error, resultSQL){
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
    let idAthlete = request.params.id;
    dbConnexion.dbConnexion.query("SELECT t.* FROM Trial t INNER JOIN Participation p ON p.trialId = t.idTrial WHERE p.AthleteId = ?;", idAthlete, function(error, resultSQL){
        if(error){
            response.status(400).json({'message' : error});
        }
        else{
            response.status(200).json(resultSQL);
        }
    }); 
}

exports.createAthleteParticipation = function(request, response){
    let participations = [];

    request.body.forEach(p => {
        participations.push([p.trialId,p.athleteId]);
    });

    let sqlStatement = "INSERT INTO Participation(trialId,athleteId) VALUES ? ;";

    dbConnexion.dbConnexion.query(sqlStatement,[participations],function(error, resultSQL){
        if(error){
            response.status(400).json({'message' : error});
        }
        else{
            response.status(200).json(resultSQL);
        }
    }); 
}

exports.updateAthleteParticipation = function(request, response){
    let participations = [];
    let idAthlete = request.params.id;

    request.body.forEach(p => {
        participations.push([p.trialId,p.athleteId]);
    });

    let sqlStatement = "DELETE FROM Participation WHERE athleteId = ?; INSERT INTO Participation(trialId,athleteId) VALUES ? ;";

    dbConnexion.dbConnexion.query(sqlStatement,[idAthlete,participations],function(error, resultSQL){
        if(error){
            response.status(400).json({'message' : error});
        }
        else{
            response.status(200).json(resultSQL);
        }
    }); 
}







