import * as React from 'react'

import {
  Button,
  makeStyles,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({}))

const CustomStepper = ({ stepKeys, stepContent }) => {
  const classes = useStyles()

  const [activeStep, setActiveStep] = React.useState(1)

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
  }

  return (
    <div>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        // connector={<ColorlibConnector />}
      >
        {stepKeys.map((label) => (
          <Step key={label}>
            <StepLabel
            // StepIconComponent={ColorlibStepIcon}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === stepKeys.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            {getStepContent(activeStep)}
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.button}
              >
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === stepKeys.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CustomStepper
