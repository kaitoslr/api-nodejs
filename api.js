import express from "express";
import usersRoutes from './routes/users.routes.js';
import analyticsRoutes from './routes/analytics.routes.js';
import evaluationRoutes from './routes/evaluation.routes.js';

const app = express();

app.use(express.json({limit:'70mb'}));

app.use('/', usersRoutes);
app.use('/analytics', analyticsRoutes);
app.use('/evaluation', evaluationRoutes);

app.get('/', (req, res) => {
    res.send('ta funcionando');
});

app.listen(3000, ()=> console.log("ta ativo sa porra :D"));






