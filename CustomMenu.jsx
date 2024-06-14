import React from "react";
import { Menu, Box, Button, Grid, Typography } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";

const CustomMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleButtonClick = (index) => {
    const baseUrl = window.location.origin;
    const url = `${baseUrl}/link${index + 1}`;
    if (index < 2) {
      window.location.href = url; // Open in the same window for the first two buttons
    } else {
      window.open(url, "_blank"); // Open in a new tab for other buttons
    }
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
        <Box sx={{ width: 400 }}>
          <Grid container spacing={2}>
            {Array.from({ length: 16 }).map((_, index) => (
              <Grid item xs={6} key={index}>
                {index === 14 ? (
                  <Button
                    fullWidth
                    variant="contained"
                    disabled
                    sx={{ color: "grey" }}
                  >
                    <Typography color="grey">Disabled</Typography>
                  </Button>
                ) : (
                  <Button
                    fullWidth
                    variant="contained"
                    onClick={() => handleButtonClick(index)}
                    endIcon={<ShareIcon />}
                  >
                    Button {index + 1}
                  </Button>
                )}
              </Grid>
            ))}
          </Grid>
        </Box>
      </Menu>
    </div>
  );
};

export default CustomMenu;
