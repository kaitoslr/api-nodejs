import teamsService from '../services/teams.service.js';

const controllerTopCountries = (req, res) => {
    const startTimer = Date.now();
    const countries = teamsService.getTopCountries();
    const topCountries = Object.entries(countries)
    .sort((a,b) => b[1]-a[1])
    .slice(0,5)
    .map(([pais, count]) => ({
        country: pais,
        count: count
    }));
    const endTimer = Date.now();
    return res.status(200).json({
        message:'deu certo',
        processing_timer: (endTimer - startTimer),
        timestamp: new Date().toISOString(),
        top_countries: topCountries
    })
}

const controllerTeamInsights = (req, res)=> {
    const startTimer = Date.now();
    const teamCount = teamsService.getTeamInsights();
    const teams = Object.entries(teamCount).sort((a,b) => b[1]-a[1])
    .map(([team, count]) => ({
        team: team,
        count: count
    }));
    const endTimer = Date.now();
    return res.status(200).json({
        message:'deu certo',
        processing_timer: (endTimer - startTimer),
        timestamp: new Date().toISOString(),
        total_teams: teams.length,
        top_teams: teams
    })
}

const controllerActiveUsers = (req, res) =>{
    const startTimer = Date.now()
    const users = teamsService.getActiveUsers();
    const endTimer = Date.now()
    return res.status(200).json({
        message:'deu certo',
        processing_time: (endTimer-startTimer),
        timestamp: new Date().toISOString(),
        users_active: users
    })
}

export default{controllerTopCountries, controllerTeamInsights, controllerActiveUsers}