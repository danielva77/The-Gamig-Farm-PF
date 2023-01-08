import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { changePage } from "../../redux/actions"

export default function Paginado() {
  const dispatch = useDispatch()

  const sorted = useSelector(state => state.sorted)
  const itemsPerPage = useSelector(state => state.itemsPerPage)
  const currentPage = useSelector(state => state.currentPage)

  // la cantidad de paginas
  const amountOfPages = Math.ceil(sorted.length / itemsPerPage)

  const numberButtons = []

  for (let i = 1; i <= amountOfPages; i++) {
    numberButtons.push(i)
  }

  const handleClick = e => {
    // setButtonColor('hsl(305, 33%, 69%, .8)')
    // e.target.style.backgroundColor = buttonColor
    dispatch(changePage(e.target.value))
  }

  return (
    <div className="paginated-container">
      {numberButtons.map(button => {
        if (button === currentPage) {
          return (
            <button onClick={handleClick} value={button}>
              {button}
            </button>
          )
        }
        return (
          <button onClick={handleClick} value={button}>
            {button}
          </button>
        )
      })}
    </div>
  )
}
