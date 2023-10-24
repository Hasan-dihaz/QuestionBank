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
  const [questionContext, setQuestionContext]: any = useState("");
  const [question1, setQuestion1]: any = useState("");
  const [question2, setQuestion2]: any = useState("");
  const [question3, setQuestion3]: any = useState("");
  const [question4, setQuestion4]: any = useState("");
  const [isWaitting, setisWaitting]: any = useState(true);

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
    if (editData) {
      setValue("context", editData.context);
      setValue("q1", editData.q1);
      setValue("q2", editData.q2);
      setValue("q3", editData.q3);
      setValue("q4", editData.q4);
      setQuestionContext(editData.context);
      setQuestion1(editData.q1);
      setQuestion2(editData.q2);
      setQuestion3(editData.q3);
      setQuestion4(editData.q4);
      setisWaitting(false);
    }
  }, [editData, setValue]);

  useEffect(() => {
    setisWaitting(false);
  }, []);

  const formSubmiteHandler = (data: any) => {
    if (typeof editData?.editItemIndex !== "undefined") {
      setQuestion((prev: any) => {
        console.log("index1", editData?.editItemIndex);

        const updatedArray = [...prev]; // Create a copy of the previous state array
        updatedArray[editData.editItemIndex] = data;
        editData?.setEditData("");
        setisWaitting(false);
        return updatedArray; // Return the updated array
      });
      console.log("question1", question1, typeof question1);
    } else {
      console.log("index2", editData?.editItemIndex);

      setQuestion((prev: any) => [...prev, data]);
      console.log("question1", question1, typeof question1);
    }

    setValue("context", "");
    setValue("q1", "");
    setValue("q2", "");
    setValue("q3", "");
    setValue("q4", "");
    setQuestionContext("");
    setQuestion1("");
    setQuestion2("");
    setQuestion3("");
    setQuestion4("");

    console.log("formData", data);
  };

  return !isWaitting ? (
    <div className=" p-4 border-2">
      <form onSubmit={handleSubmit(formSubmiteHandler)}>
        <div className="flex flex-col gap-2 ">
          <TextField
            {...register("context")}
            className=""
            // multiline
            // rows={3}
            value={questionContext}
            label="Context"
            variant="outlined"
          />
          {/*{" "} */}
          <ol className="flex flex-col gap-2">
            <li>
              <TextField
                // onChange={}
                {...register("q1")}
                className="!w-1/2"
                value={question1}
                label="Question1"
                variant="outlined"
              />
            </li>
            <li>
              <TextField
                // onChange={}
                {...register("q2")}
                className="!w-1/2"
                value={question2}
                label="Question2"
                variant="outlined"
              />
            </li>
            <li>
              <TextField
                // onChange={}
                {...register("q3")}
                className="!w-1/2"
                value={question3}
                label="Question3"
                variant="outlined"
              />
            </li>
            <li>
              <TextField
                // onChange={}
                {...register("q4")}
                className="!w-1/2"
                value={question4}
                label="Question4"
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
  ) : (
    <div></div>
  );
};

export default CreateCQ;
