"use client";

import React from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "../../../node_modules/@mui/material/index";

const CreateMCQ = () => {
  return (
    <div className=" w-1/2 mt-40 p-4 border-2 border-red-700 flex flex-col justify-center">
      <div className="flex flex-row gap-2 ">
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        {/* <Checkbox />{" "} */}
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <Button sx={{ mt: 1, mr: 1 }} type="button" variant="outlined">
          Add
        </Button>
      </div>
      <Button sx={{ mt: 1, mr: 1, width: 30 }} type="submit" variant="outlined">
        Create
      </Button>
    </div>
  );
};

export default CreateMCQ;
