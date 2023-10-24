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

const CreateMCQ = ({ setQuestion, editData }: any) => {
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
      setValue("question", editData.question);
      setValue("option1", editData.option1);
      setValue("option2", editData.option2);
      setValue("option3", editData.option3);
      setValue("option4", editData.option4);
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
          {/* //! ~~~~~~~~~~~~~~~~~~~~~~~  Way to work with react hook form*/}
          <Controller
            name="question"
            control={control}
            defaultValue="" // Set the default value if needed
            render={({ field }) => (
              <TextField {...field} label="Question" variant="outlined" />
            )}
          />
          <ol className="flex flex-col gap-2">
            <li>
              <Controller
                name="checkBox1"
                control={control}
                defaultValue={editData?.checkBox1} // Set the default value if needed
                render={({ field }) => (
                  <Checkbox
                    {...field}
                    checked={field.value} // Set checked prop based on the field's value
                  />
                )}
              />
              <Controller
                name="option1"
                control={control}
                defaultValue="" // Set the default value if needed
                render={({ field }) => (
                  <TextField
                    {...field}
                    className="!w-1/2"
                    label="Option1"
                    variant="outlined"
                  />
                )}
              />
            </li>
            <li>
              <Controller
                name="checkBox2"
                control={control}
                // defaultValue="" // Set the default value if needed
                render={({ field }) => <Checkbox {...field} />}
              />
              <Controller
                name="option2"
                control={control}
                defaultValue="" // Set the default value if needed
                render={({ field }) => (
                  <TextField
                    {...field}
                    className="!w-1/2"
                    label="Option2"
                    variant="outlined"
                  />
                )}
              />
            </li>
            <li>
              <Controller
                name="checkBox3"
                control={control}
                // defaultValue="" // Set the default value if needed
                render={({ field }) => <Checkbox {...field} />}
              />
              <Controller
                name="option3"
                control={control}
                defaultValue="" // Set the default value if needed
                render={({ field }) => (
                  <TextField
                    {...field}
                    className="!w-1/2"
                    label="Option3"
                    variant="outlined"
                  />
                )}
              />
            </li>
            <li>
              <Controller
                name="checkBox4"
                control={control}
                // defaultValue="" // Set the default value if needed
                render={({ field }) => <Checkbox {...field} />}
              />
              <Controller
                name="option4"
                control={control}
                defaultValue="" // Set the default value if needed
                render={({ field }) => (
                  <TextField
                    {...field}
                    className="!w-1/2"
                    label="Option4"
                    variant="outlined"
                  />
                )}
              />
            </li>
          </ol>
          {/* //! ~~~~~~~~~~~~~~~~~~~~~~~ */}
          {/* <Checkbox />{" "} */}
          {/* <ol className="flex flex-col gap-2">
            <li>
              <Checkbox />
              <TextField
                // onChange={}
                {...register("1")}
                className="!w-1/2"
                // defaultValue={option1}
                // value={option1}
                onChange={(e: any) => setOption1(e.target.value)}
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
                // value={option2}
                // defaultValue={option2}
                onChange={(e: any) => setOption2(e.target.value)}
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
                // defaultValue={option3}
                // value={option3}
                onChange={(e: any) => setOption3(e.target.value)}
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
                // defaultValue={option4}
                // value={option4}
                onChange={(e: any) => setOption4(e.target.value)}
                label="Option4"
                variant="outlined"
              />
            </li>
          </ol> */}
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
