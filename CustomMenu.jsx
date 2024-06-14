import React from "react";
import { Menu, MenuItem, Box, Button, Grid } from "@mui/material";

const CustomMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Open Menu
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
          style: { maxHeight: "none", height: "auto", overflow: "visible" },
        }}
        PaperProps={{
          style: {
            maxHeight: "none",
            height: "auto",
            overflow: "visible",
          },
        }}
      >
        <Box sx={{ width: 300, p: 2 }}>
          <Grid container spacing={2}>
            {Array.from({ length: 16 }).map((_, index) => (
              <Grid item xs={6} key={index}>
                <Button fullWidth variant="contained" onClick={handleClose}>
                  Button {index + 1}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Menu>
    </div>
  );
};

export default CustomMenu;
