let express = require('express');
let router = express.Router();

let athleteController = require('./controllers/athleteController');
let trialController = require('./controllers/trialController')

let athleteControllerAPI = require('./controllers/athleteControllerAPI');

var bodyParser = require('body-parser');
const { request } = require('express');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


// Athlete
router.get('/athlete/create', athleteController.createAthlete);
router.get('/athlete/getAll', athleteController.getAllAthlete);
router.get('/athlete/delete', athleteController.deleteAthlete);
router.get('/athlete/edit', athleteController.editAthlete);
router.get('/athlete/search', athleteController.searchAthlete);
router.get('/athlete/getByTrial', athleteController.getAthleteByTrial);

// API athelet
router.get('/api/athlete', athleteControllerAPI.getAllAthlete);
router.get('/api/athlete/:id', athleteControllerAPI.getAthlete);
router.post('/api/athlete', athleteControllerAPI.createAthlete);
router.delete('/api/athlete/:id', athleteControllerAPI.deleteAthlete);
router.put('/api/athlete/', athleteControllerAPI.editAthlete);

router.get('/api/athletesearch', athleteControllerAPI.searchAthlete); 
router.get('/api/athletebytrial', athleteControllerAPI.getAthleteByTrial);


// Trial

router.get('/trial/create', trialController.createTrial);
router.get('/trial/getAll', trialController.getAllTrial);
router.get('/trial/getByGender', trialController.getTrialByGender);
router.get('/trial/edit', trialController.editTrial);
router.get('/trial/delete', trialController.deleteTrial);


module.exports = router;