import React from 'react'
import { FaStar } from "react-icons/fa"

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9"
};

function Review({rating, comment, createdAt}) {

  const stars = Array(5).fill(0)

  return (
    <div>
      {stars.map((_, index) => {
        return (
          <FaStar
            key={index}
            size={15}
            color={rating > index ? colors.orange : colors.grey}
          />
        )
      })}
      <p>{createdAt.split('T')[0]}</p>
      <p>{comment}</p>
    </div>
  )
}

export default Review;