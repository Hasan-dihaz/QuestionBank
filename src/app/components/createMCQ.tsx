"use client";

import React, { useEffect, useState } from "react";
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
import { Controller, useForm } from "react-hook-form";

const CreateMCQ = ({ setQuestion, editData }: any) => {
  const [questionText, setQuestionText]: any = useState(null);
  const [option1, setOption1]: any = useState(null);
  const [option2, setOption2]: any = useState(null);
  const [option3, setOption3]: any = useState(null);
  const [option4, setOption4]: any = useState(null);

  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
    trigger,
  } = useForm();

  console.log("editData", editData);
  useEffect(() => {
    console.log("editIf0");
    if (editData) {
      console.log("editIf1");
      setValue("question", editData.question);
      setValue("1", editData[1]);
      setValue("2", editData[2]);
      setValue("3", editData[3]);
      setValue("4", editData[4]);
      setQuestionText(editData.question);
      setOption1(editData[1]);
      setOption2(editData[2]);
      setOption3(editData[3]);
      setOption4(editData[4]);
    }
  }, [editData, setValue]);

  console.log("questionText", questionText);

  const formSubmiteHandler = (data: any) => {
    if (typeof editData?.editItemIndex !== "undefined") {
      setQuestion((prev: any) => {
        console.log("index1", editData?.editItemIndex);

        const updatedArray = [...prev]; // Create a copy of the previous state array
        updatedArray[editData.editItemIndex] = data; // Update the specific index with the new value
        editData?.setEditData(null);
        return updatedArray; // Return the updated array
      });
    } else {
      console.log("index2", editData?.editItemIndex);

      setQuestion((prev: any) => [...prev, data]);
    }

    // setValue("question", "");
    // setValue("1", "");
    // setValue("2", "");
    // setValue("3", "");
    // setValue("4", "");
    // setQuestionText(null);
    // setOption1(null);
    // setOption2(null);
    // setOption3(null);
    // setOption4(null);

    console.log("formData", data);
  };

  return (
    <div className=" p-4 border-2">
      <form onSubmit={handleSubmit(formSubmiteHandler)}>
        <div className="flex flex-col gap-2 ">
          <TextField
            {...register("question")}
            className=""
            defaultValue={questionText !== "" ? questionText : ""}
            label="Question"
            variant="outlined"
          />
          {/* <Checkbox />{" "} */}
          <ol className="flex flex-col gap-2">
            <li>
              <Checkbox />
              <TextField
                // onChange={}
                {...register("1")}
                className="!w-1/2"
                defaultValue={option1}
                label="Option1"
                variant="outlined"
              />
            </li>
            <li>
              <Checkbox />
              <TextField
                // onChange={}
                {...register("2")}
                className="!w-1/2"
                defaultValue={option2}
                label="Option2"
                variant="outlined"
              />
            </li>
            <li>
              <Checkbox />
              <TextField
                // onChange={}
                {...register("3")}
                className="!w-1/2"
                defaultValue={option3}
                label="Option3"
                variant="outlined"
              />
            </li>
            <li>
              <Checkbox />
              <TextField
                // onChange={}
                {...register("4")}
                className="!w-1/2"
                defaultValue={option4}
                label="Option4"
                variant="outlined"
              />
            </li>
          </ol>
        </div>
        <Button
          sx={{ mt: 1, mr: 1, width: 30 }}
          // onClick={handleMCQCreate}
          type="submit"
          variant="outlined"
        >
          Create
        </Button>
      </form>
    </div>
  );
};

export default CreateMCQ;
