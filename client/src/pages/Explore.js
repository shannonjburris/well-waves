import React from 'react';
import generateSound from '../utils/generateRandSound';

function Explore() {
  //create hook & arrow function
  <script>
    document.getElementById("randomSound").innerHTML =
    Math.floor(Math.random() * 100);
    console.log(randomSound);
  </script>
  return (
    <div>
      <p>There's a world of sound out there just waiting to be discovered.</p>
      <p>Click the button below to explore!</p>
      <button id="randomSound">{generateSound}Generate</button>
    </div>

  )
};
export default Explore;
