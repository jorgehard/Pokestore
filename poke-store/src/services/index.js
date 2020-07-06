import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon?limit=50&offset=600'
});

export default api;