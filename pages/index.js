import React, { useRef, useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import {
  Button,
  Card,
  Typography,
  CardContent,
  CardActions,
} from "@material-ui/core";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import VerticalLinearStepper from "../src/components/steppers";

export default function Home() {
  const data = [1, 2, 3];
  const carouselRef = useRef();
  const [index, setIndex] = useState(0);

  const changeIndex = (idx) => {
    setIndex(idx);
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

              <Typography
                color="textSecondary"
                style={{ marginTop: 20, fontSize: 22 }}
              >
                <ul>
                  <li>
                    To collect data in order to identify programmers' specific
                    emotions and mood.
                  </li>
                  <li>
                    Your perfomance in programming depends on your emotion and
                    mood on certain parameters. We are here to help identifying
                    your feelings related to programming! &#128524;
                  </li>
                </ul>
              </Typography>
            </CardContent>

            <CardActions>
              <Button
                onClick={() => {
                  setIndex(1);
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
              <VerticalLinearStepper />
            </CardContent>

            {/* <CardActions> */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                onClick={() => {
                  setIndex(1);
                }}
                variant="contained"
                size="large"
                color="primary"
              >
                I AM READY TO START!
              </Button>
            </div>

            {/* </CardActions> */}
          </Card>
        </div>
      </Carousel>
    </div>
  );
}
