import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:3333'
    // baseURL: 'http://10.2.3.105:3333'
    // baseURL: 'http://192.168.5.36/api/v1',
});

export default api;