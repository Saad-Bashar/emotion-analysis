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
} from "@material-ui/core";
import cs from "../styles/Home.module.css";
import SAM from "../src/components/sam";
import NASA from "../src/components/nasa";

const data = [
  {
    index: 0,
    instruction: "Watch this video, after finishing continue next.",
    extraInfo: "We will first practice with videos",
    type: "video",
    video: "/happy.mp4",
  },

  {
    index: 1,
    instruction:
      "Please choose the options that best matches after watching the video",
    type: "survey",
    for: "happyvideo",
  },

  {
    index: 2,
    instruction: "Watch this video, after finishing continue next.",
    type: "video",
    video: "/afraid.mp4",
  },

  {
    index: 3,
    instruction:
      "Please choose the options that best matches after watching the video",
    type: "survey",
    for: "afraidvideo",
  },

  {
    index: 4,
    title: "We are done with video demo",
    subtitle: "We are almost there for the real exercise",
    instruction:
      "We are done practicing with videos, We are almost ready for the final round. \n Before that we will practice some real questions.",
  },

  {
    index: 5,
    title:
      "Carefully read the following code sample and choose the right answer.",
    type: "question",
    question:
      "Which one is the correct statement to compute the area of a circle?",
    questionType: "mcq",
    img: '/pq1.png',
    options: [
      {
        label: "radius / radius * pi",
        value: "ans1",
        ans: false
      },
      {
        label: "radius * radius * pi",
        value: "ans2",
        ans: true
      },
      {
        label: "radius * radius * pi * pi",
        value: "ans3",
        ans: false
      },
    ],
  },

  {
    index: 6,
    type: "question",
    questionType: 'fib',
    img: '/pq2.png',
    title: "Read the code sample below carefully",
    question: "What will be the output of line 6?"
  },

  {
    index: 7,
    title: "That's it!",
    subtitle: "Click finish to start the real experiment",
    instruction:
      "That's it. Click finish to get started with the real experiment :)",
  },
];

export default function practice() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [pq1, setPq1] = useState(null)
  const [pq2, setPq2] = useState(null)

  const renderContent = (item) => {
    if (item.type === "video") {
      return (
        <Grid item>
          <video style={{ width: "100%", borderRadius: 16 }} controls>
            <source src={item.video} type="video/mp4" />
          </video>
        </Grid>
      );
    }

    if (item.type === "survey") {
      return (
        <Grid item>
          <SAM />
          <NASA />
        </Grid>
      );
    }

    if (item.type === "question") {
      return (
        <Grid item>
          <Typography style={{ paddingBottom: 10 }}>{item.title}</Typography>
          <img
            src={item.img}
            style={{ height: "100%", width: "100%", marginBottom: 20 }}
          />

          {item.questionType === "mcq" && (
            <FormControl component="fieldset">
              <FormLabel component="legend">{item.question}</FormLabel>
              <RadioGroup
                value={pq1}
                name="pq1"
                onChange={(event) => {
                  setPq1(event.target.value);
                }}
              >
                {item.options.map((value, index) => {
                  return (
                    <FormControlLabel
                      value={value.value}
                      control={<Radio />}
                      label={value.label}
                    />
                  );
                })}
              </RadioGroup>
            </FormControl>
          )}

          {item.questionType === "fib" && (
            <Grid item>
              <FormLabel component="legend">{item.question}</FormLabel>
              <TextField onChange={(event) => setPq2(event.target.value) }  />
            </Grid>
          )}
        </Grid>
      );
    }
  };

  const nextSlide = () => {
    setActiveIndex(activeIndex + 1);
  };

  const prevSlide = () => {
    setActiveIndex(activeIndex - 1);
  };

  const finish = () => {
    alert("finish");
  };

  return (
    <div className={cs.container}>
      <div className={cs.main}>
        <h3 className={cs.title}>SECTION 2 - PRACTICE ROUND</h3>

        <p className={cs.description}>
          Before we go to the real experiment,
          <code className={cs.code}> Let us practice a bit!</code>
        </p>
      </div>

      <Grid container xs={12} justify="center">
        <Grid container item xs={6}>
          <Card
            className={[cs.card]}
            style={{ borderRadius: 16, flex: 1 }}
            elevation={5}
          >
            <CardContent style={{ alignSelf: "center" }}>
              <Typography
                style={{ marginBottom: 5 }}
                variant="h6"
              >
                {data[activeIndex].instruction}
              </Typography>
              {data[activeIndex].extraInfo ? (
                <Typography variant="overline" style={{ marginBottom: 10 }}>
                  {data[activeIndex].extraInfo}
                </Typography>
              ) : null}
              {renderContent(data[activeIndex])}
            </CardContent>

            <Grid
              item
              style={{
                margin: 20,
                flex: 1,
                justifyContent: "space-between",
                display: "flex",
              }}
            >
              <Button
                onClick={prevSlide}
                variant="contained"
                color="primary"
                size="large"
                disabled={activeIndex === 0}
              >
                PREV
              </Button>
              <Button
                onClick={activeIndex === data.length - 1 ? finish : nextSlide}
                variant="contained"
                color="primary"
                size="large"
              >
                {activeIndex === data.length - 1 ? "FINISH" : "NEXT"}
              </Button>
            </Grid>
          </Card>
        </Grid>
      </Grid>
      <script src="https://gist.github.com/anonymous/34791909fcab19a6b1eee7f1a9c064f7.js"></script>
    </div>
  );
}
