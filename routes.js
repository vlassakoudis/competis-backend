let express = require('express');
let router = express.Router();

let athleteController = require('./controllers/athleteController');
let trialController = require('./controllers/trialController')

var bodyParser = require('body-parser');
const { request } = require('express');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get('/', athleteController.testList)

// Athlete
router.get('/athlete/create', athleteController.createAthlete);
router.get('/athlete/getAll', athleteController.getAllAthlete);
router.get('/athlete/delete', athleteController.deleteAthlete);
router.get('/athlete/edit', athleteController.editAthlete);
router.get('/athlete/search', athleteController.searchAthlete);
router.get('/athlete/getByTrial', athleteController.getAthleteByTrial);

// Trial

router.get('/trial/create', trialController.createTrial);
router.get('/trial/getAll', trialController.getAllTrial);
router.get('/trial/getByGender', trialController.getTrialByGender);
router.get('/trial/edit', trialController.editTrial);
router.get('/trial/delete', trialController.deleteTrial);


module.exports = router;