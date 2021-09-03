import React from 'react';
import useSound from 'use-sound';
// import test from '../assets/sounds/sprite.mp3';

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

      // number player
      
    };


    
    return (
    <div>
        <h4>Singing Bowl</h4>
        <p>Click the bowl to make the singing bowl sing and experiment with frequency. The more you click, the higher it gets.</p>
      <button onClick={handleClick.bind()}>
        <span id="../assets/sounds/singingbowl.mp3" role="img" aria-label="Heart">
        🥣 
        </span>
      </button>
      <button onClick={handleClick.bind()}>
        <span id="../assets/sounds/tuningfork.mp3" role="img" aria-label="Heart">
        🥣 
        </span>
      </button>
    </div>
    
    );
  }
