// import callAPI from '../callAPI'

import axios from 'axios'
import moment from 'moment'
import jwtDecode from 'jwt-decode'

const callAPI = async (endpoint, request) => {
  const { method = 'get', data, headers } = request
  const API_BASE_URL = 'http://localhost:8080'
  const url = `${API_BASE_URL}${endpoint}`

  // const accessToken = await getAccessToken()

  return axios({
    url,
    method,
    timeout: 30000,
    headers: {
      Authorization: '',
      'Content-Type': 'application/json',
      ...headers,
    },
    data,
  })
}

export const renewToken = () => {
  const token = localStorage.getItem('AUTH_REFRESH_TOKEN')
  return callAPI('/auth/token', {
    method: 'post',
    data: { token },
  }).then(({ data }) => {
    localStorage.setItem('AUTH_ACCESS_TOKEN', data?.accessToken)
    return data?.accessToken
  })
}

export const getAccessToken = async () => {
  await renewTokensIfExpired()
  return renewToken()
}
const renewTokensIfExpired = async () => {
  const authAccessToken = localStorage.getItem('AUTH_ACCESS_TOKEN')

  // Guard against missing tokens (user not logged in)
  if (!authAccessToken) {
    return
  }

  if (hasExpired(authAccessToken)) {
    await renewToken()
  }
}

const hasExpired = (token, options = {}) => {
  const { expireEarly = 10000 } = options

  return moment.unix(jwtDecode(token).exp).diff(moment.now()) < expireEarly
}
