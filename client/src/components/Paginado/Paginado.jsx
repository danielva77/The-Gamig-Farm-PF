import React from "react"
import {useState} from "react"
import { useDispatch, useSelector  } from "react-redux"
import { changePage } from "../../redux/actions"
import "../Paginado/paginado.css"
import Pagination from "@mui/material/Pagination";

export default function Paginado() {
  const dispatch = useDispatch()
  const numbersPaginated = useSelector(state => state.numbersPaginated)
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
    dispatch(changePage(value));
  };

  return (
    <div className="paginated-container">
      <Pagination 
        count={numbersPaginated.length}
        page={page}
        onChange={handleChange}
        variant="outlined"
        shape="rounded"
        className="botons"
      />
    </div>
  )
}
