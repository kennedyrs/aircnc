import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.2.3.105:3333',
});

export default api;