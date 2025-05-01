import database from '../storages/database.js';

const getSuperUsers = () =>{
    const data = database.getUsers();
    return data.filter(user => user.score >= 900 && user.ativo === true);
};

export default {getSuperUsers}