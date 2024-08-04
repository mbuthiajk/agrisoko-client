import axios from 'axios'
const local = 'https://agrisoko-backend.vercel.app'
const production = ''
const api = axios.create({
    baseURL: `${local}/api`,
    withCredentials : true
})
export default api