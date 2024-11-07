import express from 'express';
import Controller from '../controllers/controller.js';

const router = express.Router();

router.get('/players', Controller.getPlayers);

export default router;