"use client";

import React from "react";
import {
  Button,
  TextField,
  Typography,
} from "../../../node_modules/@mui/material/index";
import CreateMCQ from "./createMCQ";

const CreateQuestion = () => {
  return (
    <div className="flex flex-col">
      <div className=" px-10 w-full flex justify-between">
        <Typography>Create Question</Typography>
        <div>
          <Button>MCQ</Button>
          <Button>CQ</Button>
        </div>
      </div>
      <div className="w-full flex flex-row ">
        <div className=" w-1/2 bg-blue-500"> hello</div>
        <CreateMCQ />
      </div>
    </div>
  );
};

export default CreateQuestion;
