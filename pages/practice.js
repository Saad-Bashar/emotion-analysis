import React, { useState } from "react";
import {
  Button,
  Card,
  Typography,
  CardContent,
  LinearProgress,
  FormControl,
  InputLabel,
  FormControlLabel,
  MenuItem,
  Checkbox,
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
      "We are done practicing with videos, We are almost there for the real exercise, Now we will practice exactly like real test!",
  },
];

export default function practice() {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderContent = (item) => {
    if (item.type === "video") {
      return (
        <div>
          <video style={{ width: "100%", borderRadius: 16 }} controls>
            <source src={item.video} type="video/mp4" />
          </video>
        </div>
      );
    }

    if (item.type === "survey") {
      return (
        <div>
          <SAM />
          <NASA />
        </div>
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
                style={{ fontWeight: "bold", marginBottom: 5 }}
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
