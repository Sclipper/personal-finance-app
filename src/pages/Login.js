import * as React from 'react'
import { Link, useHistory } from 'react-router-dom'

import {
  makeStyles,
  Paper,
  TextField,
  Button,
  Typography,
} from '@material-ui/core'
import { useAccessToken } from '../services/queries'
import { loginUser } from '../services/api'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: '5rem',
  },
  textField: {
    marginBottom: '1rem',
  },
}))

const Login = () => {
  const classes = useStyles()
  const history = useHistory()

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [failedLoginMessage, setFailedLoginMessage] = React.useState('')

  const useAccessTokenQuery = useAccessToken()
  const handleSubmit = (e) => {
    e.preventDefault()
    loginUser({ email, password })
      .then((res) => {
        console.log('res', res)
        history.push('/')
      })
      .catch((err) => {
        console.log('err', err)
        setFailedLoginMessage(err?.response?.data)
      })
  }

  const refreshToken = localStorage.getItem('AUTH_REFRESH_TOKEN')
  if (refreshToken) {
    if (useAccessTokenQuery.isLoading) {
      return <div>Loading...</div>
    }
  }

  if (useAccessTokenQuery.data) {
    history.push('/')
  }

  return (
    <div className={classes.container}>
      <Paper elevation="3">
        <form className={classes.form} type="submit" onSubmit={handleSubmit}>
          <TextField
            className={classes.textField}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            label="Email"
            variant="outlined"
          />
          <TextField
            className={classes.textField}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            label="Password"
            variant="outlined"
          />
          <Button color="primary" variant="contained" type="submit">
            {' '}
            Submit
          </Button>
          <Typography>{failedLoginMessage}</Typography>
        </form>
        <Link to="/register">Create account instead!</Link>
      </Paper>
    </div>
  )
}

export default Login
