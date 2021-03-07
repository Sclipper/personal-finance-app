/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios'
// import { API_BASE_URL } from '../env'
const callAPI = async (endpoint, request) => {
  const { method = 'get', data, headers } = request
  const API_BASE_URL = 'http://localhost:8080'
  const url = `${API_BASE_URL}${endpoint}`

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
const loginUser = ({ email, password }) => {
  return callAPI('/auth/login', {
    method: 'post',
    data: { email, password },
  }).then(({ data }) => {
    if (data.refreshToken) {
      localStorage.setItem('AUTH_REFRESH_TOKEN', data.refreshToken)
    }
    return data
  })
}

export default loginUser
