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

const Liabilities = (state, setState) => {
  const classes = useStyles()
  const { liabilities, setUpdateLiabilities } = usePersonalFinanceContext()
  console.log('liabilities', liabilities)
  return (
    <Stack className={classes.container} direction="column" spacing={2}>
      <FieldComponent title="Debt" iconText="Availble cash in all accounts">
        <TextField
          autoFocus
          onChange={(e) => setUpdateLiabilities('creditCard', e.target.value)}
          className={classes.textField}
          InputLabelProps={{
            styles: {
              transform: 'translate(14px, 24px) scale(1)',
            },
          }}
          type="number"
          label="Credit card"
          variant="outlined"
        />
        <TextField
          onChange={(e) => setUpdateLiabilities('notesPayable', e.target.value)}
          className={classes.textField}
          type="number"
          label="Notes payable"
          variant="outlined"
        />
        <TextField
          onChange={(e) => setUpdateLiabilities('taxes', e.target.value)}
          className={classes.textField}
          type="number"
          label="Taxes"
          variant="outlined"
        />
      </FieldComponent>
      <FieldComponent title="Mortgages" iconText="House, boat etc...">
        <TextField
          onChange={(e) => setUpdateLiabilities('house', e.target.value)}
          className={classes.textField}
          label="House"
          variant="outlined"
          type="number"
        />

        <TextField
          onChange={(e) =>
            setUpdateLiabilities('otherMortgages', e.target.value)
          }
          className={classes.textField}
          type="number"
          label="Other mortgages"
          variant="outlined"
        />
      </FieldComponent>
      <FieldComponent title="Others" iconText="Everything else">
        <TextField
          onChange={(e) =>
            setUpdateLiabilities('otherLiabilities', e.target.value)
          }
          className={classes.textField}
          type="number"
          label="Other liabilities"
          variant="outlined"
        />
      </FieldComponent>
    </Stack>
  )
}

export default Liabilities
