import React from "react";
// import './Cards.css'

const Cards = props => {
  console.log(props);
  const { imgUrl, bookName, authorName, price } = props.bookInfo;
  return (
    <div>
      <div className="cardMain">
        <div className="cardDesc">
          <img src={imgUrl} alt="" className="cardImg" />
          <div className="cardDesc">
            <h3>{bookName}</h3>
            <p>{authorName}</p>
          </div>
        </div>
        <div className="cardPrice">
          <p>${price}</p>
          <button className="cardBuyNow">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
