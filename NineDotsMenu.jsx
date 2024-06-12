// NineDotsMenu.js

import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";

const Dot = styled(Box)({
  flex: "0 0 calc(33.33% - 4px)", // Adjust width to maintain 9x9 box ratio and reduce spacing
  height: "0",
  paddingBottom: "calc(33.33% - 4px)",
  backgroundColor: "blue",
  margin: "1px", // Adjust spacing between dots
});

const Circle = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "50px",
  height: "50px",
  backgroundColor: "lightgrey",
  borderRadius: "50%",
  cursor: "pointer",
  padding: "4px",
  boxSizing: "border-box",
});

const NineDotsMenu = ({ toggleBox }) => {
  return (
    <Circle onClick={toggleBox}>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        width="100%"
      >
        {[...Array(9)].map((_, index) => (
          <Dot key={index} />
        ))}
      </Box>
    </Circle>
  );
};

export default NineDotsMenu;
