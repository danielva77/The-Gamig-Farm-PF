import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByJoystick } from "../../redux/actions";
import "./JoystickFilter.css";

export default function Mando() {
  const dispatch = useDispatch();
  return (
    <div>
      <button class="filterMark3" onClick={() => dispatch(filterByJoystick())}>
        Mandos
      </button>
    </div>
  );
}
