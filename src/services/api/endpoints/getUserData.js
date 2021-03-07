import callAPI from '../callAPI'

const getUserData = () => {
  return callAPI('/user/get-data', {
    method: 'get',
  }).then(({ data }) => {
    return data
  })
}

export default getUserData
