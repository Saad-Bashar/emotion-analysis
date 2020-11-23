import React, { useState } from "react";
import {
  Button,
  Card,
  Typography,
  CardContent,
  TextField,
  LinearProgress,
  FormControl,
  InputLabel,
  FormControlLabel,
  MenuItem,
  Checkbox,
  FormLabel,
  FormGroup,
  Grid,
  CardActions,
  RadioGroup,
  Radio,
  Paper,
  Snackbar,
} from "@material-ui/core";
import cs from "../styles/Home.module.css";
import SAM from "../src/components/sam";
import NASA from "../src/components/nasa";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const data = [
  {
    index: 0,
    questionType: "mcq",
    question: "Which one is the correct function syntax?",
    options: [
      {
        img: "/func-easy-mcq-op1.png",
        value: "func-easy-mcq-op1",
      },
      {
        img: "/func-easy-mcq-op2.png",
        value: "func-easy-mcq-op2",
      },
      {
        img: "/func-easy-mcq-op3.png",
        value: "func-easy-mcq-op3",
      },
      {
        img: "/func-easy-mcq-op4.png",
        value: "func-easy-mcq-op4",
      },
    ],
    givenAns: null,
    correctAnswer: "func-easy-mcq-op1",
    dictionary: {
      function: 1,
      loops: 0,
      condition: 0,
      theory: 0,
      mcq: 1,
      findingOutput: 0,
      trueOrFalse: 0,
      easy: 1,
      hard: 0,
      happyActive: 0,
      happyInactive: 0,
      unhappyActive: 0,
      unhappyInactive: 0,
      mentalEffort: 0,
      valid: 0,
    },
    surveyDone: false,
  },

  {
    index: 1,
    questionType: "mcq",
    question:
      "Which method is correct for displaying an integer in reversed order?",
    options: [
      {
        img: "/func-hard-mcq-op1.png",
        value: "func-hard-mcq-op1",
      },
      {
        img: "/func-hard-mcq-op2.png",
        value: "func-hard-mcq-op2",
      },
      {
        img: "/func-hard-mcq-op3.png",
        value: "func-hard-mcq-op3",
      },
      {
        img: "/func-hard-mcq-op4.png",
        value: "func-hard-mcq-op4",
      },
    ],
    givenAns: null,
    correctAnswer: "func-hard-mcq-op3",
    dictionary: {
      function: 1,
      loops: 0,
      condition: 0,
      theory: 0,
      mcq: 1,
      findingOutput: 0,
      trueOrFalse: 0,
      easy: 0,
      hard: 1,
      happyActive: 0,
      happyInactive: 0,
      unhappyActive: 0,
      unhappyInactive: 0,
      mentalEffort: 0,
      valid: 0,
    },
    surveyDone: false,
  },

  {
    index: 2,
    questionType: "output",
    question: "What is the output of the method MAX?",
    img: "/func-easy-output.png",
    givenAns: null,
    correctAnswer: "10",
    dictionary: {
      function: 1,
      loops: 0,
      condition: 0,
      theory: 0,
      mcq: 0,
      findingOutput: 1,
      trueOrFalse: 0,
      easy: 1,
      hard: 0,
      happyActive: 0,
      happyInactive: 0,
      unhappyActive: 0,
      unhappyInactive: 0,
      mentalEffort: 0,
      valid: 0,
    },
    surveyDone: false,
  },

  {
    index: 3,
    questionType: "output",
    question: "Replace the blank with suitable return type",
    img: "/func-hard-output.png",
    givenAns: null,
    correctAnswer: "char",
    dictionary: {
      function: 1,
      loops: 0,
      condition: 0,
      theory: 0,
      mcq: 0,
      findingOutput: 1,
      trueOrFalse: 0,
      easy: 0,
      hard: 1,
      happyActive: 0,
      happyInactive: 0,
      unhappyActive: 0,
      unhappyInactive: 0,
      mentalEffort: 0,
      valid: 0,
    },
    surveyDone: false,
  },

  {
    index: 4,
    questionType: "trueFalse",
    question: "Each method in a class must have a unique name",
    givenAns: null,
    correctAnswer: "False",
    options: [
      {
        value: "True"
      },
      {
        value: "False"
      }
    ],
    dictionary: {
      function: 1,
      loops: 0,
      condition: 0,
      theory: 0,
      mcq: 0,
      findingOutput: 0,
      trueOrFalse: 1,
      easy: 1,
      hard: 0,
      happyActive: 0,
      happyInactive: 0,
      unhappyActive: 0,
      unhappyInactive: 0,
      mentalEffort: 0,
      valid: 0,
    },
    surveyDone: false,
  },

  {
    index: 5,
    questionType: "trueFalse",
    question: "All interface methods should be declared as public when implemented in a class",
    givenAns: null,
    correctAnswer: "True",
    options: [
      {
        value: "True"
      },
      {
        value: "False"
      }
    ],
    dictionary: {
      function: 1,
      loops: 0,
      condition: 0,
      theory: 0,
      mcq: 0,
      findingOutput: 0,
      trueOrFalse: 1,
      easy: 0,
      hard: 1,
      happyActive: 0,
      happyInactive: 0,
      unhappyActive: 0,
      unhappyInactive: 0,
      mentalEffort: 0,
      valid: 0,
    },
    surveyDone: false,
  },
];

export default function experiment() {
  const [list, setList] = useState(data);
  const [activeIndex, setActiveIndex] = useState(4);
  const [showSurvey, setShowServey] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [showError, setShowError] = useState(false);
  const [done, setDone] = useState(false);

  console.log("List -- ", list);

  const nextSlide = () => {
    const activeItem = list[activeIndex];

    if (!activeItem.givenAns) {
      setShowError(true);
    } else if (
      activeItem.dictionary.happyActive == 0 &&
      activeItem.dictionary.unhappyActive == 0 &&
      activeItem.dictionary.unhappyInactive == 0 &&
      activeItem.dictionary.happyInactive == 0
    ) {
      setShowDialog(true);
      setShowServey(true);
    } else {
      setShowServey(false);
      setActiveIndex(activeIndex + 1);
    }
  };

  const finish = () => {
    const activeItem = list[activeIndex];

    if (!activeItem.givenAns) {
      setShowError(true);
    } else if (
      activeItem.dictionary.happyActive == 0 &&
      activeItem.dictionary.unhappyActive == 0 &&
      activeItem.dictionary.unhappyInactive == 0 &&
      activeItem.dictionary.happyInactive == 0
    ) {
      setShowDialog(true);
      setShowServey(true);
    } else {
      setDone(true);
    }
  };

  const setSamValue = (valence, arousal) => {
    let newList = [...list];
    if (valence > 0 && arousal > 0) {
      newList[activeIndex].dictionary.happyActive = 1;
    } else if (valence < 0 && arousal > 0) {
      newList[activeIndex].dictionary.unhappyActive = 1;
    } else if (valence < 0 && arousal < 0) {
      newList[activeIndex].dictionary.unhappyInactive = 1;
    } else if (valence > 0 && arousal < 0) {
      newList[activeIndex].dictionary.happyInactive = 1;
    }

    setList(newList);
  };

  const setNASAValue = (value) => {
    let newList = [...list];
    newList[activeIndex].dictionary.mentalEffort = value;

    setList(newList);
  };

  const renderQuestion = (item) => {
    if (item.questionType === "mcq") {
      return (
        <FormControl component="fieldset">
          <RadioGroup
            required={true}
            value={list[activeIndex].givenAns}
            onChange={(event) => {
              let newList = [...list];
              newList[activeIndex].givenAns = event.target.value;
              if (event.target.value === item.correctAnswer) {
                newList[activeIndex].dictionary.valid = 1;
              }

              setList(newList);
            }}
          >
            {item.options.map((option, index) => {
              return (
                <div key={index} style={{ display: "flex", marginTop: 25 }}>
                  <FormControlLabel value={option.value} control={<Radio />} />
                  <img
                    src={option.img}
                    style={{
                      // height: option.size ? option.size.height : "100%",
                      width: "100%",
                      borderRadius: 8,
                    }}
                  />
                </div>
              );
            })}
          </RadioGroup>
        </FormControl>
      );
    }

    if(item.questionType === "trueFalse") {
      return (
        <FormControl component="fieldset">
          <RadioGroup
            value={list[activeIndex].givenAns}
            onChange={(event) => {
              let newList = [...list];
              newList[activeIndex].givenAns = event.target.value;
              if (event.target.value === item.correctAnswer) {
                newList[activeIndex].dictionary.valid = 1;
              }

              setList(newList);
            }}
          >
            {item.options.map((option, index) => {
              return (
                <div key={index} style={{ display: "flex", marginTop: 0 }}>
                  <FormControlLabel value={option.value} label={option.value} control={<Radio />} />
                </div>
              );
            })}
          </RadioGroup>
        </FormControl>
      );
    }

    if (item.questionType === "output") {
      return (
        <div>
          <Grid xs={12} item>
            <TextField
              style={{ width: "100%", marginTop: 20, marginBottom: 20 }}
              placeholder="Write your output in one word here"
              variant="outlined"
              onChange={(event) => {
                const value = event.target.value;
                let newList = [...list];
                newList[activeIndex].givenAns = value;

                if (value.toLowerCase() == item.correctAnswer) {
                  newList[activeIndex].dictionary.valid = 1;
                  setList(newList);
                }
              }}
            />
          </Grid>

          <img src={item.img} />
        </div>
      );
    }
  };

  if (done) {
    return <div>You are done!</div>;
  }

  return (
    <div className={cs.container}>
      <div className={cs.main}>
        <h3 className={cs.title}>SECTION 3 - FINAL ROUND</h3>
      </div>

      <Grid container justify="center">
        <Grid container item xs={12}>
          <Card
            className={cs.card}
            style={{
              borderRadius: 16,
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
            elevation={2}
          >
            <CardContent>
              {!showSurvey ? (
                <>
                  <Typography>
                    <b>Question: </b> {list[activeIndex].question}
                  </Typography>
                  <div style={{ marginTop: 20 }}>
                    {renderQuestion(list[activeIndex])}
                  </div>
                </>
              ) : (
                <>
                  <SAM setValue={setSamValue} />
                  <NASA setValue={setNASAValue} />
                </>
              )}

              <Grid
                item
                style={{
                  margin: 20,
                  flex: 1,
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: 40,
                }}
              >
                <div />
                <Button
                  onClick={activeIndex === data.length - 1 ? finish : nextSlide}
                  variant="contained"
                  color="primary"
                  size="large"
                  style={{ width: "100%", height: 50 }}
                >
                  NEXT
                </Button>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={showError}
        autoHideDuration={1500}
        onClose={() => setShowError(false)}
        message="Please choose an answer!"
      />

      <Dialog
        open={showDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setShowDialog(false)}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">Survey Time!</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Please fill up the following survey questions before proceeding
            next:
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowDialog(false)} color="primary">
            OKAY
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
