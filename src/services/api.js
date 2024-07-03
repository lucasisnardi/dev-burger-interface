import axios from 'axios'

const apiDevBurger = axios.create({
  baseURL: 'https://dev-club-burger-production-5b71.up.railway.app/'
})

apiDevBurger.interceptors.request.use(async config => {
  const userData = await localStorage.getItem('devburger:userData')
  const token = userData && JSON.parse(userData).token
  config.headers.authorization = `Bearer ${token}`
  return config
})

export default apiDevBurger
