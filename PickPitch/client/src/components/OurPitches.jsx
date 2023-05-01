<<<<<<< HEAD
import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";
import pitch_icon from "../assets/img/pitch_icon.png";
import venue1 from "../assets/img/pitch_1.jpg";
import venue2 from "../assets/img/pitch_2.jpg";
import venue3 from "../assets/img/pitch_3.jpg";
import venue4 from "../assets/img/pitch_4.jpg";
import venue5 from "../assets/img/pitch_5.jpg";

const venues = [
  {
    id: 1,
    name: "SÂN VẬN ĐỘNG PHÚ THỌ",
    location: "219 Lý Thường Kiệt",
    image: venue1,
  },
  {
    id: 2,
    name: "NGUYỄN VĂN LINH",
    location: "Lý Phục Man, Q.7",
    image: venue2,
  },
  {
    id: 3,
    name: "HOÀNG KIM",
    location: "615 Huỳnh Tấn Phát",
    image: venue3,
  },
  {
    id: 4,
    name: "KHÁNH HỘI",
    location: "229 Đường Số 48, Q.4",
    image: venue4,
  },
  {
    id: 5,
    name: "THỐNG NHẤT",
    location: "138 Đào Duy Từ, Q.10",
    image: venue5,
  },
];

const OurPitches = () => {
  // FETCH PITCH

  return (
    <section id="our-venues">
      <Container>
        <div className="d-inline-flex my-5" style={{ height: "50px" }}>
          <Image src={pitch_icon} height="100%" />
          {/* <h2 className=" fs-1 fw-bold">Our Pitches</h2> */}
          <div className="fs-1 fw-bold">Our Pitches</div>
        </div>
        <Row className="gx-4">
          {venues.map((venue) => (
            <Col key={venue.id} xs={12} md={4} className="mb-4">
              <Card style={{}}>
                <Card.Img
                  variant="top"
                  className=""
                  src={venue.image}
                  alt={venue.name}
                />
                <Card.Body>
                  <Card.Title>{venue.name}</Card.Title>
                  <Card.Text>{venue.location}</Card.Text>
                  <div className="d-flex gap-3">
                    <Button variant="outline-success">View Details</Button>
                    <Button
                      variant="success"
                      className="ml-3"
                      href={`/booking?stadium=${encodeURIComponent(
                        venue.name
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
=======
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
>>>>>>> 3616d9e9324cfc63d2cda72639ac253a0b62bdf4
