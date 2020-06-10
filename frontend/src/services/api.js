import axios from 'axios';

const api = axios.create({
    baseURL: 'https://kennedyrs-aircnc.herokuapp.com',
});

export default api;
