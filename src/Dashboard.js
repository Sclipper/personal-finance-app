import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Insights from './pages/Insights'

import RootTheme from './RootTheme'

const Dashboard = () => {
  return (
    <Router>
      <RootTheme>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/insights">
            <Insights />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </RootTheme>
    </Router>
  )
}

export default Dashboard
