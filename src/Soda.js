import React from "react";
import { Link } from "react-router-dom";

function Soda(){
  return (
    <div>
      <h1>OMG SUGAR!</h1>
      <h1><Link to="/">Go Back</Link></h1>
    </div>
  )
}

export default Soda;