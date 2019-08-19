import axios from 'axios'

const api = axios.create({
    baseURL: 'https://reidoacai.herokuapp.com'
})

export default api