import React from 'react'
import { useUserData } from 'services/queries'
// import { makeStyles } from '@material-ui/core'

// const useStyles = makeStyles((theme) => ({

// }))

const Insights = () => {
  // const classes = useStyles()
  const userDataQuery = useUserData()

  if (userDataQuery.isLoading) {
    return <div>Loading ...</div>
  }
  console.log('userDataQuery', userDataQuery.data)
  return (
    <div>
      <p>pachangameinter</p>
    </div>
  )
}

export default Insights
