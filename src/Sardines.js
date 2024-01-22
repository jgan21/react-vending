import React, { useState } from "react";
import { Link } from "react-router-dom";

function Sardines(){

  const [chipsEaten, setChipsEaten] = useState(0);

  function handleClick(evt){
    setChipsEaten(eatenSoFar=> ++eatenSoFar)
  }

  return (
    <div className="Sardines">
      <h1><Link to="/">RAAAAAAAAAAAAWR.</Link></h1>
    </div>
  )
}

export default Sardines;