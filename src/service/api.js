import axios from 'axios'
import base from '../helpers/api.json'

const api = axios.create({
    baserURL: base.url
})

export default api