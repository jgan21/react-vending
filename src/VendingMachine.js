import React from "react";
import { Link } from "react-router-dom";

/** VendingMachine - display vending machine with links to food of choice.
 *
 * State: none
 *
 * Props: none
 *
 * VendingMachine -> Soda, Chips, Sardines.
 */

function VendingMachine(){
  return(
    <div>
      <h1>Hello, I am a vending machine. What would you like to eat?</h1>
      <h2><Link to="/soda">soda</Link></h2>
      <h2><Link to="/chips">chips</Link></h2>
      <h2><Link to="/sardines">sardines</Link></h2>
    </div>
  )
}

export default VendingMachine;