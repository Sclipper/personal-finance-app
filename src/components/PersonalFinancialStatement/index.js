import * as React from 'react'

import {
  // FormControl,
  // FormControlLabel,
  // FormLabel,
  makeStyles,
  Paper,
  // Radio,
  // RadioGroup,
  TextField,
  Typography,
} from '@material-ui/core'
import CustomStepper from '../CustomStepper'
import Assets from './Assets'
import Liabilities from './Liabilities'
import NetWorthResult from './NetWorthResult'
import { PersonalFinanceProvider } from './context'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '1rem',
  },
  radio: {},
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  paper: {
    width: '50%',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
}))

const stepContent = [<Assets />, <Liabilities />]
const PersonalFinancialStatement = () => {
  const classes = useStyles()
  const [activeStep, setActiveStep] = React.useState(0)

  // const [radio, setRadio] = React.useState(1)

  return (
    <PersonalFinanceProvider>
      <div className={classes.container}>
        {/* <FormControl component="fieldset">
        <FormLabel component="legend">Help me add some zeros</FormLabel>
        <RadioGroup
          style={{ flexDirection: 'row' }}
          value={radio}
          onChange={(e) => setRadio(parseInt(e.target.value))}
        >
          <FormControlLabel value={1} control={<Radio />} label="Do not add" />
          <FormControlLabel
            value={1000}
            control={<Radio />}
            label="000 (Thousands)"
          />
          <FormControlLabel
            value={1000000}
            control={<Radio />}
            label="000 000 (Millions)"
          />
        </RadioGroup>
      </FormControl> */}
        <Paper className={classes.paper}>
          <Typography
            style={{ textAlign: 'center', margin: '1rem' }}
            variant="h4"
          >
            {activeStep === 0
              ? 'Assets'
              : activeStep === 1
              ? 'Liabilities'
              : 'Overview'}
          </Typography>
          <form className={classes.form}>
            <CustomStepper
              finishContent={<NetWorthResult />}
              activeStep={activeStep}
              setActiveStep={setActiveStep}
              stepKeys={['Assets', 'Liabilities']}
              stepContent={stepContent}
            />
          </form>
        </Paper>
      </div>
    </PersonalFinanceProvider>
  )
}

export default PersonalFinancialStatement
