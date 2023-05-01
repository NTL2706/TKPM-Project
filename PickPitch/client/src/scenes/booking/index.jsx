<<<<<<< HEAD
import React, { useEffect, useState } from "react";
// import { Container, Row, Col, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import DatePicker, { CalendarContainer } from "react-datepicker";
import Footer from "../../components/Footer";
import PitchBooking from "../test";
import DataTable from "../../components/ScheduleBooking";

// TEST
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  Button,
  TableRow,
  IconButton,
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DateSelector from "../../components/DateSelector";
import { useLocation } from "react-router-dom";
import { array } from "prop-types";

const rows = [
  { index: 1, time: "8am-9am", price: "300.000", booked: false },
  { index: 2, time: "9am-10am", price: "300.000", booked: false },
  { index: 3, time: "10am-11am", price: "300.000", booked: false },
  { index: 4, time: "11am-12pm", price: "300.000", booked: false },
  { index: 5, time: "12pm-1pm", price: "300.000", booked: false },
  { index: 6, time: "1pm-2pm", price: "300.000", booked: false },
  { index: 7, time: "2pm-3pm", price: "300.000", booked: true },
  { index: 8, time: "3pm-4pm", price: "300.000", booked: false },
  { index: 9, time: "4pm-5pm", price: "300.000", booked: false },
  { index: 10, time: "5pm-6pm", price: "300.000", booked: false },
  { index: 11, time: "6pm-7pm", price: "500.000", booked: true },
  { index: 12, time: "7pm-8pm", price: "500.000", booked: true },
  { index: 13, time: "8pm-9pm", price: "500.000", booked: false },
  { index: 14, time: "9pm-10pm", price: "500.000", booked: false },
];

// Sample data
const sampleData = [
  { time: "10:00", price: 50, booked: false },
  { time: "11:00", price: 50, booked: true },
  { time: "12:00", price: 50, booked: false },
];

const BookingPage = () => {
  const token = useSelector((state) => state.global.token);
  const user = useSelector((state) => state.global.user);

  /*  ADD PART */
  const [schedule, setSchedule] = useState([]);
  const [selectedStadium, setSelectedStadium] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [informationTicket, setInformationTicket] = useState([]);
  const location = useLocation();

  const [startDate, setStartDate] = useState(null);
  const currentDate = new Date();
  const oneWeekLater = new Date(
    currentDate.getTime() + 30 * 24 * 60 * 60 * 1000
  );

  const numberOfButtons = 14; // Adjust this value as needed
  const [iconClicked, setIconClicked] = useState(
    Array(numberOfButtons).fill(false)
  );

  // get stadium choice
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const stadium = searchParams.get("stadium");
    if (stadium) {
      setSelectedStadium(decodeURIComponent(stadium));
    }
  }, [location.search]);

  // Fetch Category of Stadium
  useEffect(() => {
    if (selectedStadium !== "") {
      // console.log("fetch API stadium:", selectedStadium);
    }
  }, [selectedStadium]);

  useEffect(() => {
    setSchedule(rows);
    // console.log("send api fetch schedule and booking data");
  }, [startDate]);

  useEffect(() => {
    console.log("total price:", totalPrice);
  }, [totalPrice]);

  useEffect(() => {
    console.log("information Ticket:", informationTicket);
  }, [informationTicket]);

  const handleSelectDate = (date) => {
    setStartDate(date);
    console.log("SEND API DATE:", date);
  };

  function handleScheduleClick(slot) {
    console.log("index:", slot);
    const updatedIconClicked = [...iconClicked];
    updatedIconClicked[slot.index] = !updatedIconClicked[slot.index];
    setIconClicked(updatedIconClicked);
    let total_price = totalPrice;
    if (updatedIconClicked[slot.index] === true) {
      total_price += Number(slot.price) * 1000;
      const newinfo = {
        time: slot.time,
        price: slot.price,
      };
      setInformationTicket([...informationTicket, newinfo]);
    } else {
      total_price -= Number(slot.price) * 1000;
      setInformationTicket(informationTicket.slice(0, -1));
    }
    setTotalPrice(total_price);
  }

  /* ****************************************  */

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

      <div className="container d-flex flex-column justify-content-center mx-auto mt-5">
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

        {/* ******************************** */}

        <Container className="d-flex flex-column justify-content-center">
          <h1 className="mb-3">Pitch Booking</h1>
          <select
            class="form-select form-select mb-3 w-50 mx-auto"
            aria-label=".form-select example"
            id="stadium-select"
            value={selectedStadium}
            onChange={(e) => setSelectedStadium(e.target.value)}
          >
            {/* <option selected>Open this select menu</option> */}
            <option value="SÂN VẬN ĐỘNG PHÚ THỌ">SÂN VẬN ĐỘNG PHÚ THỌ</option>
            <option value="NGUYỄN VĂN LINH">NGUYỄN VĂN LINH</option>
            <option value="HOÀNG KIM">HOÀNG KIM</option>
            <option value="KHÁNH HỘI">KHÁNH HỘI</option>
            <option value="THỐNG NHẤT">THỐNG NHẤT</option>
          </select>

          <select
            class="form-select form-select mb-3 w-50 mx-auto"
            aria-label=".form-select example"
          >
            <option value="5" selected>
              San 5
            </option>
            <option value="7">San 7</option>
            {/* <option value="4">KHÁNH HỘI</option>
        <option value="5">THỐNG NHẤT</option> */}
          </select>
          {/* <TextField
        label="Select date"
        type="date"
        // class="mx-auto"
        value={date.toISOString().substr(0, 10)}
        onChange={handleDateChange}
        InputLabelProps={{
          shrink: true,
        }}
      /> */}

          {/* DATE SELECTOR */}

          <div className="d-flex flex-column align-items-center">
            {/* <h1>Select a date</h1> */}
            <div className="w-100">
              <DatePicker
                selected={startDate}
                onChange={(date) => handleSelectDate(date)}
                inline
                minDate={currentDate}
                maxDate={oneWeekLater}
              />
            </div>
            {/* {
              <div className="confirm-btn" style={{ marginTop: "16px" }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => onDateChange(startDate)}
                >
                  Confirm
                </Button>
              </div>
            } */}
          </div>

          {/* TABLE BOOKING */}
          {startDate && (
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Time</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Booking</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {schedule.map((slot) => (
                  <TableRow>
                    <TableCell>{slot.time}</TableCell>
                    <TableCell>{slot.price} VND</TableCell>
                    <TableCell>
                      {slot.booked ? (
                        <IconButton
                          aria-label="delete"
                          style={{
                            color: "red",
                          }}
                          disabled
                        >
                          <CancelIcon disabled />
                        </IconButton>
                      ) : (
                        <IconButton
                          key={slot.index}
                          aria-label="delete"
                          onClick={() => handleScheduleClick(slot)}
                          style={{
                            color: iconClicked[slot.index] ? "green" : "gray",
                          }}
                        >
                          <CheckCircleIcon />
                        </IconButton>
                      )}
                      {/* <Button
                  variant="contained"
                  color="success"
                  disabled={slot.booked}
                  onClick={() => handleBooking(index)}
                >
                  {slot.booked ? "Booked" : "Book"}
                </Button> */}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </Container>
      </div>

      <Footer />

      {totalPrice !== 0 && (
        <div
          className="w-100 d-flex justify-content-between shadow-lg p-3 bg-success"
          style={{
            position: "fixed",
            bottom: 0,
            width: "100%",
            zIndex: 1,
            color: "white",
          }}
        >
          <div>
            <div>TOTAL PRICE</div>
            {totalPrice.toLocaleString("it-IT", {
              style: "currency",
              currency: "VND",
            })}
          </div>
          <Button variant="outline-success" style={{ zIndex: 1 }}>
            Book now
          </Button>
        </div>
      )}
    </div>
  );
};

export default BookingPage;
=======
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DatePicker, { CalendarContainer } from "react-datepicker";
import Footer from "../../components/Footer";
import PitchBooking from "../test";
import DataTable from "../../components/ScheduleBooking";
import axios from "../../state/axios-instance";
import Loading from "../../components/Loading";

// TEST
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  Button,
  TableRow,
  IconButton,
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useLocation, useNavigate } from "react-router-dom";

const BookingPage = () => {
  const token = useSelector((state) => state.global.token);
  const user = useSelector((state) => state.global.user);
  const location = useLocation();
  const navigate = useNavigate();

  /*  ADD PART */
  const [stadiums, setStadiums] = useState([]);
  const [selectedStadium, setSelectedStadium] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCategories] = useState([true, true]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [informationTicket, setInformationTicket] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [bookingTime, setBookingTime] = useState([]);

  const [startDate, setStartDate] = useState(null);
  const currentDate = new Date();
  const oneWeekLater = new Date(
    currentDate.getTime() + 30 * 24 * 60 * 60 * 1000
  );
  // Adjust this value as needed
  const [iconClicked2, setIconClicked2] = useState({});

  //load stadium
  useEffect(() => {
    axios
      .get("/api/stadium")
      .then((res) => setStadiums(res.data))
      .catch((err) => console.log(err));
  }, []);

  // get stadium choice
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const stadium = searchParams.get("stadium");
    if (stadium) {
      setSelectedStadium(decodeURIComponent(stadium));
    }
  }, [location.search]);

  // Fetch Category of Stadium
  useEffect(() => {
    if (selectedStadium !== "") {
      axios
        .get(`/api/stadium/${selectedStadium}/category`)
        .then((res) => setCategories(res.data))
        .catch((err) => console.log(err));
    }
  }, [selectedStadium]);

  useEffect(() => {
    console.log("total price:", totalPrice);
  }, [totalPrice]);

  useEffect(() => {
    console.log("information Ticket:", informationTicket);
  }, [informationTicket]);

  useEffect(() => {
    if (bookingTime.length > 0) {
      console.log("booking time:", bookingTime);
      const newIconClicked = {};
      bookingTime.forEach((booking) => {
        booking.time.forEach((time, index) => {
          const key = `${index}_${booking.pitch._id}`;
          newIconClicked[key] = false;
        });
      });
      setIconClicked2(newIconClicked);
    }
  }, [bookingTime]);

  const handleSelectDate = (date) => {
    setStartDate(date);
  };

  const handleGetBookingTime = async () => {
    setIsLoading(true);
    try {
      // console.log("date:", startDate);
      const res = await axios.get(
        `/api/stadium/${selectedStadium}/category/${selectedCategory}`,
        {
          params: {
            date: `${startDate}`,
          },
        }
      );
      setBookingTime(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  function handleScheduleClick(slot, price, pitchId, index) {
    const updatedIconClicked2 = iconClicked2;
    console.log("slot", slot);
    console.log("pitchId", pitchId);
    console.log("index", index);

    updatedIconClicked2[index + "_" + pitchId] =
      !updatedIconClicked2[index + "_" + pitchId];
    setIconClicked2(updatedIconClicked2);

    let total_price = totalPrice;
    if (updatedIconClicked2[index + "_" + pitchId] === true) {
      total_price += Number(price);
      console.log("BOOKING TIME SS", bookingTime);
      const pitchName = bookingTime.filter(
        (book) => book.pitch._id === pitchId
      )[0].pitch.name;

      console.log("PITCH NAME SS:", pitchName);

      const newinfo = {
        pitchId,
        pitchName,
        time: slot.start + "-" + slot.end,
        price: price,
      };
      setInformationTicket([...informationTicket, newinfo]);
    } else {
      total_price -= Number(price);

      const filteredInformationTicket = informationTicket.filter((info) => {
        return !(
          info.pitchId === pitchId &&
          info.time === slot.start + "-" + slot.end &&
          info.price === price
        );
      });
      setInformationTicket(filteredInformationTicket);
      setInformationTicket(filteredInformationTicket);
    }
    setTotalPrice(total_price);
  }

  const handleNavigate = () => {
    const stadiumName = stadiums.filter(
      (stadium) => stadium._id === selectedStadium
    )[0].name;
    const data = {
      totalPrice,
      informationTicket,
      stadiumName,
      stadiumId: selectedStadium,
      date: startDate,
    };
    navigate("/bookingDetail", { state: { data } });
  };

  /* ****************************************  */

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

      <div className="container d-flex flex-column justify-content-center mx-auto mt-5">
        {/* ******************************** */}

        <Container className="d-flex flex-column justify-content-center">
          <h1 className="mb-3">Pitch Booking</h1>
          <select
            class="form-select form-select mb-3 w-50 mx-auto"
            aria-label=".form-select example"
            id="stadium-select"
            value={selectedStadium}
            onChange={(e) => {
              setSelectedStadium(e.target.value);
              setSelectedCategory("");
              setIsClicked(false);
              setInformationTicket([]);
              setTotalPrice(0);
            }}
          >
            {stadiums.map((stadium) => (
              <option value={stadium._id} key={stadium._id}>
                {stadium.name}
              </option>
            ))}
          </select>

          <select
            class="form-select form-select mb-3 w-50 mx-auto"
            aria-label=".form-select example"
            id="category-select"
            value={selectedCategory}
            onChange={(e) => {
              setIsClicked(false);
              setSelectedCategory(e.target.value);
              setInformationTicket([]);
              setTotalPrice(0);
            }}
          >
            <option value="" disabled selected>
              Select category
            </option>
            {categories.San5 && <option value="San5">San 5</option>}
            {categories.San7 && <option value="San7">San 7</option>}
          </select>

          {/* DATE SELECTOR */}

          <div className="d-flex flex-column align-items-center">
            {/* <h1>Select a date</h1> */}
            <div className="w-100">
              <DatePicker
                selected={startDate}
                onChange={(date) => handleSelectDate(date)}
                inline
                minDate={currentDate}
                maxDate={oneWeekLater}
              />
            </div>
            {
              <div className="confirm-btn" style={{ marginTop: "16px" }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    setIsClicked(true);
                    handleGetBookingTime();
                    setInformationTicket([]);
                    setTotalPrice(0);
                  }}
                >
                  Confirm
                </Button>
              </div>
            }
          </div>

          {isLoading && selectedCategory && selectedStadium && startDate && (
            <Loading />
          )}

          {/* TABLE BOOKING */}
          {startDate &&
            selectedCategory &&
            selectedStadium &&
            !isLoading &&
            isClicked && (
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Time</TableCell>
                    <TableCell>Price</TableCell>
                    {bookingTime.map((time) => (
                      <TableCell key={time.pitch.name} colSpan={time.colSpan}>
                        {time.pitch.name}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {bookingTime[0].time.map((timeSlot, index) => (
                    <TableRow key={index}>
                      <TableCell>{`${timeSlot.start} - ${timeSlot.end}`}</TableCell>
                      <TableCell>
                        {index < 11
                          ? bookingTime[0].priceDaytime
                          : bookingTime[0].priceNighttime}{" "}
                        VND
                      </TableCell>
                      {bookingTime.map((booking) => (
                        <TableCell key={booking.pitch._id}>
                          {booking.time[index].check ? (
                            <IconButton
                              aria-label="delete"
                              style={{
                                color: "red",
                              }}
                              disabled
                            >
                              <CancelIcon disabled />
                            </IconButton>
                          ) : (
                            <IconButton
                              aria-label="check"
                              onClick={() =>
                                handleScheduleClick(
                                  booking.time[index],
                                  index < 11
                                    ? booking.priceDaytime
                                    : booking.priceNighttime,
                                  booking.pitch._id,
                                  index
                                )
                              }
                              style={{
                                color: iconClicked2[
                                  index + "_" + booking.pitch._id
                                ]
                                  ? "green"
                                  : "gray",
                              }}
                            >
                              <CheckCircleIcon />
                            </IconButton>
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
        </Container>
      </div>

      <Footer />

      {totalPrice !== 0 && (
        <div
          className="w-100 d-flex justify-content-between shadow-lg p-3 bg-success"
          style={{
            position: "fixed",
            bottom: 0,
            width: "100%",
            zIndex: 1,
            color: "white",
          }}
        >
          <div>
            <div>TOTAL PRICE</div>
            {totalPrice.toLocaleString("it-IT", {
              style: "currency",
              currency: "VND",
            })}
          </div>
          <Button
            onClick={handleNavigate}
            // href="/bookingDetail"
            variant="outline-success"
            style={{ zIndex: 1 }}
          >
            Book now
          </Button>
        </div>
      )}
    </div>
  );
};

export default BookingPage;
>>>>>>> 3616d9e9324cfc63d2cda72639ac253a0b62bdf4
