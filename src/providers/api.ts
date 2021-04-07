import axios from 'axios'

import { getToken } from 'utils/auth'

const provider = axios.create({
  baseURL: process.env.API_URL
})

provider.interceptors.request.use(config => {
  const token = getToken()

  return {
    ...config,
    headers: {
      ...config.headers,
      Authorization: `Bearer ${token}`
    }
  }
})

provider.interceptors.response.use(
  response => response.data,
  error => {
    if (error?.response?.status !== 401 || ['/login'].includes(window.location.pathname)) {
      return Promise.reject(error)
    }
    window.location.href = '/login'
  }
)

export default provider
