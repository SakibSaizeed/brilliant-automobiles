import { Button, Col, Container, Row } from "react-bootstrap";
import React from "react";
import Card from "react-bootstrap/Card";
import "./SingleService.css";
const SingleService = ({ service }) => {
  const { name, img } = service;
  return (
    <div className="single-card-container">
      <Card style={{ width: "20rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleService;
