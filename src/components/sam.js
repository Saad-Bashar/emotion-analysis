import React from "react";
import {
  FormControl,
  FormControlLabel,
  FormGroup,
  RadioGroup,
  Radio,
  Paper,
} from "@material-ui/core";

export default function SAM({ title }) {
  return (
    <div>
      <div>
        <img style={{ width: 620 }} src="/SAM.png" />
        <FormGroup style={{ alignItems: "flex-start" }}>
          <FormControl>
            <RadioGroup style={{ flexDirection: "row" }}>
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

      <div style={{ marginTop: 30 }}>
        <img style={{ width: 620 }} src="/SAM2.png" />
        <FormGroup style={{ alignItems: "flex-start" }}>
          <FormControl>
            <RadioGroup style={{ flexDirection: "row" }}>
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
