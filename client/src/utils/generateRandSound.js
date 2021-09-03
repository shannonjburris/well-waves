import React, { useState } from 'react';
import {Button} from "reactstrap";


const GenerateSound = () => {
    const [number, setNumber] = useState(0)
    const randomId = () => setNumber(Math.floor(Math.random()* 100))
    const healWaves = [
        { id: 1, filename: "In-The-Garden.mp3"},
        { id: 2, filename: "2.mp3"},
        { id: 3, filename: "3.mp3"},
        { id: 4, filename: "4.mp3"},
        { id: 5, filename: "5.mp3"},
        { id: 6, filename: "6.mp3"},
        { id: 7, filename: "7.mp3"},
        { id: 8, filename: "8.mp3"},
        { id: 9, filename: "9.mp3"},
        { id: 10, filename: "10.mp3"}
    ];
    
    console.log(healWaves[number]);
    return (
        <>
          {/* <p>{number}</p> */}
          <RandomButton randSound={randomId}/>
        </>
    )
  }
  const RandomButton = ({randomId}) => {
     console.log("render RandomButton")
     return <Button onClick={randomId} style={{backgroundColor: "green"}}>Generate</Button>
  }
  export default GenerateSound;
  
  