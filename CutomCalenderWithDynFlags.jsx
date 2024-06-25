import React, { useState, useMemo } from "react";
import { Box, IconButton, Typography, Grid, Popover } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
dayjs.extend(localizedFormat);

// Dynamically import country flag icons
import * as Flags from "country-flag-icons/react/3x2";

const events = {
  exchangeHolidays: [
    { date: "2024-06-14", name: "Flag Day", country: "USA" },
    { date: "2024-07-04", name: "Independence Day", country: "USA" },
    { date: "2024-12-25", name: "Christmas Day", country: "Canada" },
  ],
};

const getEventsForDay = (date) => {
  return {
    exchangeHoliday: events.exchangeHolidays.find((event) =>
      dayjs(event.date).isSame(date, "day")
    ),
  };
};

const DayBox = React.memo(({ day, isToday, onDayClick, events }) => {
  const { exchangeHoliday } = events;
  const isWeekend = day.day() === 0 || day.day() === 6;

  let bgColor = "white";
  if (exchangeHoliday) bgColor = "lightblue";
  if (isToday) bgColor = "lightgreen";
  if (isWeekend) bgColor = "#f0f0f0";

  const renderCountryIcon = (country) => {
    const countryCode = country.substring(0, 2).toUpperCase();
    const FlagComponent = Flags[countryCode];

    return FlagComponent ? (
      <FlagComponent style={{ width: "20px", height: "20px" }} />
    ) : null;
  };

  return (
    <Box
      sx={{
        padding: 1,
        backgroundColor: bgColor,
        border: isToday ? "1px solid green" : "0.5px solid lightgrey",
        height: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "space-between",
        cursor: "pointer",
        position: "relative",
      }}
      onClick={onDayClick}
    >
      <Typography
        variant="body2"
        sx={{ position: "absolute", top: 0, right: 0, m: 1 }}
      >
        {day.format("D")}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          position: "absolute",
          bottom: 0,
          left: 0,
          padding: 1,
        }}
      >
        {exchangeHoliday && renderCountryIcon(exchangeHoliday.country)}
      </Box>
    </Box>
  );
});

const CustomCalendar = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedDayDetails, setSelectedDayDetails] = useState([]);
  const today = dayjs();

  const startDay = useMemo(
    () => currentDate.startOf("month").startOf("week"),
    [currentDate]
  );

  const handlePreviousMonth = () => {
    setCurrentDate((prev) => prev.subtract(1, "month"));
  };

  const handleNextMonth = () => {
    setCurrentDate((prev) => prev.add(1, "month"));
  };

  const handleDayClick = (day) => {
    setSelectedDayDetails(getEventsForDay(day));
    setAnchorEl(day);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  const renderCalendar = useMemo(() => {
    const calendar = [];
    let day = startDay;

    for (let week = 0; week < 6; week++) {
      const days = [];
      for (let i = 0; i < 7; i++) {
        const events = getEventsForDay(day);
        days.push(
          <Grid item xs={1} key={i}>
            <DayBox
              day={day}
              isToday={day.isSame(today, "day")}
              onDayClick={() => handleDayClick(day)}
              events={events}
            />
          </Grid>
        );
        day = day.add(1, "day");
      }
      calendar.push(
        <Grid container spacing={1} key={week}>
          {days}
        </Grid>
      );
    }
    return calendar;
  }, [currentDate, startDay, today]);

  return (
    <Box sx={{ padding: 3 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <IconButton onClick={handlePreviousMonth}>
          <ArrowBackIosIcon />
        </IconButton>
        <Typography variant="h6">{currentDate.format("MMMM YYYY")}</Typography>
        <IconButton onClick={handleNextMonth}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
      {renderCalendar}
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClosePopover}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography variant="h6">
            {selectedDayDetails.exchangeHoliday
              ? selectedDayDetails.exchangeHoliday.name
              : "No Events"}
          </Typography>
          {selectedDayDetails.exchangeHoliday && (
            <Typography>
              {selectedDayDetails.exchangeHoliday.name} (
              {selectedDayDetails.exchangeHoliday.country})
            </Typography>
          )}
        </Box>
      </Popover>
    </Box>
  );
};

export default CustomCalendar;
