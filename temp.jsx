import React from "react";
import { Box } from "@mui/material";
import { Warning } from "@mui/icons-material";

const WarningIconWithTriangle = () => {
  return (
    <Box
      sx={{
        position: "relative", // Allow stacking of elements
        width: "48px", // Width of the warning icon and triangle
        height: "48px", // Same as width for perfect alignment
      }}
    >
      {/* Triangle Background */}
      <Box
        sx={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "0",
          height: "0",
          borderLeft: "24px solid transparent", // Half width for triangle
          borderRight: "24px solid transparent", // Half width for triangle
          borderBottom: "48px solid black", // Height for triangle and black color
          zIndex: 1, // Place behind the warning icon
        }}
      />
      {/* Warning Icon */}
      <Warning
        sx={{
          position: "absolute",
          top: "0",
          left: "0",
          fontSize: "48px", // Same size as the triangle
          color: "orange", // Orange for the icon fill
          zIndex: 2, // Place above the triangle
        }}
      />
      {/* Exclamation Mark (Custom Overlay) */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -60%)", // Center the exclamation mark
          color: "black", // Black exclamation mark
          fontSize: "16px",
          fontWeight: "bold",
        }}
      >
        !
      </Box>
    </Box>
  );
};

export default WarningIconWithTriangle;
