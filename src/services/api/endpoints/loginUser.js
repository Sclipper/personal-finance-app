import callAPI from '../callAPI'

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
