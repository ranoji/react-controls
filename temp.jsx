import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

// Sample JSON data
const jsonData = [
  {
    column1: "Text1|Text2|Text3",
    column2: "Value1",
  },
  {
    column1: "TextA|TextB",
    column2: "Value2",
  },
  {
    column1: "TextX|TextY|TextZ",
    column2: "Value3",
  },
];

// Image icon URL (hardcoded location)
const iconUrl = "https://via.placeholder.com/20"; // Replace with your icon URL

const TableWithPipeSeparatedData = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Column 1</TableCell>
            <TableCell>Column 2</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {jsonData.map((row, index) => (
            <TableRow key={index}>
              {/* First column: Pipe-separated text with icon */}
              <TableCell>
                {row.column1.split("|").map((text, subIndex) => (
                  <div key={subIndex} style={{ display: "flex", alignItems: "center", marginBottom: "4px" }}>
                    <img src={iconUrl} alt="icon" style={{ marginRight: "8px" }} />
                    <span>{text}</span>
                  </div>
                ))}
              </TableCell>
              {/* Second column */}
              <TableCell>{row.column2}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableWithPipeSeparatedData;
