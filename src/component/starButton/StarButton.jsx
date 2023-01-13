import React from "react";
import ReactStars from "react-rating-stars-component";
import { IoIosStarOutline } from "react-icons/io";
export default function StarButton({ value }) {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <ReactStars
      count={5}
      onChange={ratingChanged}
      size={30}
      value={value}
      isHalf={true}
      emptyIcon={<i className="far fa-star"></i>}
      halfIcon={<i className="fa fa-star-half-alt"></i>}
      fullIcon={<i className="fa fa-star"></i>}
      activeColor="#ffd700"
    />
  );
}
