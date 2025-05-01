let users = [];

export const saveUsers = (newUsers) => {
    users = newUsers;
};

export const getUsers = () => {
    return users;
};

export default {saveUsers, getUsers};