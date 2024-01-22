import React, { useState } from "react";
import { Link } from "react-router-dom";

/** Sardines : display message and link back to home page.
 *
 * state: none
 *
 * props: none
 *
 */
function Sardines(){
  return (
    <div className="Sardines">
      <h1><Link to="/">RAAAAAAAAAAAAWR.</Link></h1>
    </div>
  )
}

export default Sardines;