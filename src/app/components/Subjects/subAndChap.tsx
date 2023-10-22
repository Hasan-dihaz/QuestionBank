import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { Class, SUBJECT } from "../../../../demoData/demoData";

const QuestionMetaData = () => {
  return (
    <div className="w-full flex gap-3 mb-2">
      <FormControl className="w-1/2">
        <InputLabel id="demo-simple-select-label">Class</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value=""
          label="Class"
          // onChange={handleChange}
        >
          {Class.map((item: any) => (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className="w-1/2">
        <InputLabel id="demo-simple-select-label">Subject</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value=""
          label="Subject"
          // onChange={handleChange}
        >
          {SUBJECT.map((item: any) => (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default QuestionMetaData;
