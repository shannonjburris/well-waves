import React from 'react';
import useSound from 'use-sound';
// import test from '../assets/sounds/sprite.mp3';
import TuningFork from '../components/Tuning'
import Sprite from '../components/Sprite'
import "./Create.css"


export default function Create() {
    let soundUrlBowl = '../assets/sounds/singingbowl.mp3';
  
    const [playbackRate, setPlaybackRate] = React.useState(0.75);
  
    const [play] = useSound(soundUrlBowl, {
      playbackRate,
      volume: 0.5,
    });
  
    const handleClick = (url) => {
      soundUrlBowl = url.target.getAttribute('id');
      setPlaybackRate(playbackRate + 0.1);
      play();

     
      
    };
    return (
    <div class="create-container">
      <div class="bowl">
        <h4>Singing Bowl</h4>
        <br></br>
        <p color="white" id="create-desc">Click the bowl to make the singing bowl sing and experiment with frequency. The more you click, the higher it gets.</p>
      <button onClick={handleClick.bind()}>
        <span id="../assets/sounds/singingbowl.mp3 instrument" role="img" aria-label="Heart">
        <div>🥣 </div>
        </span>
       
      </button>
      </div>
      <br></br>
      <br></br>
      <div class="tuning-fork">
      <TuningFork></TuningFork>
      </div>
      <div class="sprite"></div>
      <Sprite></Sprite>
    </div>
    
    );
  }
