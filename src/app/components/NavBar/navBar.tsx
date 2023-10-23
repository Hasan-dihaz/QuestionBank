import React, { useState } from "react";
import { Tabs, Tab } from "@mui/material";

const Navbar = () => {
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
      {value === 0 && <div>Home Content</div>}
      {value === 1 && <div>Create Question Content</div>}
      {value === 2 && <div>Create Exam Content</div>}
      {value === 3 && <div>Add Client Content</div>}
    </div>
  );
};

export default Navbar;
