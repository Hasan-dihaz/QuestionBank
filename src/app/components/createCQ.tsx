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
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";

const CreateCQ = ({ setQuestion, editData }: any) => {
  const [questionText, setQuestionText]: any = useState("");
  console.log("editData", editData);

  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
    trigger,
  } = useForm();

  // console.log("editData", editData);
  useEffect(() => {
    console.log("editIf0");
    if (editData) {
      console.log("editIf1", editData[1], editData[2]);
      setValue("context", editData.context);
      setValue("question1", editData.question1);
      setValue("question2", editData.question2);
      setValue("question3", editData.question3);
      setValue("question4", editData.question4);
      // setValue("checkBox1", editData.checkBox1);
      // setValue("checkBox2", editData.checkBox2);
      // setValue("checkBox3", editData.checkBox3);
      // setValue("checkBox4", editData.checkBox4);
    }
  }, [editData, setValue]);

  console.log("questionText", editData?.checkBox1);

  const formSubmiteHandler = (data: any) => {
    if (typeof editData?.editItemIndex !== "undefined") {
      setQuestion((prev: any) => {
        console.log("index1", editData?.editItemIndex);
        console.log("data", data);

        const updatedArray = [...prev]; // Create a copy of the previous state array
        updatedArray[editData.editItemIndex] = data; // Update the specific index with the new value
        editData?.setEditData("");
        return updatedArray; // Return the updated array
      });
    } else {
      console.log("index2", editData?.editItemIndex);

      setQuestion((prev: any) => [...prev, data]);
    }

    console.log("formData", data);
  };

  return (
    <div className=" p-4 border-2">
      <form onSubmit={handleSubmit(formSubmiteHandler)}>
        <div className="flex flex-col gap-2 ">
          {/* //! ~~~~~~~~~~~~~~~~~~~~~~~  Way to work with react hook form*/}
          <Controller
            name="context"
            control={control}
            defaultValue="" // Set the default value if needed
            render={({ field }) => (
              <TextField {...field} label="Context" variant="outlined" />
            )}
          />
          <ol className="flex flex-col gap-2">
            <li>
              <Controller
                name="question1"
                control={control}
                defaultValue="" // Set the default value if needed
                render={({ field }) => (
                  <TextField
                    {...field}
                    className="!w-1/2"
                    label="Question1"
                    variant="outlined"
                  />
                )}
              />
            </li>
            <li>
              <Controller
                name="question2"
                control={control}
                defaultValue="" // Set the default value if needed
                render={({ field }) => (
                  <TextField
                    {...field}
                    className="!w-1/2"
                    label="Question2"
                    variant="outlined"
                  />
                )}
              />
            </li>
            <li>
              <Controller
                name="question3"
                control={control}
                defaultValue="" // Set the default value if needed
                render={({ field }) => (
                  <TextField
                    {...field}
                    className="!w-1/2"
                    label="Question3"
                    variant="outlined"
                  />
                )}
              />
            </li>
            <li>
              <Controller
                name="question4"
                control={control}
                defaultValue="" // Set the default value if needed
                render={({ field }) => (
                  <TextField
                    {...field}
                    className="!w-1/2"
                    label="Question4"
                    variant="outlined"
                  />
                )}
              />
            </li>
          </ol>
          {/* //! ~~~~~~~~~~~~~~~~~~~~~~~ */}
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

export default CreateCQ;
