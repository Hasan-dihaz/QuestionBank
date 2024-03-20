"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  Modal,
  Popover,
  TextField,
  Typography,
} from "@mui/material";
import CreateMCQ from "./createMCQ";
import CreateCQ from "./createCQ";
import PDFFile from "./pdfCreator";
import PDF from "./pdf";
import { PDFDownloadLink } from "@react-pdf/renderer";
import QuestionMetaData from "./Subjects/subAndChap";
import ClientsRegistration from "./Clients/clients";
import Layout from "./Layout/layout";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";

//!============================

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  pt: 0,
};

export function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}

        // aria-labelledby="modal-modal-title"
        // aria-describedby="modal-modal-description"
      >
        <Box sx={style} className=" !rounded-xl">
          <Box className=" !py-3">
            <Typography
              className=" !text-xl !font-light"
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              Client Details
            </Typography>
          </Box>
          <Box>
            <ClientsRegistration />
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
//!============================

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
      const editableQuestion: any = {
        ...question.find((item: any, index: any) => index === editItemIndex),
        editItemIndex: editItemIndex,
        setEditData: setEditData,
      };

      setEditData(editableQuestion);
    } else if (questionType === "cq") {
      setEditData({
        ...questionCQ.find((item: any, index: any) => index === editItemIndex),
        editItemIndex: editItemIndex,
        setEditData: setEditData,
      });
    }
  };

  const ansSet = ["a", "b", "c", "d"];

  return (
    <div className="flex flex-col">
      <div className=" px-10 w-full flex justify-between">
        <Typography>Create Question</Typography>
        <PDFDownloadLink
          // document={<PDFFile question={question} />}
          document={<PDF />}
          fileName="FORM"
        >
          {({ loading }) =>
            loading ? (
              <button>Loading Document...</button>
            ) : (
              <button>Download</button>
            )
          }
        </PDFDownloadLink>

        <div>
          <Button onClick={() => setQuestionType("mcq")}>MCQ</Button>
          <Button onClick={() => setQuestionType("cq")}>CQ</Button>
        </div>
      </div>

      <div className="w-full flex flex-row p-5">
        <div className=" w-1/2 h-screen overflow-auto flex flex-col gap-5">
          {(questionType === "mcq" ? question : questionCQ)?.map(
            (item: any, index: any) => (
              <>
                <div
                  key={index}
                  className=" flex items-start justify-between pr-10"
                >
                  {questionType === "mcq" ? (
                    <div id="mcq" className="">
                      <div className="flex gap-1">
                        <span>{index + 1}</span>&nbsp;&nbsp;
                        <ol className="flex flex-col gap-1">
                          <li>
                            <Box>{item.question}</Box>
                          </li>
                          <li className="flex gap-5">
                            <Box>a. {item.option1}</Box>
                            <Box>b. {item.option2}</Box>
                          </li>
                          <li className="flex gap-5">
                            <Box>c. {item.option3}</Box>
                            <Box>d. {item.option4}</Box>
                          </li>
                        </ol>
                      </div>
                      <div>
                        Ans.{" "}
                        {item.isChecked
                          ?.sort((a: any, b: any) => a - b)
                          ?.map((ans: any, index: number) => {
                            return (
                              <span>
                                <span>{ansSet[ans]}</span>
                                {index < item.isChecked.length - 1 && (
                                  <span>,</span>
                                )}
                              </span>
                            );
                          })}
                      </div>
                    </div>
                  ) : (
                    <div className="flex gap-1 border-r-2">
                      <span>{index + 1}.</span>&nbsp;&nbsp;
                      <ol className="flex flex-col gap-1">
                        <li>
                          <Box className="mb-2">
                            <p>{item.context}</p>
                          </Box>
                        </li>
                        <li className="flex flex-col gap-2">
                          <Box>1) {item.question1}</Box>
                          <Box>2) {item.question2}</Box>
                          <Box>3) {item.question3}</Box>
                          <Box>4) {item.question4}</Box>
                        </li>
                      </ol>
                    </div>
                  )}
                  <div className="h-fit flex gap-1 border-l-2">
                    {/* <Button onClick={() => handleEdit(index)} className=""> */}
                    {/* Edit */}
                    <IconButton onClick={() => handleEdit(index)} size="medium">
                      <EditIcon fontSize="medium" color="success" />
                    </IconButton>
                    {/* </Button> */}
                    {/* <Button onClick={() => handleDelete(index)}> */}
                    <IconButton
                      onClick={() => handleDelete(index)}
                      size="medium"
                      color="error"
                    >
                      <DeleteIcon fontSize="medium" />
                    </IconButton>
                    {/* </Button> */}
                  </div>
                </div>
                <div className=" w-3/4 self-center border-b-2"></div>
              </>
            )
          )}
        </div>
        <div className="w-1/2">
          <div>
            <QuestionMetaData />
          </div>
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
