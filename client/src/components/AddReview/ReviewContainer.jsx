import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReviews, disabledReviews } from "../../redux/actions";
import Review from "./Review";
import { FaStar } from "react-icons/fa";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

export default function ReviewContainer({ productId }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getReviews());
  }, [dispatch]);

  const stars = Array(5).fill(0);
  const reviews = useSelector((state) => state.reviews);

  let reviewsById = reviews.filter((e) => e.productId === productId);
  console.log("ESTO ES REVIEWBYID,", reviewsById);

  let average = 0;
  if (reviewsById.length > 0) {
    let length = reviewsById.length;
    let sum = 0;
    let calc = reviewsById.map((e) => (sum = sum + e.rating));
    average = sum / length;
  }

  return (
    <div>
      <div>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={15}
              color={average > index ? colors.orange : colors.grey}
            />
          );
        })}
        <p>Promedio : {average}</p>
      </div>
      {reviewsById.length ? (
        <div>
          {reviewsById.map(({ id, rating, comment, createdAt }, i) => (
            <div key={i}>
              <Review rating={rating} comment={comment} createdAt={createdAt} />
              <div>
                <button onClick={disabledReviews(id)}>
                  Eliminar este comentario
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h2>This product has no reviews at the moment</h2>
        </div>
      )}
    </div>
  );
}
