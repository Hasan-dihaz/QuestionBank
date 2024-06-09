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
  const [isChecked, setIsChecked]: any = useState([]);
  console.log(
    "iseditData",
    editData,
    editData?.isChecked,
    editData?.isChecked?.length
  );

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
    console.log("formState", errors);
    if (editData) {
      setIsChecked(editData?.isChecked?.length > 0 ? editData?.isChecked : []);
      console.log("editIf1", editData[1], editData[2]);
      setValue("question", editData.question);
      setValue("option1", editData.option1);
      setValue("option2", editData.option2);
      setValue("option3", editData.option3);
      setValue("option4", editData.option4);
      // setValue("checkBox1", editData.checkBox1);

      // setIsChecked(editData.checkBox1);

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
        console.log("data", { ...data, isChecked });
        data = { ...data, isChecked };

        const updatedArray = [...prev]; // Create a copy of the previous state array
        updatedArray[editData.editItemIndex] = data; // Update the specific index with the new value
        editData?.setEditData("");
        return updatedArray; // Return the updated array
      });
      setIsChecked([]);
    } else {
      console.log("index2", editData?.editItemIndex);
      data = { ...data, isChecked };
      setQuestion((prev: any) => [...prev, data]);
      setIsChecked([]);
    }

    setValue("question", "");
    setValue("option1", "");
    setValue("option2", "");
    setValue("option3", "");
    setValue("option4", "");

    console.log("formData", data);
  };

  // State to manage the condition for checkbox

  // Function to handle checkbox change
  const handleCheckBox = (value: any) => {
    setIsChecked((prevValues: any) =>
      prevValues.includes(value)
        ? prevValues.filter((item: any) => item !== value)
        : [...prevValues, value]
    );
  };

  console.log("is", isChecked);

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
              {/* <Controller
                name="checkBox1"
                control={control}
                // value={editData?.checkBox1} // Set the default value if needed
                // defaultValue={true}
                render={({ field }) => {
                  console.log("field.value", field);
                  return <Checkbox {...field} checked={isChecked} />;
                }}
              /> */}
              <Checkbox
                checked={isChecked?.includes(0)}
                onChange={() => handleCheckBox(0)}
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
              {/* <Controller
                name="checkBox2"
                control={control}
                // defaultValue={true}
                render={({ field: { onChange, value } }) => (
                  <Checkbox checked={value} onChange={onChange} />
                )}
              /> */}

              <Checkbox
                checked={isChecked?.includes(1)}
                onChange={() => handleCheckBox(1)}
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
              {/* <Controller
                name="checkBox3"
                control={control}
                // defaultValue="" // Set the default value if needed
                defaultValue={false}
                render={({ field: { onChange, value } }) => (
                  <Checkbox checked={value} onChange={onChange} />
                )}
              /> */}
              <Checkbox
                checked={isChecked?.includes(2)}
                onChange={() => handleCheckBox(2)}
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
              {/* <Controller
                name="checkBox4"
                control={control}
                // defaultValue="" // Set the default value if needed
                render={({ field }) => <Checkbox {...field} />}
              /> */}
              <Checkbox
                checked={isChecked?.includes(3)}
                onChange={() => handleCheckBox(3)}
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
