import axios from 'axios'
import base from '../helpers/api.json'

const api = axios.create({
    baseURL: base.url
})

export default api