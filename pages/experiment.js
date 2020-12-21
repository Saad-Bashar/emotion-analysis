import React, { useState } from "react";
import {
  Button,
  Card,
  Typography,
  CardContent,
  TextField,
  LinearProgress,
  FormControl,
  FormControlLabel,
  Grid,
  RadioGroup,
  Radio,
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
import QuestionRating from "../src/components/questionRating";
import fire from "../config/firebase";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const data = [
  {
    index: 0,
    questionType: "mcq",
    question: "Which one is the correct function syntax in java?",
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
      label: "easy-function-mcq",
    },
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
        size: { height: 300 },
      },
      {
        img: "/func-hard-mcq-op2.png",
        value: "func-hard-mcq-op2",
        size: { height: 300 },
      },
      {
        img: "/func-hard-mcq-op3.png",
        value: "func-hard-mcq-op3",
        size: { height: 300 },
      },
      {
        img: "/func-hard-mcq-op4.png",
        value: "func-hard-mcq-op4",
        size: { height: 300 },
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
      label: "hard-function-mcq",
    },
  },

  {
    index: 2,
    questionType: "output",
    question: "What is the output of the method getValue?",
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
      label: "easy-function-finding-output",
    },
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
      label: "hard-function-finding-output",
    },
  },

  {
    index: 4,
    questionType: "trueFalse",
    question: "Each method in a class must have a unique name",
    givenAns: null,
    correctAnswer: "False",
    options: [
      {
        value: "True",
      },
      {
        value: "False",
      },
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
      label: "easy-function-true-false",
    },
  },

  {
    index: 5,
    questionType: "trueFalse",
    question:
      "All interface methods should be declared as public when implemented in a class",
    givenAns: null,
    correctAnswer: "True",
    options: [
      {
        value: "True",
      },
      {
        value: "False",
      },
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
      label: "hard-function-true-false",
    },
  },

  {
    index: 6,
    questionType: "mcq",
    question:
      "A CONTINUE statement inside a loop causes the program execution ________ the loop",
    givenAns: null,
    correctAnswer: "B",
    options: [
      {
        label: "Skip",
        value: "A",
      },
      {
        label:
          "Skip present iteration and continue with the next iteration of the loop",
        value: "B",
      },
      {
        label: "Exit",
        value: "C",
      },
      {
        label: "None",
        value: "D",
      },
    ],
    dictionary: {
      function: 0,
      loops: 1,
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
      label: "easy-loops-mcq",
    },
  },

  {
    index: 7,
    questionType: "mcq",
    question:
      "What is the value of 'age' in the below Java program with a D0-WHILE loop?",
    questionImage: "/loops-mcq-hard.png",
    givenAns: null,
    correctAnswer: "B",
    options: [
      {
        label: "20",
        value: "A",
      },
      {
        label: "21",
        value: "B",
      },
      {
        label: "Compilation Error",
        value: "C",
      },
      {
        label: "None",
        value: "D",
      },
    ],
    dictionary: {
      function: 0,
      loops: 1,
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
      label: "hard-loops-mcq",
    },
  },

  {
    index: 8,
    questionType: "output",
    question: "What will be the output of the following program?",
    img: "/loops-output-easy.png",
    givenAns: null,
    correctAnswer: "6",
    dictionary: {
      function: 0,
      loops: 1,
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
      label: "easy-loops-finding-output",
    },
  },

  {
    index: 9,
    questionType: "output",
    question: "What will be the output of the following program?",
    hint:
      "Your answer should be in this format: 2712297 where i = 27, j = 12 and k = 297",
    img: "/loops-hard-output.png",
    givenAns: null,
    correctAnswer: "1616297",
    dictionary: {
      function: 0,
      loops: 1,
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
      label: "hard-loops-finding-output",
    },
  },

  {
    index: 10,
    questionType: "trueFalse",
    question:
      "A Loop is a block of code that is executed repeatedly as long as a condition is satisfied.",
    givenAns: null,
    correctAnswer: "True",
    options: [
      {
        value: "True",
      },
      {
        value: "False",
      },
    ],
    dictionary: {
      function: 0,
      loops: 1,
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
      label: "easy-loops-true-false",
    },
  },

  {
    index: 11,
    questionType: "trueFalse",
    question:
      "A WHILE loop in Java executes the statements at least once even the condition is not satisfied.",
    givenAns: null,
    correctAnswer: "False",
    options: [
      {
        value: "True",
      },
      {
        value: "False",
      },
    ],
    dictionary: {
      function: 0,
      loops: 1,
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
      label: "hard-loops-true-false",
    },
  },

  {
    index: 12,
    questionType: "mcq",
    question:
      "An IF or ELSE IF statement accepts ________ as input before branching.",
    givenAns: null,
    correctAnswer: "A",
    options: [
      {
        label: "boolean",
        value: "A",
      },
      {
        label: "int",
        value: "B",
      },
      {
        label: "float",
        value: "C",
      },
      {
        label: "char",
        value: "D",
      },
    ],
    dictionary: {
      function: 0,
      loops: 0,
      condition: 1,
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
      label: "easy-condition-mcq",
    },
  },

  {
    index: 13,
    questionType: "mcq",
    question:
      "The condition of an IF statement evaluates to boolean only if the expression contains?",
    givenAns: null,
    correctAnswer: "D",
    options: [
      {
        label: "logical operators",
        value: "A",
      },
      {
        label: "relational operators",
        value: "B",
      },
      {
        label: "boolean operands",
        value: "C",
      },
      {
        label: "All",
        value: "D",
      },
    ],
    dictionary: {
      function: 0,
      loops: 0,
      condition: 1,
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
      label: "hard-condition-mcq",
    },
  },

  {
    index: 14,
    questionType: "output",
    question: "What will be the output of the following program?",
    img: "/condition-easy-output.png",
    givenAns: null,
    correctAnswer: "Great!",
    dictionary: {
      function: 0,
      loops: 0,
      condition: 1,
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
      label: "easy-condition-finding-output",
    },
  },

  {
    index: 15,
    questionType: "output",
    question: "What will be the output of the following program?",
    img: "/condition-hard-output.png",
    givenAns: null,
    correctAnswer: "If executed",
    dictionary: {
      function: 0,
      loops: 0,
      condition: 1,
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
      label: "hard-condition-finding-output",
    },
  },

  {
    index: 16,
    questionType: "trueFalse",
    question: "An IF statement code must be defined in between two braces.",
    givenAns: null,
    correctAnswer: "False",
    options: [
      {
        value: "True",
      },
      {
        value: "False",
      },
    ],
    dictionary: {
      function: 0,
      loops: 0,
      condition: 1,
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
      label: "easy-condition-true-false",
    },
  },

  {
    index: 17,
    questionType: "trueFalse",
    question:
      "An IF-Else statement is better than a switch statement when checking for ranges",
    givenAns: null,
    correctAnswer: "True",
    options: [
      {
        value: "True",
      },
      {
        value: "False",
      },
    ],
    dictionary: {
      function: 0,
      loops: 0,
      condition: 1,
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
      label: "hard-condition-true-false",
    },
  },
];

export default function experiment() {
  const [list, setList] = useState(data.sort(() => Math.random() - 0.5));
  const [activeIndex, setActiveIndex] = useState(0);
  const [showSurvey, setShowServey] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [showError, setShowError] = useState(false);
  const [done, setDone] = useState(false);

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
      const uuid = localStorage.getItem("uuid");

      let values = list.reduce(function (result, item, index, array) {
        result[index] = item.dictionary;
        return result;
      }, {});

      fire
        .firestore()
        .collection("users")
        .doc(uuid)
        .update({ dictionary: values })
        .then((result) => {
          setDone(true);
        });
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

  const setQuestionRatingValue = (value) => {
    let newList = [...list];
    newList[activeIndex].dictionary.questionRating = parseInt(value);

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
              if (
                event.target.value.toLowerCase().trim() ===
                item.correctAnswer.toLowerCase().trim()
              ) {
                newList[activeIndex].dictionary.valid = 1;
              }

              setList(newList);
            }}
          >
            {item.options.map((option, index) => {
              return (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    marginTop: 25,
                    alignItems: "center",
                  }}
                >
                  <FormControlLabel value={option.value} control={<Radio />} />
                  {option.img ? (
                    <img
                      src={option.img}
                      style={{
                        height: option.size ? option.size.height : "100%",
                        width: "100%",
                        borderRadius: 8,
                      }}
                    />
                  ) : (
                    <Typography>{option.label}</Typography>
                  )}
                </div>
              );
            })}
          </RadioGroup>
        </FormControl>
      );
    }

    if (item.questionType === "trueFalse") {
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
                  <FormControlLabel
                    value={option.value}
                    label={option.value}
                    control={<Radio />}
                  />
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
              placeholder={"Write your output in one word here"}
              variant="outlined"
              onChange={(event) => {
                const value = event.target.value;
                let newList = [...list];
                newList[activeIndex].givenAns = value;

                if (
                  value.toLowerCase().trim() ===
                  item.correctAnswer.toLowerCase().trim()
                ) {
                  newList[activeIndex].dictionary.valid = 1;
                  setList(newList);
                }
              }}
            />
          </Grid>

          <img style={{ width: "100%", borderRadius: 16 }} src={item.img} />
        </div>
      );
    }
  };

  if (done) {
    return (
      <Grid container justify="center">
        <Grid item xs={12} align="center" justify="center">
          <img src={"/complete.png"} />
        </Grid>
        <Grid item xs={12} align="center" justify="center">
          <Typography variant="h4" fontWeight="bold">
            Congratulations and Thank You!
          </Typography>
        </Grid>
      </Grid>
    );
  }

  const activeItem = list[activeIndex];
  return (
    <div className={cs.container}>
      <div className={cs.main}>
        <h3 className={cs.title}>SECTION 3 - FINAL ROUND</h3>
      </div>

      <LinearProgress
        variant="determinate"
        value={Math.round((activeIndex / (data.length - 1)) * 100)}
      />

      <Grid container justify="center">
        <Grid container item xs={10}>
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
                    <b>Question: </b> {activeItem.question}
                  </Typography>
                  {activeItem.hint && (
                    <Typography>{activeItem.hint}</Typography>
                  )}
                  {activeItem.questionImage && (
                    <img
                      style={{
                        // height: option.size ? option.size.height : "100%",
                        width: "100%",
                        borderRadius: 8,
                      }}
                      src={activeItem.questionImage}
                    />
                  )}
                  <div style={{ marginTop: 20 }}>
                    {renderQuestion(activeItem)}
                  </div>
                </>
              ) : (
                <>
                  <SAM setValue={setSamValue} />
                  <NASA setValue={setNASAValue} />
                  <QuestionRating setValue={setQuestionRatingValue} />
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
