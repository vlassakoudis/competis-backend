let express = require('express');
let router = express.Router();

let trialController = require('./controllers/trialController')

let athleteController = require('./controllers/athleteController');

var bodyParser = require('body-parser');
const { request } = require('express');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


// Athlete
router.get('/api/athlete', athleteController.getAllAthlete);
router.get('/api/athlete/:id', athleteController.getAthlete);
router.post('/api/athlete', athleteController.createAthlete);
router.delete('/api/athlete/:id', athleteController.deleteAthlete);
router.put('/api/athlete/', athleteController.editAthlete);

router.get('/api/athletesearch', athleteController.searchAthlete); 
router.get('/api/athletebytrial', athleteController.getAthleteByTrial);


// Trial
router.get('/api/trial/', trialController.getAllTrial);
router.get('/api/trial/:id', trialController.getTrialById);
router.post('/api/trial', trialController.createTrial);
router.delete('/api/trial/:id', trialController.deleteTrial);
router.put('/api/trial', trialController.editTrial);

router.get('/api/trialByGender', trialController.getTrialByGender);


module.exports = router;