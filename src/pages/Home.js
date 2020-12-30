import { useHistory } from 'react-router-dom'
import { useAccessToken } from '../services/queries'

import PersonalFinancialStatement from '../components/PersonalFinancialStatement'
import Header from '../components/Header'

// import { makeStyles } from '@material-ui/core'

// const useStyles = makeStyles((theme) => ({}))

const Home = () => {
  const history = useHistory()
  const useAccessTokenQuery = useAccessToken()

  // const classes = useStyles()
  const isLoggedIn = Boolean(useAccessTokenQuery.data)

  if (!isLoggedIn) {
    history.push('/login')
  }
  return (
    <div>
      <Header />
      <PersonalFinancialStatement />
    </div>
  )
}

export default Home
