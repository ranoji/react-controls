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

const OuterBox = styled(Box)({
  backgroundColor: "lightblue",
  padding: "10px",
  marginTop: "10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
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

  const toggleBox = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <NineDotsMenu toggleBox={toggleBox} />
          </Box>
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
