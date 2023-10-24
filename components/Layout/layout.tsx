"use client";
// import Navbar from "../NavBar/navBar";

// const Layout = ({ children }: any) => {
//   return <Navbar>{children}</Navbar>;
// };

// export default Layout;

import React, { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import CreateQuestion, { BasicModal } from "../createQuestion";

const Layout = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  return (
    <div>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Home" />
        <Tab label="Create Question" />
        <Tab label="Create Exam" />
        <Tab label="Add Client" />
      </Tabs>
      {value === 0 && <div></div>}
      {value === 1 && <CreateQuestion />}
      {value === 2 && <div>Create Exam Content</div>}
      {value === 3 && (
        <div>
          <BasicModal />
        </div>
      )}
    </div>
  );
};

export default Layout;
