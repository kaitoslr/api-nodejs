import superUsers from '../services/users.services.js'
import database from '../storages/database.js';

const getTopCountries =  (req, res) =>{
    const users =  superUsers.getSuperUsers();
    const paisesUsers= users.map(user => {
        const novopais = user.pais;
        return novopais
    })
    .reduce((acc, pais)=>{
        acc[pais] = (acc[pais]|| 0) +1;
        return acc;
    },{})
    return paisesUsers;
}

const getTeamInsights = (req, res) =>{
    const users = database.getUsers();
    const teamCount = users.reduce((acc, user)=>{
        const team = user.equipe.nome;
        acc[team] =(acc[team]||0) +1;
        return acc
    },{})
    return teamCount;
}
    
const getActiveUsers = (req, res) =>{
    const users = database.getUsers();
    const usersActive = users.reduce((acc, user)=>{
        user.logs.forEach(log => {
            if(log.acao === 'login'){
                acc[log.data]=((acc[log.data]||0)+1);   
            }
        });
        return acc 
    },{})
    const usersActiveSort = Object.entries(usersActive).sort((a,b)=> b[1]-a[1])
    .map(([data, count]) =>({
        data: data,
        users: count
    }))
    return usersActiveSort
}
export default {getTopCountries, getTeamInsights,getActiveUsers};