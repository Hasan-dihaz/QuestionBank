"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
} from "../../../node_modules/@mui/material/index";
import CreateMCQ from "./createMCQ";
import CreateCQ from "./createCQ";
import PDFFile from "./pdfCreator";
import { PDFDownloadLink } from "@react-pdf/renderer";

const CreateQuestion = () => {
  const [question, setQuestion]: any = useState([]);
  const [questionCQ, setQuestionCQ]: any = useState([]);
  const [editData, setEditData]: any = useState({});
  const [questionType, setQuestionType]: any = useState("mcq");

  console.log("question", question);
  console.log("questionCQ", questionCQ);

  const handleDelete = (index: any) => {
    let questionArray: any = [];
    if (questionType === "mcq") {
      questionArray = [...question];
      questionArray?.splice(index, 1);
      setQuestion(questionArray);
    } else if (questionType === "cq") {
      questionArray = [...questionCQ];
      questionArray?.splice(index, 1);
      setQuestionCQ(questionArray);
    }
  };

  const handleEdit = (editItemIndex: any) => {
    if (questionType === "mcq") {
      setEditData({
        ...question.find((item: any, index: any) => index === editItemIndex),
        editItemIndex: editItemIndex,
        setEditData: setEditData,
      });
    } else if (questionType === "cq") {
      setEditData({
        ...questionCQ.find((item: any, index: any) => index === editItemIndex),
        editItemIndex: editItemIndex,
        setEditData: setEditData,
      });
    }
  };

  return (
    <div className="flex flex-col">
      <div className=" px-10 w-full flex justify-between">
        <Typography>Create Question</Typography>
        {/* <PDFDownloadLink document={<PDFFile />} fileName="FORM">
          {({ loading }) =>
            loading ? (
              <button>Loading Document...</button>
            ) : (
              <button>Download</button>
            )
          }
        </PDFDownloadLink> */}

        <div>
          <Button onClick={() => setQuestionType("mcq")}>MCQ</Button>
          <Button onClick={() => setQuestionType("cq")}>CQ</Button>
        </div>
      </div>
      <div className="w-full flex flex-row ">
        <div className=" w-1/2 h-screen overflow-auto flex flex-col gap-5">
          {(questionType === "mcq" ? question : questionCQ)?.map(
            (item: any, index: any) => (
              <div key={index} className="flex items-start gap-4">
                {questionType === "mcq" ? (
                  <div id="mcq" className="flex gap-1">
                    <span>{index + 1}</span>&nbsp;&nbsp;
                    <ol className="flex flex-col gap-1">
                      <li>
                        <Box>{item.question}</Box>
                      </li>
                      <li className="flex gap-5">
                        <Box>{item[1]}</Box>
                        <Box>{item[2]}</Box>
                      </li>
                      <li className="flex gap-5">
                        <Box>{item[3]}</Box>
                        <Box>{item[4]}</Box>
                      </li>
                    </ol>
                  </div>
                ) : (
                  <div className="flex gap-1">
                    <span>{index + 1}.</span>&nbsp;&nbsp;
                    <ol className="flex flex-col gap-1">
                      <li>
                        <Box className="mb-2">
                          <p>{item.context}</p>
                        </Box>
                      </li>
                      <li className="flex flex-col gap-2">
                        <Box>1) {item.q1}</Box>
                        <Box>2) {item.q2}</Box>
                        <Box>3) {item.q3}</Box>
                        <Box>4) {item.q4}</Box>
                      </li>
                    </ol>
                  </div>
                )}
                <div className="h-fit flex gap-2">
                  <Button onClick={() => handleEdit(index)} className="">
                    Edit
                  </Button>
                  <Button onClick={() => handleDelete(index)}>Delete</Button>
                </div>
              </div>
            )
          )}
        </div>
        <div className="w-1/2">
          {questionType === "mcq" ? (
            <CreateMCQ setQuestion={setQuestion} editData={editData} />
          ) : (
            <CreateCQ setQuestion={setQuestionCQ} editData={editData} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateQuestion;
