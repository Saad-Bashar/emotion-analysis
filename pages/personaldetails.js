import React, { useRef, useState } from "react";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import Divider from "@material-ui/core/Divider";
import cs from "../styles/Home.module.css";
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
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import * as Yup from "yup";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  wrapper: {
    marginTop: 10,
  },
  studyWrapper: {
    marginLeft: 30,
  },
}));

const validationSchema = Yup.object().shape({
  gender: Yup.string().required("Gender is required"),
  nationality: Yup.string().required("Nationality is required"),
  age: Yup.string().required("Age is required"),
  major: Yup.string().required("Major is required"),
  studyYear: Yup.string().required("Years of study is required"),
  experience: Yup.string().required("It is a required field"),
  languagesCount: Yup.number().required("It is a required field"),
  emotion: Yup.string().required("Your emotion is required"),
});

export default function personaldetails() {
  const classes = useStyles();

  return (
    <div className={cs.container}>
      <div className={cs.main}>
        <h1 className={cs.title}>Introduce yourself please</h1>

        <p className={cs.description}>
          Forms are a bit painful,
          <code className={cs.code}>
            but it will be worth our time at the end!
          </code>
        </p>
      </div>
      <Grid xs={12} justify="center" container>
        <Grid xs={8}>
          <Card className={cs.card} elevation={5} style={{ borderRadius: 16 }}>
            <CardContent>
              <Typography
                style={{ fontWeight: "bold", marginBottom: 10 }}
                variant="h5"
              >
                PERSONAL INFO
              </Typography>

              <Formik
                initialValues={{
                  gender: "",
                  age: "",
                  major: "",
                  studyYear: "",
                  experience: "",
                  nationality: "",
                  syntaxProblem: false,
                  logicProblem: false,
                  materialProblem: false,
                  skillProblem: false,
                  motivationProblem: false,
                  emotion: "",
                  languagesCount: 1,
                }}
                validationSchema={validationSchema}
                validateOnChange={false}
                validateOnBlur={false}
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    setSubmitting(false);
                    alert(JSON.stringify(values, null, 2));
                  }, 500);
                }}
              >
                {({
                  submitForm,
                  isSubmitting,
                  values,
                  setFieldValue,
                  errors,
                  touched,
                  isValid,
                }) => (
                  <Form>
                    {isSubmitting && <LinearProgress />}
                    <div style={{ flexGrow: 1 }}>
                      <Grid container spacing={1}>
                        <Grid
                          container
                          item
                          xs={12}
                          className={classes.wrapper}
                        >
                          <div>
                            <FormLabel component="legend">Gender</FormLabel>
                            <RadioGroup
                              style={{ flexDirection: "row" }}
                              value={values["gender"]}
                              onChange={(event) =>
                                setFieldValue("gender", event.target.value)
                              }
                            >
                              <FormControlLabel
                                value="female"
                                control={<Radio />}
                                label="Female"
                              />
                              <FormControlLabel
                                value="male"
                                control={<Radio />}
                                label="Male"
                              />
                            </RadioGroup>

                            {errors.gender ? (
                              <div style={{ color: "red" }}>
                                {errors.gender}
                              </div>
                            ) : null}
                          </div>
                        </Grid>

                        <Grid
                          container
                          item
                          xs={12}
                          className={classes.wrapper}
                        >
                          <div>
                            <FormLabel component="legend">
                              Nationality
                            </FormLabel>
                            <RadioGroup
                              style={{ flexDirection: "row" }}
                              value={values["nationality"]}
                              onChange={(event) =>
                                setFieldValue("nationality", event.target.value)
                              }
                            >
                              <FormControlLabel
                                value="malaysian"
                                control={<Radio />}
                                label="Malaysian"
                              />
                              <FormControlLabel
                                value="international"
                                control={<Radio />}
                                label="International"
                              />
                            </RadioGroup>

                            {errors.nationality ? (
                              <div style={{ color: "red" }}>
                                {errors.nationality}
                              </div>
                            ) : null}
                          </div>
                        </Grid>

                        <Grid
                          container
                          item
                          xs={12}
                          className={classes.wrapper}
                        >
                          <Field
                            variant="outlined"
                            component={TextField}
                            name="age"
                            label="Age"
                          />
                        </Grid>
                      </Grid>
                    </div>
                    <Divider
                      style={{
                        marginTop: 30,
                        marginBottom: 30,
                        color: "#ddd",
                      }}
                    />
                    <Grid container spacing={1}>
                      <Grid item>
                        <Typography
                          style={{ fontWeight: "bold", marginBottom: 10 }}
                          variant="h5"
                        >
                          STUDY INFO
                        </Typography>

                        <div className={{ flexDirection: "row" }}>
                          <FormControl>
                            <InputLabel id="demo-simple-select-label">
                              Major
                            </InputLabel>
                            <Select
                              style={{ minWidth: 200 }}
                              value={values["major"]}
                              onChange={(event) =>
                                setFieldValue("major", event.target.value)
                              }
                              defaultValue="CS"
                            >
                              <MenuItem value={"it"}>
                                Computer Science/IT
                              </MenuItem>
                              <MenuItem value={"ai"}>
                                Artificial Intelligence
                              </MenuItem>
                              <MenuItem value={"se"}>
                                Software Engineering
                              </MenuItem>
                              <MenuItem value={"csn"}>
                                Computer System and Network
                              </MenuItem>
                              <MenuItem value={"multimedia"}>
                                Multimedia
                              </MenuItem>
                              <MenuItem value={"is"}>
                                Information System
                              </MenuItem>
                              <MenuItem value={"ds"}>Data Science</MenuItem>
                            </Select>
                            {errors.major ? (
                              <div style={{ color: "red" }}>{errors.major}</div>
                            ) : null}
                          </FormControl>

                          <FormControl className={classes.studyWrapper}>
                            <InputLabel>Years of study</InputLabel>
                            <Select
                              style={{ minWidth: 200 }}
                              value={values["studyYear"]}
                              onChange={(event) =>
                                setFieldValue("studyYear", event.target.value)
                              }
                              defaultValue="1"
                            >
                              <MenuItem value={1}>1</MenuItem>
                              <MenuItem value={2}>2</MenuItem>
                              <MenuItem value={3}>3</MenuItem>
                              <MenuItem value={4}>4</MenuItem>
                            </Select>
                          </FormControl>
                        </div>
                      </Grid>
                    </Grid>

                    <Divider
                      style={{
                        marginTop: 30,
                        marginBottom: 30,
                        color: "#ddd",
                      }}
                    />

                    <Grid container spacing={1}>
                      <Grid xs={12} item>
                        <Typography
                          style={{ fontWeight: "bold", marginBottom: 10 }}
                          variant="h5"
                        >
                          PROGRAMMING KNOWLEDGE
                        </Typography>

                        <Grid style={{ marginTop: 10 }} item xs={12}>
                          <InputLabel>
                            How many programming languages have you learned so
                            far?
                          </InputLabel>
                          <Select
                            value={values["languagesCount"]}
                            onChange={(event) =>
                              setFieldValue(
                                "languagesCount",
                                event.target.value
                              )
                            }
                            defaultValue={1}
                          >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>More than 3</MenuItem>
                          </Select>
                          {errors.languagesCount ? (
                            <div style={{ color: "red" }}>
                              {errors.languagesCount}
                            </div>
                          ) : null}
                        </Grid>

                        <FormLabel style={{ marginTop: 20 }} component="legend">
                          How would you rate yourself as a programmer?
                        </FormLabel>
                        <RadioGroup
                          style={{ flexDirection: "row" }}
                          value={values["experience"]}
                          onChange={(event) =>
                            setFieldValue("experience", event.target.value)
                          }
                        >
                          <FormControlLabel
                            value="novice"
                            control={<Radio />}
                            label="Novice"
                          />
                          <FormControlLabel
                            value="intermediate"
                            control={<Radio />}
                            label="Intermediate"
                          />
                          <FormControlLabel
                            value="expert"
                            control={<Radio />}
                            label="Expert"
                          />
                        </RadioGroup>
                        {errors.experience ? (
                          <div style={{ color: "red" }}>
                            {errors.experience}
                          </div>
                        ) : null}
                      </Grid>

                      <Grid item xs={12} style={{ marginTop: 20 }}>
                        <InputLabel>
                          What are the problems you face during programming?
                        </InputLabel>

                        <FormGroup>
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={values["syntaxProblem"]}
                                onChange={(event) => {
                                  setFieldValue(
                                    "syntaxProblem",
                                    event.target.checked
                                  );
                                }}
                                name="syntaxProblem"
                                placeholder="It is too difficult to remember the syntax"
                              />
                            }
                            label="It is too difficult to remember the syntax"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={values["logicProblem"]}
                                onChange={(event) => {
                                  setFieldValue(
                                    "logicProblem",
                                    event.target.checked
                                  );
                                }}
                                name="logicProblem"
                              />
                            }
                            label="I struggle a lot with logic while solving problems"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={values["materialProblem"]}
                                onChange={(event) => {
                                  setFieldValue(
                                    "materialProblem",
                                    event.target.checked
                                  );
                                }}
                                name="materialProblem"
                              />
                            }
                            label="I do not find the content of the course easy and suitable"
                          />

                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={values["skillProblem"]}
                                onChange={(event) => {
                                  setFieldValue(
                                    "skillProblem",
                                    event.target.checked
                                  );
                                }}
                                name="skillProblem"
                              />
                            }
                            label="It requires certain skills that I do not have."
                          />

                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={values["motivationProblem"]}
                                onChange={(event) => {
                                  setFieldValue(
                                    "motivationProblem",
                                    event.target.checked
                                  );
                                }}
                                name="motivationProblem"
                              />
                            }
                            label="It is not enough interesting, exciting, or provoking for me.	"
                          />
                        </FormGroup>
                      </Grid>

                      <Grid style={{ marginTop: 20 }} item xs={12}>
                        <div>
                          <FormLabel component="legend">
                            What do you feel while you are programming in
                            general?
                          </FormLabel>
                          <RadioGroup
                            style={{ flexDirection: "row" }}
                            value={values["emotion"]}
                            onChange={(event) =>
                              setFieldValue("emotion", event.target.value)
                            }
                          >
                            <FormControlLabel
                              value="bored"
                              control={<Radio />}
                              label="Bored &#128564;"
                            />
                            <FormControlLabel
                              value="happy"
                              control={<Radio />}
                              label="Happy &#128519;"
                            />
                            <FormControlLabel
                              value="frustrated"
                              control={<Radio />}
                              label="Frustrated &#128534;"
                            />
                            <FormControlLabel
                              value="relaxed"
                              control={<Radio />}
                              label="Relaxed &#128524;"
                            />
                            <FormControlLabel
                              value="idle"
                              control={<Radio />}
                              label="Idle &#128528;"
                            />
                            <FormControlLabel
                              value="excited"
                              control={<Radio />}
                              label="Excited &#129321;"
                            />
                            <FormControlLabel
                              value="stress"
                              control={<Radio />}
                              label="Stress &#128531;"
                            />
                            <FormControlLabel
                              value="focused"
                              control={<Radio />}
                              label="Focused &#129299;"
                            />
                          </RadioGroup>
                          {errors.emotion ? (
                            <div style={{ color: "red" }}>{errors.emotion}</div>
                          ) : null}
                        </div>
                      </Grid>
                    </Grid>

                    <Grid style={{ marginTop: 40 }}>
                      <Button
                        onClick={submitForm}
                        variant="contained"
                        color="primary"
                        size="large"
                      >
                        SUBMIT
                      </Button>
                    </Grid>
                  </Form>
                )}
              </Formik>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
