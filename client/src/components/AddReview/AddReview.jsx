import React, { useState, useEffect }from 'react'
import { FaStar } from "react-icons/fa"
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { getDetail, addReview } from '../../redux/actions';

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9"
  
};

export default function AddReview({productId}){
  const initialState = {
    productId: productId,
    userId: "88e29e02-ce4f-4111-98c1-163554eb1636",
    comment: "",
    rating: 0
  };

  const [review, setReview] = useState(initialState);

  // aca me tengo que traer el id del usuario que esta regostrado
  // const userOne = useSelector((state) => state.petitionsReducer.userOne)
  // useEffect(() => {
  //   if (userOne) {
  //     setReview({
  //       ...review,
  //       userId: userOne.id
  //     })
  //   }  },[userOne]);



  const dispatch = useDispatch()
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0)

  const handleClick = value => {
    setReview({
      ...review,
      rating: value
    })
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }

  const handleOnChange = (e) => {
    setReview({
        ...review,
        [e.target.name]: e.target.value
    })
  }

  //Alertas
  const successAlert = () => {
    Swal.fire({
        title: 'Review created successfully',
        confirmButtonText: "Ok",
        timer: 3000,
        icon: "success"
    });
  }
  
    const ratingAlert = () => {
      Swal.fire({
          title: 'The rating field is required',
          confirmButtonText: "Ok",
          timer: 3000,
          icon: "error"
      });
    }
    const commetAlert = () => {
      Swal.fire({
          title: 'The comment field is required',
          confirmButtonText: "Ok",
          timer: 3000,
          icon: "error"
      });
    }
    const userIdAlert = () => {
      Swal.fire({
          title: 'You must log in',
          confirmButtonText: "Ok",
          timer: 3000,
          icon: "error"
      });
    }

    const handleSubmit = () => {
      if (!review.rating) {return ratingAlert() }
      if (!review.comment) {return commetAlert() }
      if (!review.userId) {return userIdAlert() }
      console.log("esto es review", review)

      dispatch(addReview(review))
      successAlert()
      setReview({ ...initialState})
      dispatch(getDetail(productId))
    }




  return(
    <div>
      <h2>Add Review</h2>
        <div>
          {stars.map((_, index) => {
            return (
              <FaStar
                key={index}
                size={24}
                onClick={() => handleClick(index + 1)}
                onMouseOver={() => handleMouseOver(index + 1)}
                onMouseLeave={handleMouseLeave}
                color={(hoverValue || review.rating) > index ? colors.orange : colors.grey}
                style={{
                  marginRight: 10,
                  cursor: "pointer"
                }}
              />
            )
          })}
        </div>
        <textarea
          placeholder="What's your reference?"
          value={review.comment} 
          name='comment' 
          onChange={handleOnChange}
        />
        <button type='button' onClick={handleSubmit}>Submit</button>
    </div>
  )
}