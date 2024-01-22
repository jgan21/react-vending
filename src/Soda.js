import React from "react";
import { Link } from "react-router-dom";

/** Soda - display soda, message and link to return to home page.
 *
 * State: none.
 *
 * Props: none.
 *
 */
function Soda(){
  return (
    <div>
      <h1>OMG SUGAR!</h1>
      <h1><Link to="/">Go Back</Link></h1>
    </div>
  )
}

export default Soda;