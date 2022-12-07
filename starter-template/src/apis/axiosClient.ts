import axios, { AxiosResponse } from 'axios'
import queryString from 'query-string'

const VITE_APP_API = 'http://localhost:4000'

const axiosClient = axios.create({
  baseURL: VITE_APP_API,

  headers: {
    'Content-Type': 'application/json'
  },

  paramsSerializer: (params: any) => {
    for (let key in params) {
      params[key] = JSON.stringify(params[key])
    }
    return queryString.stringify(params)
  }
})

axios.defaults.baseURL = VITE_APP_API
axiosClient.interceptors.request.use(async (config: any) => {
  const userInfo = JSON.parse(localStorage?.getItem('userInfo') || '{}')

  if (!!userInfo.object) {
    config.headers.Authorization = `Bearer ${userInfo.object.token}`
  }

  return config
})

axiosClient.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response && response.data) {
      return response.data
    }

    return response
  },
  (error) => {
    // Handle errors
    throw error.response?.data
  }
)

export default axiosClient
