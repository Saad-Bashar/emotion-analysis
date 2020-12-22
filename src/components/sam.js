import React, { useState, useEffect } from "react";
import {
  FormControl,
  FormControlLabel,
  FormGroup,
  RadioGroup,
  Radio,
  Paper,
  Typography,
} from "@material-ui/core";

export default function SAM({ title, setValue }) {
  const [valence, setValence] = useState(null);
  const [arousal, setArousal] = useState(null);
 
  useEffect(() => {   
    if (valence && arousal) {

      let a = 0, v = 0;
      switch (valence) {
        case "1":
        case "2":
        case "3":
        case "4":
          v = -1;
          break;
        case "6":
        case "7":
        case "8":
        case "9":
          v = 1;
          break;
        case "5":
          v = 0;
          break;
        default:
          return;
      }

      switch (arousal) {
        case "1":
        case "2":
        case "3":
        case "4":
          a = -1;
          break;
        case "6":
        case "7":
        case "8":
        case "9":
          a = 1;
          break;
        case "5":
          a = 0;
          break;
        default:
          return;
      }
     
      setValue(v, a);
    }
  }, [valence, arousal]);

  return (
    <div>
      <Typography variant="body2" style={{ fontWeight: "bold", }}>
        How did you feel?
      </Typography>
      <Typography variant="subtitle1">
        1 (Very Unpleasant) - 9 (Very Pleasant)
      </Typography>
      <div>
        <img style={{ width: 620 }} src="/SAM.png" />
        <FormGroup style={{ alignItems: "flex-start" }}>
          <FormControl>
            <RadioGroup
              name="valence"
              value={parseInt(valence)}
              onChange={(event) => setValence(event.target.value)}
              style={{ flexDirection: "row" }}
            >
              <Paper style={{ width: 620, marginTop: 3 }}>
                <div style={{ marginLeft: 65 }}>
                  <FormControlLabel value={1} control={<Radio />} />
                  <FormControlLabel
                    style={{ marginLeft: 2 }}
                    value={2}
                    control={<Radio />}
                  />
                  <FormControlLabel
                    style={{ marginLeft: 2 }}
                    value={3}
                    control={<Radio />}
                  />
                  <FormControlLabel
                    style={{ marginLeft: 2 }}
                    value={4}
                    control={<Radio />}
                  />
                  <FormControlLabel
                    style={{ marginLeft: 2 }}
                    value={0}
                    control={<Radio />}
                  />
                  <FormControlLabel
                    style={{ marginLeft: 2 }}
                    value={6}
                    control={<Radio />}
                  />
                  <FormControlLabel
                    style={{ marginLeft: -2 }}
                    value={7}
                    control={<Radio />}
                  />
                  <FormControlLabel
                    style={{ marginLeft: 1 }}
                    value={8}
                    control={<Radio />}
                  />
                  <FormControlLabel
                    style={{ marginLeft: 2 }}
                    value={9}
                    control={<Radio />}
                  />
                </div>
              </Paper>
            </RadioGroup>
          </FormControl>
        </FormGroup>
      </div>

      <div style={{ marginTop: 30 }}>
        <div style={{ marginBottom: 20 }}>
          <Typography variant="body2" style={{ fontWeight: "bold", }}>
            How strong did you feel?
          </Typography>
          <Typography variant="subtitle1">
            1 (Very Calm) - 9 (Very Excited)
          </Typography>
        </div>
        
        <img style={{ width: 620 }} src="/SAM2.png" />
        <FormGroup style={{ alignItems: "flex-start" }}>
          <FormControl>
            <RadioGroup
              value={parseInt(arousal)}
              onChange={(event) => setArousal(event.target.value)}
              style={{ flexDirection: "row" }}
            >
              <Paper style={{ width: 620, marginTop: 3 }}>
                <div style={{ marginLeft: 65 }}>
                  <FormControlLabel value={1} control={<Radio />} />
                  <FormControlLabel
                    style={{ marginLeft: 2 }}
                    value={2}
                    control={<Radio />}
                  />
                  <FormControlLabel
                    style={{ marginLeft: 2 }}
                    value={3}
                    control={<Radio />}
                  />
                  <FormControlLabel
                    style={{ marginLeft: 2 }}
                    value={4}
                    control={<Radio />}
                  />
                  <FormControlLabel
                    style={{ marginLeft: 2 }}
                    value={5}
                    control={<Radio />}
                  />
                  <FormControlLabel
                    style={{ marginLeft: 2 }}
                    value={6}
                    control={<Radio />}
                  />
                  <FormControlLabel
                    style={{ marginLeft: -2 }}
                    value={7}
                    control={<Radio />}
                  />
                  <FormControlLabel
                    style={{ marginLeft: 1 }}
                    value={8}
                    control={<Radio />}
                  />
                  <FormControlLabel
                    style={{ marginLeft: 2 }}
                    value={9}
                    control={<Radio />}
                  />
                </div>
              </Paper>
            </RadioGroup>
          </FormControl>
        </FormGroup>
      </div>
    </div>
  );
}
