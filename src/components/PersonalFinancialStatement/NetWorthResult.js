import * as React from 'react'

import { makeStyles, Typography } from '@material-ui/core'

import { usePersonalFinanceContext } from './context'
import Stack from '../layout/Stack'

const useStyles = makeStyles((theme) => ({
  container: {
    margin: '2rem',
    marginTop: '1rem',
  },
}))

const calculateAll = (data) => {
  const keys = Object.keys(data)
  let res = 0
  keys.forEach((key) => {
    res += data[key]
  })
  return res
}

const NetWorthResult = () => {
  const classes = useStyles()

  const { assets, liabilities } = usePersonalFinanceContext()
  console.log('liabilities', liabilities)
  const allAssets = calculateAll(assets)
  const allLiabilities = calculateAll(liabilities)

  return (
    <Stack className={classes.container} direction="column" spacing={2}>
      <Typography variant="h5">Assets: {allAssets}</Typography>
      <Typography variant="h5">Liabilities: {allLiabilities}</Typography>
      <Typography variant="h5">
        Net Worth: {allAssets - allLiabilities}
      </Typography>
    </Stack>
  )
}

export default NetWorthResult
