import React, { useRef, useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import {
  Button,
  Card,
  Typography,
  CardContent,
  CardActions,
  Modal,
} from "@material-ui/core";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import VerticalLinearStepper from "../src/components/steppers";
import Router from "next/router";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: 16,
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Home() {
  const carouselRef = useRef();
  const [index, setIndex] = useState(0);
  const [finalStep, setFinalStep] = useState(false);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  console.log("finalSteeps ", finalStep);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const changeIndex = (idx) => {
    setIndex(idx);
  };

  const completeSteps = () => {
    setFinalStep(true);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org"> the fun experiment!</a>
        </h1>

        <p className={styles.description}>
          Get started by reading out{" "}
          <code className={styles.code}>this short guidelines ;)</code>
        </p>
      </main>

      <Carousel value={index} onChange={changeIndex} ref={carouselRef} arrows>
        <div style={{ flex: 0.6 }}>
          <Card
            className={styles.card}
            elevation={5}
            style={{ borderRadius: 16 }}
          >
            <CardContent>
              <Typography
                style={{ fontWeight: "bold", textAlign: "center" }}
                variant="h2"
              >
                A little bit about myself
              </Typography>

              <Typography
                color="textSecondary"
                style={{ marginTop: 20, fontSize: 22 }}
              >
                Hi! My name is Saad Bin Bashar, born in Bangladesh and currently
                living & working in this beautiful Malaysia. I am currently
                studying in Masters of Computer Science (Applied Computing).
              </Typography>
            </CardContent>

            <CardActions>
              <Button
                onClick={() => {
                  setIndex(index + 1);
                }}
                variant="contained"
                size="large"
                color="primary"
              >
                NEXT
              </Button>
            </CardActions>
          </Card>
        </div>

        <div style={{ flex: 0.6 }}>
          <Card
            className={styles.card}
            elevation={5}
            style={{ borderRadius: 16 }}
          >
            <CardContent>
              <Typography
                style={{ fontWeight: "bold", textAlign: "center" }}
                variant="h2"
              >
                The purpose of this experiment
              </Typography>

              <ul>
                <li>
                  <Typography
                    color="textSecondary"
                    style={{ marginTop: 20, fontSize: 22 }}
                  >
                    To collect data in order to identify programmers' specific
                    emotions and mood.
                  </Typography>
                </li>

                <li>
                  <Typography
                    color="textSecondary"
                    style={{ marginTop: 20, fontSize: 22 }}
                  >
                    Your perfomance in programming depends on your emotion and
                    mood on certain parameters. We are here to help identifying
                    your feelings related to programming! &#128524;
                  </Typography>
                </li>
              </ul>
            </CardContent>

            <CardActions>
              <Button
                onClick={() => {
                  setIndex(index + 1);
                }}
                variant="contained"
                size="large"
                color="primary"
              >
                NEXT
              </Button>
            </CardActions>
          </Card>
        </div>

        <div style={{ flex: 0.6 }}>
          <Card
            className={styles.card}
            elevation={5}
            style={{ borderRadius: 16 }}
          >
            <CardContent>
              <Typography
                style={{ fontWeight: "bold", textAlign: "center" }}
                variant="h2"
              >
                Step by step guidelines
              </Typography>
              <VerticalLinearStepper completeSteps={completeSteps} />
            </CardContent>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                onClick={() => {
                  if (!finalStep) return handleOpen();
                  return Router.push("./personaldetails");
                }}
                variant="contained"
                size="large"
                color="primary"
              >
                I AM READY TO START!
              </Button>
            </div>
          </Card>
        </div>
      </Carousel>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h1 id="transition-modal-title">Don't cheat!</h1>
            <p id="transition-modal-description">
              Read the step by step guidelines first! It will make your life
              easier.
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
