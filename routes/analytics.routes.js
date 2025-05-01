
import express from "express";
import analyticsController from "../controllers/analytics.controller.js";

const router = express.Router();


router.get('/top-countries', analyticsController.controllerTopCountries);

router.get('/team-insights', analyticsController.controllerTeamInsights);

router.get('/active-users-per-day', analyticsController.controllerActiveUsers);

export default router;
