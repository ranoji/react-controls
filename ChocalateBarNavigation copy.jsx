// src/App.js

import React, { useState } from "react";
import NineDotsMenu from "./NineDotsMenu";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import ShareIcon from "@mui/icons-material/Share";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import "./App.css"; // Ensure you have a global CSS file if needed

const OuterBox = styled(Box)({
  backgroundColor: "lightblue",
  padding: "10px",
  marginTop: "5px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "514px",
  height: "524px",
  boxShadow: "2px 2px 6px rgba(0, 0, 0, 0.3)", // Add shadow
});

const ShareButton = styled(Button)({
  width: "219px",
  height: "42px",
  backgroundColor: "lightblue",
  border: "1px solid blue",
  borderRadius: "8px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 10px",
  cursor: "pointer",
});

const buttonData = [
  { name: "Button 1", url: "/button1" },
  { name: "Button 2", url: "/button2" },
  { name: "Button 2", url: "/button2" },
  { name: "Button 2", url: "/button2" },
  { name: "Button 2", url: "/button2" },
  { name: "Button 2", url: "/button2" },
  { name: "Button 2", url: "/button2" },
  { name: "Button 2", url: "/button2" },
  { name: "Button 2", url: "/button2" },
  { name: "Button 2", url: "/button2" },
  { name: "Button 2", url: "/button2" },
  { name: "Button 2", url: "/button2" },
  { name: "Button 2", url: "/button2" },
  { name: "Button 2", url: "/button2" },
  { name: "Button 2", url: "/button2" },
  { name: "Button 2", url: "/button2" },
  // Add more button data as needed
];

function ChocalateBarNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBox = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <AppBar position="static" height="10px">
        <Toolbar>
          <h1>Chocolate App Bar</h1>
          <NineDotsMenu toggleBox={toggleBox} />
        </Toolbar>
      </AppBar>
      {isOpen && (
        <OuterBox>
          <Grid container spacing={1}>
            {buttonData.map((button, index) => (
              <Grid item xs={6} key={index}>
                <ShareButton
                  variant="contained"
                  component="a"
                  href={button.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {button.name}
                  <ShareIcon style={{ color: "lightblue" }} />
                </ShareButton>
              </Grid>
            ))}
          </Grid>
        </OuterBox>
      )}
    </div>
  );
}

export default ChocalateBarNavigation;
