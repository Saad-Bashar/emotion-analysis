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
  colors,
} from "@material-ui/core";
import cs from "../styles/Home.module.css";
import Router from "next/router";

export default function experiment() {
  return (
    <div className={cs.container}>
      <div className={cs.main}>
        <h3 className={cs.title}>SECTION 3 - FINAL ROUND INTRO</h3>
      </div>

      <Grid container justify="center">
        <Grid container item xs={6}>
          <Card
            className={cs.card}
            style={{ borderRadius: 16, flex: 1 }}
            elevation={5}
          >
            <CardContent style={{ alignSelf: "center" }}>
              <Typography style={{ fontWeight: "bold" }} variant="h6">
                Few points to be noted before you continue with the final steps
                -
              </Typography>
              <ul>
                <li style={{ paddingTop: 10 }}>
                  <Typography variant="body2">
                    Make sure you are{" "}
                    <span style={{ color: "red", fontWeight: "bold" }}>
                      uninterrupted
                    </span>{" "}
                    during the experiment
                  </Typography>
                </li>
                <li style={{ paddingTop: 10 }}>
                  <Typography variant="body2">
                    You can not{" "}
                    <span style={{ color: "red", fontWeight: "bold" }}>
                      go back to change your previous question
                    </span>
                    . so be careful!
                  </Typography>
                </li>
                <li style={{ paddingTop: 10 }}>
                  <Typography variant="body2">
                    This is a one go experiment.{" "}
                    <span style={{ color: "red", fontWeight: "bold" }}>
                      Do not leave in the middle of the test.
                    </span>
                  </Typography>
                </li>
                <li style={{ paddingTop: 10 }}>
                  <Typography variant="body2">
                    This experiment is conducted{" "}
                    <span style={{ color: "red", fontWeight: "bold" }}>
                      anonymously
                    </span>
                    , so please provide the accurate information.
                  </Typography>
                </li>
              </ul>
            </CardContent>

            <Grid
              item
              style={{
                margin: 20,
                flex: 1,
                justifyContent: "flex-end",
                display: "flex",
              }}
            >
              <Button
                onClick={() => {
                  return Router.push("./experiment");
                }}
                variant="contained"
                color="primary"
                size="large"
              >
                START
              </Button>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
