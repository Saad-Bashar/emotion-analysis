import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import {
    Typography,
    FormControlLabel,
   
  } from "@material-ui/core";

export default function questionRating({ setValue }) {
    return (
        <div style={{ marginTop: 20 }}>
            <Typography variant="body2" style={{ fontWeight: "bold" }}>
                Rate the difficulty of the question
            </Typography>
            <div>
                <RadioGroup
                    style={{ flexDirection: "row" }}
                    // value={values["gender"]}
                    onChange={(event) =>
                        setValue(event.target.value)
                    }
                >
                    <FormControlLabel
                        value={'easy'}
                        control={<Radio />}
                        label="Easy"
                    />
                    <FormControlLabel
                        value={'hard'}
                        control={<Radio />}
                        label="Hard"
                    />
                </RadioGroup>
            </div>
        </div>
    )
}
