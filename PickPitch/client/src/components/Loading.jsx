import React, { useState } from "react";
import { PropagateLoader } from "react-spinners";
import "./DateSelector.css";
import { Button } from "@mui/material";

const Loading = ({ onDateChange }) => {
  const [startDate, setStartDate] = useState(new Date());

  const handleSelect = (date) => {
    setStartDate(date);
    onDateChange(date);
  };

  const currentDate = new Date();
  const oneWeekLater = new Date(
    currentDate.getTime() + 30 * 24 * 60 * 60 * 1000
  );

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="w-100"></div>
    </div>
  );
};

export default Loading;
