import express from 'express';
import Controller from '../controllers/controller.js';

const router = express.Router();

router.get('/players', Controller.getPlayers);
router.get('/teams', Controller.getTeams);
router.get('/tournaments', Controller.getTournaments);
router.get('/videogames', Controller.getVideogames);

export default router;