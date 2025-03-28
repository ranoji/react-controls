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




const CompactHolidayView = ({ holidays }) => {
  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="subtitle1" sx={{ 
        mb: 1,
        color: 'text.secondary',
        fontWeight: '500'
      }}>
        Upcoming Holidays ({holidays?.length})
      </Typography>

      <Grid container spacing={1}>
        {holidays?.map((holiday, index) => (
          <Grid item xs={6} sm={4} md={2.4} key={index} sx={{
            // For 5 items per row (2.4 * 5 = 12)
            '@media (min-width: 900px)': {
              flexBasis: '20%',
              maxWidth: '20%'
            }
          }}>
            <Paper elevation={0} sx={{
              p: 1,
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 1,
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              '&:hover': {
                backgroundColor: 'action.hover'
              }
            }}>
              <Chip 
                label={new Date(holiday.date).getDate()}
                size="small"
                sx={{ 
                  height: 24,
                  minWidth: 24,
                  bgcolor: 'primary.main', 
                  color: 'white',
                  fontWeight: 'bold',
                  '& .MuiChip-label': { px: 0.5 } 
                }}
              />
              <Box sx={{ overflow: 'hidden' }}>
                <Typography variant="caption" sx={{ 
                  fontWeight: '500',
                  lineHeight: 1.2,
                  display: 'block',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                  overflow: 'hidden'
                }}>
                  {holiday.name}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {new Date(holiday.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric'
                  })}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
