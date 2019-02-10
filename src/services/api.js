import axios from 'axios';

const api = axios.create({
    baseURL: 'https://infinite-coast-29296.herokuapp.com'
});

export default api;