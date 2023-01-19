import React from 'react'
import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { getReviews } from '../../redux/actions';
import Review from './Review';

export default function ReviewContainer({productId}) {
  const dispatch = useDispatch();
  useEffect(() =>{
    dispatch(getReviews());
  }, [dispatch]);

  const reviews = useSelector(state => state.reviews)
  console.log("esto llega en revies", reviews)

  let reviewsById = reviews.filter(e => e.productId === productId)
  console.log("despues de filtrar", reviewsById)

  return (
    <div>
      { reviewsById.length ?
        <div>
            { reviewsById.map(({ rating, comment, createdAt}, i) => (
                <div key={i}>
                  <Review rating={rating} comment={comment} createdAt={createdAt}/>
                </div>
              ))}
        </div> :
        <div>
          <h2>This product has no reviews at the moment</h2>
        </div>
      }
    </div>
  )
}