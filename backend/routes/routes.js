import express from 'express';
import MainPageController from '../controllers/MainPageController.js';
import PlayerInformationController from '../controllers/PlayerInformationController.js';
import TeamInformationController from '../controllers/TeamInformationController.js';

const router = express.Router();


//main page
router.get('/players', MainPageController.getPlayers);
router.get('/teams', MainPageController.getTeams);
router.get('/tournaments', MainPageController.getTournaments);
router.get('/videogames', MainPageController.getVideogames);

//information
router.get('/player/:id', PlayerInformationController.getPlayerInformation);
router.get('/team/:id', TeamInformationController.getTeamInformation);


export default router;