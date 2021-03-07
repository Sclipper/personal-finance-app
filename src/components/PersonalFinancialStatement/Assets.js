import { makeStyles, TextField, Tooltip, Typography } from '@material-ui/core'
import { Help } from '@material-ui/icons'
import Stack from '../layout/Stack'
import { usePersonalFinanceContext } from './context'

const useStyles = makeStyles((theme) => ({
  container: {
    margin: '2rem',
    marginTop: '1rem',
  },
  testFieldWrapper: {
    width: '100% !important',
    [theme.breakpoints.down('xs')]: {
      flexWrap: 'wrap',
      '& > *:not(:last-child)': {
        marginBottom: '1rem',
      },
    },
  },
  textField: {
    width: '100%',
  },
  icon: {
    [theme.breakpoints.down('xs')]: {
      right: ' 1rem',
      position: ' absolute',
      top: '5px',
    },
  },
}))

const HoverIcon = ({ icon, text }) => (
  <Tooltip title={text} placement="right">
    {icon}
  </Tooltip>
)

const FieldComponent = ({ children, iconText, title }) => {
  const classes = useStyles()
  return (
    <Stack items="center" direction="row" spacing={1}>
      <Stack
        style={{ width: '100%', position: 'relative' }}
        items="center"
        direction="column"
        spacing={1}
      >
        <Typography style={{ alignSelf: 'baseline' }} variant="h5">
          {title}
        </Typography>
        <Stack
          className={classes.testFieldWrapper}
          items="center"
          justify="center"
          direction="row"
          spacing={1}
        >
          {children}
          <HoverIcon text={iconText} icon={<Help className={classes.icon} />} />
        </Stack>
      </Stack>
    </Stack>
  )
}
const Assets = (state, setState) => {
  const classes = useStyles()
  const { assets, setUpdateAssets } = usePersonalFinanceContext()
  console.log('assets', assets)
  return (
    <Stack className={classes.container} direction="column" spacing={2}>
      <FieldComponent title="Cash" iconText="Availble cash in all accounts">
        <TextField
          onChange={(e) => setUpdateAssets('checkingAccount', e.target.value)}
          className={classes.textField}
          InputLabelProps={{
            styles: {
              transform: 'translate(14px, 24px) scale(1)',
            },
          }}
          type="number"
          label="Checking Account"
          variant="outlined"
        />
        <TextField
          onChange={(e) => setUpdateAssets('savingsAccount', e.target.value)}
          className={classes.textField}
          type="number"
          label="Savings Account"
          variant="outlined"
        />
      </FieldComponent>
      <FieldComponent
        title="Investments"
        iconText="Stocks, Bonds, Mutual Funds"
      >
        <TextField
          onChange={(e) => setUpdateAssets('securities', e.target.value)}
          className={classes.textField}
          label="Securities"
          variant="outlined"
          type="number"
        />

        <TextField
          onChange={(e) => setUpdateAssets('retirementFunds', e.target.value)}
          className={classes.textField}
          type="number"
          label="Retirement funds"
          variant="outlined"
        />
      </FieldComponent>
      <FieldComponent
        title="Property"
        iconText="Anything valuable that could be turned in to cash"
      >
        <TextField
          onChange={(e) => setUpdateAssets('realEstate', e.target.value)}
          className={classes.textField}
          type="number"
          label="Real estate (market value)"
          variant="outlined"
        />
        <TextField
          onChange={(e) => setUpdateAssets('jewels', e.target.value)}
          className={classes.textField}
          type="number"
          label="Jewels, valuables)"
          variant="outlined"
        />
      </FieldComponent>
      <FieldComponent title="Others" iconText="Everything else">
        <TextField
          onChange={(e) => setUpdateAssets('otherAssets', e.target.value)}
          className={classes.textField}
          type="number"
          label="Other assets"
          variant="outlined"
        />
      </FieldComponent>
    </Stack>
  )
}

export default Assets
