import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import OurPitches from "../../components/OurPitches";

const HomePage = () => {
  const [pitches, setPitches] = useState(null);

  // useEffect{() => {}, []}

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <div className="hero-container">
        <div className="hero-content px-3 container">
          <div className="hero-text p-5 bg-light rounded-4 bg-opacity-50 color-green">
            <h1>Rent Futsal Pitches Online</h1>
            <p className="fs-5 pt-2 pb-1">
              Find and book your perfect futsal pitch online, hassle-free.
            </p>
            <Button variant="success">Book Now</Button>
          </div>
        </div>
      </div>

      {/* OUR PITCHES */}
      <OurPitches />
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

export default HomePage;
