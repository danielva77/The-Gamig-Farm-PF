import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { changePage } from "../../redux/actions"
import "../Paginado/paginado.css"


export default function Paginado() {
  const dispatch = useDispatch()

  const numbersPaginated = useSelector(state => state.numbersPaginated)

  const handleClick = e => {
    // setButtonColor('hsl(305, 33%, 69%, .8)')
    // e.target.style.backgroundColor = buttonColor
    dispatch(changePage(e.target.value))

  }

  return (
    <div className="paginated-container">
      {numbersPaginated.map(button => {
        return (
          <button onClick={handleClick} value={button} className="botons">
            {button}
          </button>
        )
      })}
    </div>
    
  )
}
