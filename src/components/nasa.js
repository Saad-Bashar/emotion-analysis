import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    marginTop: 50,
  },
});

function valuetext(value) {
  return `${value}°C`;
}

export default function NASA({ setValue }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="body2">
        How much mental pressure did you feel while watching the video? (0 - No
        pressure, 100 - Extreme pressure)
      </Typography>
      <Slider
        defaultValue={0}
        valueLabelDisplay="auto"
        step={10}
        min={0}
        max={100}
        style={{ marginTop: 25 }}
        onChangeCommitted={(event, value) => {
          setValue(value);
        }}
      />
    </div>
  );
}
