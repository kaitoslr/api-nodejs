
import express from "express";
import evaluationService from "../services/evaluation.service.js";
import evaluationController from "../controllers/evaluation.controller.js";

const router = express.Router();


router.get('/', evaluationController.controllerEvaluation);


export default router;