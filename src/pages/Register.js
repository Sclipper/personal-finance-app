import * as React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { makeStyles, Paper, TextField, Button } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'

import { registerNewUser } from '../services/api'

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
  icon: {
    '&:hover': {
      cursor: 'pointer',
    },
    position: 'absolute',
    top: '1rem',
  },
}))

const defaultState = {
  name: '',
  country: '',
  email: '',
  password: '',
}

const Register = () => {
  const classes = useStyles()
  const history = useHistory()
  const [state, setState] = React.useState(defaultState)
  const { name, country, email, password } = state
  const [passwordType, setPasswordType] = React.useState('password')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit')
    registerNewUser(state)
      .then((res) => {
        console.log('res', res)
        history.push('/login')
      })
      .catch((err) => {
        console.log('err', err)
      })
  }

  const handleUpdate = (key, value) => {
    setState({
      ...state,
      [key]: value,
    })
  }
  return (
    <div className={classes.container}>
      <Paper elevation="3">
        <form className={classes.form} type="submit" onSubmit={handleSubmit}>
          <TextField
            className={classes.textField}
            value={name}
            onChange={(e) => handleUpdate('name', e.target.value)}
            type="name"
            label="Name"
            variant="outlined"
          />
          <TextField
            className={classes.textField}
            value={country}
            onChange={(e) => handleUpdate('country', e.target.value)}
            type="country"
            label="Country"
            variant="outlined"
          />
          <TextField
            required
            className={classes.textField}
            value={email}
            onChange={(e) => handleUpdate('email', e.target.value)}
            type="email"
            label="Email"
            variant="outlined"
          />
          <div style={{ position: 'relative' }}>
            <TextField
              required
              className={classes.textField}
              value={password}
              onChange={(e) => handleUpdate('password', e.target.value)}
              type={passwordType}
              label="Password"
              variant="outlined"
            />
            {passwordType === 'password' ? (
              <Visibility
                className={classes.icon}
                onClick={() => setPasswordType('visible')}
              />
            ) : (
              <VisibilityOff
                className={classes.icon}
                onClick={() => setPasswordType('password')}
              />
            )}
          </div>

          <Button color="primary" variant="contained" type="submit">
            {' '}
            Register
          </Button>
        </form>
        <Link to="/login">Log in instead!</Link>
      </Paper>
    </div>
  )
}

export default Register
