import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";
import pitch_icon from "../assets/img/pitch_icon.png";
import React, { useEffect, useState } from "react";
import axios from "../state/axios-instance";

const OurPitches = () => {
  // FETCH PITCH

  const [stadiums, setStadiums] = useState([]);
  useEffect(() => {
    axios
      .get("/api/stadium")
      .then((res) => setStadiums(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section id="our-venues">
      <Container>
        <div className="d-inline-flex my-5" style={{ height: "50px" }}>
          <Image src={pitch_icon} height="100%" />
          {/* <h2 className=" fs-1 fw-bold">Our Pitches</h2> */}
          <div className="fs-1 fw-bold">Our Pitches</div>
        </div>
        <Row className="gx-4">
          {stadiums.map((stadium) => (
            <Col key={stadium._id} xs={12} md={4} className="mb-4">
              <Card style={{}}>
                <Card.Img
                  variant="top"
                  className=""
                  src={stadium.image}
                  alt={stadium.name}
                />
                <Card.Body>
                  <Card.Title>{stadium.name}</Card.Title>
                  <Card.Text>{stadium.address}</Card.Text>
                  <div className="d-flex gap-3">
                    <Button variant="outline-success">View Details</Button>
                    <Button
                      variant="success"
                      className="ml-3"
                      href={`/booking?stadium=${encodeURIComponent(
                        stadium._id
                      )}`}
                    >
                      Book Now
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default OurPitches;
