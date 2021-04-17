import axios from 'axios';

const api = axios.create({
  // colocamos a url que ira sempre se repetir(URL base), então tudo q for colocado
  // na chamada da api sera colocada depois desse endereço
  baseURL: 'http://api.github.com'
})

export default api;
