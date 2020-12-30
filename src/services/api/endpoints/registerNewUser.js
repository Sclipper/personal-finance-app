import callAPI from '../callAPI'

const registerNewUser = ({ name, country, email, password }) => {
  return callAPI('/auth/register', {
    method: 'post',
    data: { name, country, email, password },
  }).then(({ data }) => {
    if (data.refreshToken) {
      localStorage.setItem('AUTH_REFRESH_TOKEN', data.refreshToken)
    }
    return data
  })
}

export default registerNewUser
