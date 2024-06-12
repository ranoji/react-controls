// App.js

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
import AppsIcon from "@mui/icons-material/Apps";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";

const OuterBox = styled(Box)({
  backgroundColor: "lightblue",
  padding: "10px",
  marginTop: "10px",
  display: "flex",
  justifyContent: "right",
  alignItems: "right",
  width: "90%", // Adjust width to be a percentage of the viewport width
  maxWidth: "514px", // Set maximum width to limit the size on larger screens
  height: "auto", // Let the height adjust automatically based on content
  boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)", // Add shadow
});

const ShareButton = styled(Button)({
  width: "100%", // Adjust button width to fill the grid item
  height: "42px",
  border: "1px solid blue",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px",
  cursor: "pointer",
});

function ChocalateBarNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            aria-label="apps"
            onClick={handleToggle}
            sx={{
              bgcolor: "rgba(173, 216, 230, 0.3)", // very light blue background
              border: "none",
              outline: "none",
              "&:hover": {
                bgcolor: "rgba(173, 216, 230, 0.5)", // slightly darker on hover
              },
              "&:focus": {
                outline: "none", // remove focus outline
              },
            }}
          >
            <AppsIcon sx={{ color: "#87CEEB" }} /> {/* sky blue color */}
          </IconButton>
        </Toolbar>
      </AppBar>
      {isOpen && (
        <OuterBox>
          <Grid container spacing={1}>
            {[...Array(16)].map((_, index) => (
              <Grid item xs={12} sm={6} md={6} lg={6} xl={6} key={index}>
                {" "}
                {/* Adjust grid item breakpoints */}
                <ShareButton variant="contained">
                  Button {index + 1}
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
