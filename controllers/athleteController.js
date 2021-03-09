const { request } = require("express");

let Athlete = require('../models/athleteModel');
let Test = require('../models/testModel');
let dbConnexion = require('../dbConnexion');



exports.testList = function(request, response){
    
    dbConnexion.dbConnexion.query("SELECT * FROM tableTest;", function(error, resultSQL){
        if(error){
            response.status(400).send(error);
        }
        else{
            response.status(200).send(resultSQL);
        }
    }); 
}

exports.createAthlete = function(request, response){
    let athelteTest = new Athlete(null,"Vlassakoudis","Yannick","1998","UAC","H");
    let sqlStatement = "INSERT INTO Athlete (lastName, firstName, birthYear,club,gender) VALUES (?,?,?,?,?);";

    dbConnexion.dbConnexion.query(sqlStatement,athelteTest.getData(),function(error, resultSQL){
        if(error){
            response.status(400).send(error);
        }
        else{
            response.status(200).send(resultSQL);
        }
    }); 
}

exports.getAllAthlete = function(request, response){
    dbConnexion.dbConnexion.query("SELECT * FROM Athlete;", function(error, resultSQL){
        if(error){
            response.status(400).send(error);
        }
        else{
            response.status(200).send(resultSQL);
        }
    }); 
}

exports.deleteAthlete = function(request, response){
    let athelteTest = new Athlete(null,"Vlassakoudis","Yannick","1998","UAC","H");
    let id = 4;
    let sqlStatement = "DELETE FROM Athlete WHERE idAthlete = ?";

    dbConnexion.dbConnexion.query(sqlStatement,id,function(error, resultSQL){
        if(error){
            response.status(400).send(error);
        }
        else{
            if(resultSQL.affectedRows == 0)
            {
                response.status(400).send("Id introuvable");
            }
            else
            {
                response.status(200).send(resultSQL);
            }
        }
    }); 
}

exports.editAthlete = function(request, response){

}

exports.searchAthlete = function(request, response){

}

exports.getAthleteByTrial = function(request, response){

}





