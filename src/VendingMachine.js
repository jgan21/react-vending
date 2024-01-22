import React from "react";
import { Link } from "react-router-dom";

/**
 *
 * @returns
 */

function VendingMachine(){
  return(
    <div>
      <h1>Hello I am a vending maching. What would you like to eat</h1>
      <h2><Link to="/soda">soda</Link></h2>
      <h2><Link to="/chips">chips</Link></h2>
      <h2><Link to="/sardines">sardines</Link></h2>
    </div>
  )
}

export default VendingMachine;