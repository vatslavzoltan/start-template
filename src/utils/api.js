import axios from 'axios'
// import { BASE_URL } from '../constants'

const api = axios.create({
  baseURL: 'BASE_URL',
  crossDomain: true,
})

export default api
