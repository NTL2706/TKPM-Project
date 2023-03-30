import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import DatePicker from "react-datepicker";

const BookingPage = () => {
  const token = useSelector((state) => state.global.token);
  const user = useSelector((state) => state.global.user);
  const [startDate, setStartDate] = useState(null);

  const currentDate = new Date();
  const oneWeekLater = new Date(
    currentDate.getTime() + 7 * 24 * 60 * 60 * 1000
  );

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <div className="booking_banner-container">
        <div className="booking_banner-content">
          <div className="hero-text p-5 bg-light rounded-4 bg-opacity-50 color-green">
            <h1>Book now</h1>
            <p className="fs-5 pt-2 pb-1">
              Find and book your perfect futsal pitch online, hassle-free.
            </p>
          </div>
        </div>
      </div>

      {/* OUR PITCHES */}
      {/* <OurPitches /> */}

      <div className="container d-flex flex-column justify-content-center mx-auto mt-5">
        {/* CHOOSE PITCH */}
        <select
          class="form-select form-select-lg mb-3 w-50 mx-auto"
          aria-label=".form-select-lg example"
        >
          {/* <option selected>Open this select menu</option> */}
          <option value="1" selected>
            SÂN VẬN ĐỘNG PHÚ THỌ
          </option>
          <option value="2">NGUYỄN VĂN LINH</option>
          <option value="3">HOÀNG KIM</option>
          <option value="4">KHÁNH HỘI</option>
          <option value="5">THỐNG NHẤT</option>
        </select>

        {/* DATE PICKER */}
        <div className="mt-3 d-flex justify-content-center">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            minDate={currentDate}
            maxDate={oneWeekLater}
            showDisabledMonthNavigation
            inline
          />
        </div>
      </div>

      {/* FEATURE & ABOUT US */}
      {/* <Container>
        <Row>
          <Col>
            <h2>Features</h2>
            <ul>
              <li>Search for futsal pitches in your area</li>
              <li>View pitch availability and prices</li>
              <li>Book and pay for pitches online</li>
              <li>Rate and review pitches you have played on</li>
            </ul>
          </Col>
          <Col>
            <h2>About Our Pitches</h2>
            <p>
              Our futsal pitches are top quality and maintained to a high
              standard. We offer a variety of pitch sizes and surfaces to suit
              your needs, from beginner to professional level. Book now and
              experience the best futsal pitches in town.
            </p>
          </Col>
        </Row>
      </Container> */}
    </div>
  );
};

export default BookingPage;
