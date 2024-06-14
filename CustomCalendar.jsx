import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Typography,
  Grid,
  Popover,
  TextField,
  Stack,
} from "@mui/material";
import { ArrowBack, ArrowForward, Today } from "@mui/icons-material";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
dayjs.extend(localizedFormat);

// Sample holiday data
const holidays = [
  { date: "2024-06-14", name: "Flag Day" },
  { date: "2024-07-04", name: "Independence Day" },
  { date: "2024-12-25", name: "Christmas Day" },
];

const CustomCalendar = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const today = dayjs();

  const startDay = currentDate.startOf("month").startOf("week");
  const endDay = currentDate.endOf("month").endOf("week");

  const days = [];
  let day = startDay;

  while (day.isBefore(endDay + 1, "day")) {
    days.push(day);
    day = day.add(1, "day");
  }

  const handlePrevMonth = () => {
    setCurrentDate(currentDate.subtract(1, "month"));
  };

  const handleNextMonth = () => {
    setCurrentDate(currentDate.add(1, "month"));
  };

  const handleToday = () => {
    setCurrentDate(today);
  };

  const handleDateChange = (event) => {
    const date = dayjs(event.target.value);
    if (date.isValid()) {
      setCurrentDate(date.startOf("month"));
      setAnchorEl(null);
    }
  };

  const handleDateClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const isHoliday = (date) => {
    return holidays.find((holiday) => dayjs(holiday.date).isSame(date, "day"));
  };

  const renderDay = (day) => {
    const holiday = isHoliday(day);
    const isToday = day.isSame(today, "day");

    return (
      <Box
        key={day.format("YYYY-MM-DD")}
        sx={{
          padding: 1,
          backgroundColor: isToday ? "lightblue" : "white",
          border: isToday ? "1px solid blue" : "0.5px solid grey",
          height: "90px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="body2">{day.format("D")}</Typography>
        {holiday && (
          <Stack direction={"row"}>
            <Today fontSize="small" sx={{ mr: 0.5 }} />
            <Typography variant="caption">{holiday.name}</Typography>
          </Stack>
        )}
      </Box>
    );
  };

  return (
    <Box sx={{ margin: "0 auto" }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex" justifyContent="center" alignItems="center">
          <IconButton onClick={handlePrevMonth}>
            <ArrowBack />
          </IconButton>
          <Typography
            variant="h6"
            onClick={handleDateClick}
            sx={{ cursor: "pointer" }}
          >
            {currentDate.format("MMMM YYYY")}
          </Typography>
          <Popover
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            sx={{ p: 2 }}
          >
            <Box p={1}>
              <TextField
                type="month"
                value={selectedDate.format("YYYY-MM")}
                onChange={handleDateChange}
                fullWidth
              />
            </Box>
          </Popover>
          <IconButton onClick={handleNextMonth}>
            <ArrowForward />
          </IconButton>
        </Box>
        <Button
          sx={{
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "skyblue",
              boxShadow: "none",
              border: "",
            },
          }}
          onClick={handleToday}
          startIcon={<Today />}
        >
          Today
        </Button>
      </Box>
      <Grid container spacing={0}>
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <Grid item xs={1.714} key={day}>
            <Box sx={{ textAlign: "center" }}>
              <Typography>{day}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={0}>
        {days.map((day) => (
          <Grid item xs={1.714} key={day.format("YYYY-MM-DD")}>
            {renderDay(day)}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CustomCalendar;
