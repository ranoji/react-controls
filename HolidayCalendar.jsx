// src/CustomCalendar.js

import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  IconButton,
  Tooltip,
  Button,
} from "@mui/material";
import EventIcon from "@mui/icons-material/Event";
import { styled } from "@mui/system";
import moment from "moment";

const CalendarContainer = styled(Box)({
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  backgroundColor: "#fff",
});

const HeaderBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "20px",
});

const DayBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid #ccc",
  height: "100px",
  cursor: "pointer",
  position: "relative",
  backgroundColor: "#f9f9f9",
});
const HolidayStrip = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "10px",
});
const holidays = [
  { title: "New Year", date: moment("2024-06-01"), icon: <EventIcon /> },
  { title: "Christmas", date: moment("2024-06-16"), icon: <EventIcon /> },
  // Add more holidays as needed
];

const HolidayCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(moment().startOf("month"));

  const startOfMonth = currentMonth.clone().startOf("month");
  const endOfMonth = currentMonth.clone().endOf("month");
  const startOfWeek = startOfMonth.clone().startOf("week");
  const endOfWeek = endOfMonth.clone().endOf("week");

  const days = [];
  let day = startOfWeek.clone();

  while (day <= endOfWeek) {
    days.push(day.clone());
    day.add(1, "day");
  }

  const getHoliday = (date) => {
    return holidays.find((holiday) => holiday.date.isSame(date, "day"));
  };

  const nextMonth = () => {
    setCurrentMonth(currentMonth.clone().add(1, "month"));
  };

  const prevMonth = () => {
    setCurrentMonth(currentMonth.clone().subtract(1, "month"));
  };

  return (
    <CalendarContainer>
      <HeaderBox>
        <Button variant="contained" onClick={prevMonth}>
          Previous
        </Button>
        <Typography variant="h6">{currentMonth.format("MMMM YYYY")}</Typography>
        <Button variant="contained" onClick={nextMonth}>
          Next
        </Button>
      </HeaderBox>
      <Grid container spacing={0}>
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <Grid item xs={1.714} key={day}>
            <Box
              sx={{ textAlign: "center", fontWeight: "bold", padding: "10px" }}
            >
              {day}
            </Box>
          </Grid>
        ))}
        {days.map((day, index) => {
          const holiday = getHoliday(day);
          return (
            <Grid item xs={1.714} key={index}>
              <DayBox>
                <Typography
                  variant="body2"
                  color={
                    day.month() === currentMonth.month()
                      ? "textPrimary"
                      : "textSecondary"
                  }
                >
                  {day.format("D")}
                </Typography>
                {holiday && (
                  <HolidayStrip key={index}>
                    <IconButton size="small" color="primary">
                      {holiday.icon}
                    </IconButton>
                    <Typography variant="caption">{holiday.title}</Typography>
                  </HolidayStrip>
                )}
              </DayBox>
            </Grid>
          );
        })}
      </Grid>
    </CalendarContainer>
  );
};

export default HolidayCalendar;
