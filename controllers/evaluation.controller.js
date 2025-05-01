import evaluationService from "../services/evaluation.service.js";

const controllerEvaluation = async (req, res) =>{
    const startTimer = Date.now();
    try{
        const results = await evaluationService.evaluateEndpoints();
        const endTimer = Date.now();
        res.status(200).json({
            message:'deu certo',
            processing_timer: (endTimer - startTimer),
            timestamp: new Date().toISOString(),
            evaluation: results});
    }catch(error){
        res.status(500).json({
            message:'Erro ao avaliar os endpoints',
            processing_timer: (endTimer - startTimer),
            timestamp: new Date().toISOString(),
            error: error.message
        })
    }
}

export default {controllerEvaluation}