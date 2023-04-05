import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import DatePicker, { CalendarContainer } from "react-datepicker";
import Footer from "../../components/Footer";
import PitchBooking from "../test";
import DataTable from "../../components/ScheduleBooking";

const BookingPage = () => {
  const token = useSelector((state) => state.global.token);
  const user = useSelector((state) => state.global.user);
  const [startDate, setStartDate] = useState(null);

  const currentDate = new Date();
  const oneWeekLater = new Date(
    currentDate.getTime() + 7 * 24 * 60 * 60 * 1000
  );
  const MyContainer = ({ className, children }) => {
    return (
      <div style={{ padding: "0px", background: "#", color: "#fff" }}>
        <CalendarContainer className={className}>
          {/* <div style={{ background: "#f0f0f0" }}>Choose your date?</div> */}
          <div style={{ position: "relative" }}>{children}</div>
        </CalendarContainer>
      </div>
    );
  };

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <div className="booking_banner-container">
        <div className="booking_banner-content">
          <div className="hero-text p-3 px-3 bg-light rounded-4 bg-opacity-50 color-green">
            <h1>Book now</h1>
            <p className="fs-5 pt-1 pb-1">
              Find and book your perfect futsal pitch online, hassle-free.
            </p>
          </div>
        </div>
      </div>

      {/* OUR PITCHES */}
      {/* <OurPitches /> */}

      <div className="container d-flex flex-column justify-content-center mx-auto mt-5">
        {/* CHOOSE PITCH */}
        {/* <select
          class="form-select form-select mb-3 w-50 mx-auto"
          aria-label=".form-select example"
        >
          <option value="1" selected>
            SÂN VẬN ĐỘNG PHÚ THỌ
          </option>
          <option value="2">NGUYỄN VĂN LINH</option>
          <option value="3">HOÀNG KIM</option>
          <option value="4">KHÁNH HỘI</option>
          <option value="5">THỐNG NHẤT</option>
        </select> */}

        {/* DATE PICKER */}
        {/* <div className="mt-3 d-flex justify-content-center">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            minDate={currentDate}
            maxDate={oneWeekLater}
            showDisabledMonthNavigation
            inline
            calendarContainer={MyContainer}
          />
        </div> */}

        {/* SCHEDULE */}
        {/* {startDate && <DataTable />} */}

        {/* test */}
        <PitchBooking />
      </div>

      <Footer />
    </div>
  );
};

export default BookingPage;
