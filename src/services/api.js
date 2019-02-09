import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.11.6:3003'
});

export default api;