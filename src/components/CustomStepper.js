import { withStyles } from '@material-ui/core/styles'

import {
  IconButton,
  makeStyles,
  Step,
  StepLabel,
  Stepper,
  StepConnector,
} from '@material-ui/core'

import { default as cx } from 'classnames'

import {
  NavigateNext,
  NavigateBefore,
  CheckCircle,
  MonetizationOn,
  MoneyOff,
} from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  buttonContainer: {
    margin: '2rem',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
  },
  iconButton: {
    border: '1px solid',
    borderRadius: '0.25rem',
  },
}))

const CustomConnector = withStyles({
  alternativeLabel: {
    top: 0,
  },
  active: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,#65e6f7 0%,#3EC3D5 50%,#0a8a9b 100%)',
    },
  },
  completed: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,#65e6f7 0%,#3EC3D5 50%,#0a8a9b 100%)',
    },
  },
  line: {
    height: '2.5rem',
    border: 0,
    backgroundColor: '#eaeaf0',
    backgroundImage:
      'linear-gradient( 95deg,#65e6f7 0%,#3EC3D5 50%,#0a8a9b 100%)',
  },
})(StepConnector)

const useCustomStepIconStyles = makeStyles({
  root: {
    height: '40px',
    background: '#0a8a9b',
    color: '#fff',
    position: 'relative',
    width: '3rem',
    textAlign: 'center',
    lineHeight: '40px',
    display: ' flex',
    justifyContent: ' center',
    alignItems: ' center',
    '&:last-child': {
      '&::after': {
        content: '"some content"',
        position: 'absolute',
        height: '0',
        width: '0',
        left: '100%',
        top: '0',
        border: '20px solid transparent',
        borderLeft: ' 20px solid #0a8a9b',
      },
    },
  },
  labelContainer: {
    width: '1rem',
  },
  active: {
    backgroundImage:
      'linear-gradient( 136deg,#65e6f7 0%,#65e6f7 50%,#65e6f7 100%)',
  },
  completed: {
    backgroundImage:
      'linear-gradient( 136deg,#65e6f7 0%,#65e6f7 50%,#65e6f7 100%)',
  },
})

function CustomStepIcon(props) {
  const classes = useCustomStepIconStyles()
  const { completed, icon } = props
  const icons = {
    1: <MonetizationOn />,
    2: <MoneyOff />,
  }

  return (
    <div
      className={cx(classes.root, {
        [classes.active]: icon === 1,
        [classes.completed]: icon === 1,
      })}
    >
      {completed ? <CheckCircle /> : icons[String(icon)]}
    </div>
  )
}

const CustomStepper = ({
  stepKeys,
  stepContent,
  activeStep,
  setActiveStep,
  finishContent,
  handleResetFunction,
}) => {
  const classes = useStyles()
  function getStepContent(step) {
    if (step <= stepContent.length - 1) {
      return stepContent[step]
    }
    return 'Error, Please refresh the page'
  }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleReset = () => {
    setActiveStep(0)
    handleResetFunction()
  }

  return (
    <div>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<CustomConnector />}
      >
        {stepKeys.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={CustomStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === stepKeys.length ? (
          <div>
            {finishContent}
            <div className={classes.buttonContainer}>
              <IconButton
                style={{ backgroundColor: '65e6f7' }}
                disabled={activeStep === 0}
                onClick={handleReset}
                className={classes.iconButton}
              >
                <NavigateBefore />
                Save statement to database and see insights.
              </IconButton>
            </div>
          </div>
        ) : (
          <div>
            {getStepContent(activeStep)}
            <div className={classes.buttonContainer}>
              <IconButton
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.iconButton}
              >
                <NavigateBefore />
                Back
              </IconButton>
              <IconButton
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.iconButton}
              >
                {activeStep === stepKeys.length - 1 ? 'Finish' : 'Next'}
                <NavigateNext />
              </IconButton>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CustomStepper
