import React from "react";
// import './Cards.css'
import { Card, Button } from "react-bootstrap";

const Cards = props => {
  console.log(props);
  const { imgUrl, bookName, authorName, price } = props.bookInfo;
  return (
    <Card className="col-md-3 col-sm-1 mx-auto my-2" style={{ width: "14rem" }}>
      <Card.Img
        style={{
          height: "15rem",
          objectFit: "fill",
        }}
        variant="top"
        src={imgUrl}
      />
      <Card.Body>
        <div style={{ height: "7rem" }} className="text-center">
          <Card.Title>{bookName}</Card.Title>
          <Card.Text>{authorName}</Card.Text>
        </div>
        <div className="d-flex justify-content-between align-items-end">
          <h5>${price}</h5>
          <Button variant="success">Buy Now</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Cards;
