import React from 'react';
import useSound from 'use-sound';
// import test from '../assets/sounds/sprite.mp3';

export default function Create() {
    const soundUrlBowl = '../assets/sounds/singingbowl.mp3';
  
    const [playbackRate, setPlaybackRate] = React.useState(0.75);
  
    const [play] = useSound(soundUrlBowl, {
      playbackRate,
      volume: 0.5,
    });
  
    const handleClick = () => {
      setPlaybackRate(playbackRate + 0.1);
      play();

      // number player
      

    };


    
    return (
    <div>
        <h4>Singing Bowl</h4>
        <p>Click the bowl to make the singing bowl sing and experiment with frequency. The more you click, the higher it gets.</p>
      <button onClick={handleClick}>
        <span role="img" aria-label="Heart">
        🥣 
        </span>
      </button>
    </div>
    
    );
  }
