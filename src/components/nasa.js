import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: "60%",
    marginTop: 50,
  },
});

function valuetext(value) {
  return `${value}°C`;
}

export default function NASA() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography style={{ fontWeight: "bold", }} variant="h6">
        How much mental pressure did you feel while watching the video? 
      </Typography>
      <Typography variant="subtitle1">
        (0 - No pressure, 100 - Extreme pressure)        
      </Typography>
      <Slider
        defaultValue={0}
        valueLabelDisplay="auto"
        step={10}
        min={0}
        max={100}
        style={{ marginTop: 25 }}
      />
    </div>
  );
}
