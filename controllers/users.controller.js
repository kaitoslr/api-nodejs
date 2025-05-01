import database from '../storages/database.js';
import superUsersService from '../services/users.services.js'

const createUsers = (req, res) =>{
    const startTimer = Date.now();
    try{
        const users = req.body;
        if(!Array.isArray(users)){
           return res.status(400).json({message: 'Os dados tá errado'});
        }
        database.saveUsers(users);

        const total = users.length;
        const endTimer = Date.now();

        return res.status(200).json({
            message:'Usuários carregados com sucesso',
            total_users: total,
            processing_timer:(endTimer - startTimer),
            timeStamp: new Date().toISOString()
        })
    }
    catch (error){
        console.log(error)
        return res.status(500).json({message: 'Erro no processo do dados'});

    }
}

const controllerSuperUsers = (req, res) =>{
        const startTimer = Date.now();
        const users = superUsersService.getSuperUsers();
        const endTimer = Date.now();
        return res.status(200).json({
            message:'deu certo',
                total: users.length,
                processing_timer: (endTimer - startTimer),
                timestamp: new Date().toISOString(),
                superUser_list: users
        })
}

export default {createUsers, controllerSuperUsers};