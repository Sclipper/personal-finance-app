import * as React from 'react'

import {
  FormControl,
  FormControlLabel,
  FormLabel,
  makeStyles,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@material-ui/core'
import CustomStepper from '../CustomStepper'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '1rem',
  },
  radio: {},
}))

const stepContent = [
  <TextField id="standard-basic" label="assets" />,
  <TextField id="standard-basic" label="liabilities" />,
]
const PersonalFinancialStatement = () => {
  const classes = useStyles()
  const [radio, setRadio] = React.useState(1)

  return (
    <div className={classes.container}>
      <FormControl component="fieldset">
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
      </FormControl>
      <Typography variant="h4">Assets</Typography>
      <form>
        <CustomStepper
          stepKeys={['Assets', 'Liabilities']}
          stepContent={stepContent}
        />
        <TextField id="standard-basic" label="Standard" />
      </form>
    </div>
  )
}

export default PersonalFinancialStatement
