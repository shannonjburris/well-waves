import React, { useState } from 'react';


const GenerateSound = () => {
    const [number, setNumber] = useState(0)
    const randSound = () => setNumber(Math.floor(Math.random()* 10))
    console.log("render Container")
    return (
        <>
          <p>{number}</p>
          <RandomButton randSound={randSound}/>
        </>
    )
  }
  const RandomButton = ({randSound}) => {
     console.log("render RandomButton")
     return <button onClick={randSound}>Generate</button>
  }
  export default GenerateSound;
  