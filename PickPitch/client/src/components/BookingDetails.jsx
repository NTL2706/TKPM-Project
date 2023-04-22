import React, { useState } from "react";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Checkbox,
  Button,
} from "@mui/material";

import SendIcon from "@mui/icons-material/Send";

const BookingDetail = () => {
  const date = new Date().toLocaleString("vi-VN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [checkedTerm, setCheckedTerm] = useState(false);

  const handleChooseMethodPayment = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleClickTerm = (event) => {
    setCheckedTerm(event.target.checked);
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

      <div className="container d-flex flex-column justify-content-center mx-auto mt-5">
        <Container className="d-flex flex-column justify-content-center">
          {/* Booking detail */}
          <div>
            <h2>Booking details</h2>
            <h5 className="pt-2">Sân Phú Thọ Hòa</h5>
            <Typography variant="body1">{date}</Typography>

            {/* list of chosen time and pitch */}
            <div>
              <div className="d-flex">
                <Typography variant="body1" className="pe-3 fw-semibold">
                  San 1
                </Typography>
                <Typography variant="body1">8pm - 9pm</Typography>
              </div>

              <div className="d-flex">
                <Typography variant="body1" className="pe-3 fw-semibold">
                  San 1
                </Typography>
                <Typography variant="body1">9pm - 10pm</Typography>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="mt-5">
            <h2>Payment Method</h2>

            {/* list of chosen time and pitch */}
            <div className="d-flex flex-column">
              {/* <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="paymentMethod"
                  id="cash"
                  value="cash"
                  checked={paymentMethod === "cash"}
                  onChange={handleChooseMethodPayment}
                />
                <label className="form-check-label" htmlFor="cash">
                  Pay with Cash
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="paymentMethod"
                  id="momo"
                  value="momo"
                  checked={paymentMethod === "momo"}
                  onChange={handleChooseMethodPayment}
                />
                <label className="form-check-label" htmlFor="momo">
                  Pay with Momo
                </label>
              </div> */}

              <FormControl component="fieldset">
                <RadioGroup
                  name="paymentMethod"
                  value={paymentMethod}
                  onChange={handleChooseMethodPayment}
                >
                  <FormControlLabel
                    value="cash"
                    control={<Radio />}
                    label="Pay with Cash"
                  />
                  <FormControlLabel
                    value="momo"
                    control={<Radio />}
                    label="Pay with Momo"
                  />
                </RadioGroup>
              </FormControl>

              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkedTerm}
                    onChange={handleClickTerm}
                    name="acceptTerms"
                    color="primary"
                  />
                }
                label="I accept the terms and conditions"
              />

              <Button
                variant="contained"
                className="w-25"
                endIcon={<SendIcon />}
              >
                Confirm my booking
              </Button>
            </div>
          </div>

          {/* test */}
          <div class="row d-flex justify-content-between">
            <div class="col-12 col-lg-8 mt-5 order-confirm">
              <h4 class="mb-3">Shipping Info</h4>
              <p>
                <b>Name:</b> Ghulam Abbas
              </p>
              <p>
                <b>Phone:</b> 111 111 1111
              </p>
              <p class="mb-4">
                <b>Address:</b> 2968, Oakwood Circle, DENVILLE, 07834, USA
              </p>

              <hr />
              <h4 class="mt-4">Your Cart Items:</h4>

              <hr />
              <div class="cart-item my-1">
                <div class="row">
                  <div class="col-4 col-lg-2">
                    {/* <img src="./images/airpords.jpg" alt="Laptop" height="45" width="65"> */}
                  </div>

                  <div class="col-5 col-lg-6">
                    <a href="#">HP 15-CX0056WM Laptop, 15.6" FHD</a>
                  </div>

                  <div class="col-4 col-lg-4 mt-4 mt-lg-0">
                    <p>
                      1 x $89.99 = <b>$89.99</b>
                    </p>
                  </div>
                </div>
              </div>
              <hr />
            </div>

            <div class="col-12 col-lg-3 my-4">
              <div id="order_summary">
                <h4>Order Summary</h4>
                <hr />
                <p>
                  Subtotal: <span class="order-summary-values">$45</span>
                </p>
                <p>
                  Shipping: <span class="order-summary-values">$25</span>
                </p>
                <p>
                  Tax: <span class="order-summary-values">$0</span>
                </p>

                <hr />

                <p>
                  Total: <span class="order-summary-values">$123</span>
                </p>

                <hr />
                <button id="checkout_btn" class="btn btn-primary btn-block">
                  Proceed to Payment
                </button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default BookingDetail;
