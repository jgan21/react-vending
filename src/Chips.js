import React, { useState } from "react";
import { Link } from "react-router-dom";

function Chips(){

  const [chipsEaten, setChipsEaten] = useState(0);

  function handleClick(evt){
    setChipsEaten(eatenSoFar=> ++eatenSoFar)
  }

  return (
    <div className="Chips">
      <h1>Please. Don't eat me. I'm just a potato.</h1>
      <h1 onClick={handleClick}>Eat the chip.</h1>
      <div className="Chips-eaten">I'm so fat now {chipsEaten}</div>
      <h1 onClick={handleClick}><Link to="/">Juice cleanse.</Link></h1>
    </div>
  )
}

export default Chips;