import callAPI from '../callAPI'

const getAccessToken = () => {
  const token = localStorage.getItem('AUTH_REFRESH_TOKEN')
  return callAPI('/auth/token', {
    method: 'post',
    data: { token },
  }).then(({ data }) => {
    return data?.accessToken
  })
}

export default getAccessToken
