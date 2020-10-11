import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return [
    "Section 1 - INTRODUCE YOURSELF",
    "Section 2 - PRACTICE ROUND",
    "Section 3 - FINAL EXPERIMENT",
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `In this section we just want to get to know you better. 
      You will be given a form to fill in details about yourself`;
    case 1:
      return (
        <div>
          <Typography variant="subtitle1">
            Before you get to work on the main experiment, you need to get
            familiar with the process. That's why this is a test round for you.
            You need to go through the following steps -
          </Typography>
          <img src={"/practise.jpg"} style={{ padding: 15, width: "100%" }} />
        </div>
      );
    case 2:
      return (
        <div>
          <Typography variant="subtitle1">
            This will be your final experiment round. You will be already
            familiar with this round if you complete the practice round.
          </Typography>
          <img src={"/main.jpg"} style={{ padding: 15, width: "100%" }} />
        </div>
      );

    default:
      return "Unknown step";
  }
}

export default function VerticalLinearStepper({ completeSteps }) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      completeSteps();
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography variant="subtitle1">
                {getStepContent(index)}
              </Typography>
              <div className={classes.actionsContainer}>
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
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography variant="body2" color="textSecondary">
            Congrats - you&apos;ve finished reading the guidelines
          </Typography>
          <Typography variant="body2" color="textSecondary">
            If you want to revisit the guidelines, press reset button.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleReset}
            className={classes.button}
          >
            RESET
          </Button>
        </Paper>
      )}
    </div>
  );
}
