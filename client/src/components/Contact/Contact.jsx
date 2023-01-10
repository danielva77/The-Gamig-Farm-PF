import React from "react";
import "../Contact/contact.css"
export default function Contact(){
  return(
    <div className="container-contact">
      <h1>Contact as</h1>
      <div className="cont-contact">
      <div class="mb-3 col-md-4" >
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email ..."/>
        </div>
        <div class="mb-3 col-md-4">
          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Name ..."/>
        </div>
        <div class="mb-3 col-md-4">
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Subject ..."></textarea>
        </div>
        <input type="submit" class="mb-3 btn-primary"/>
      </div>

    </div>
  )

}