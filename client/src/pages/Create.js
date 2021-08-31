import React from 'react';
import useSound from 'use-sound';
// import test from '../sounds/cityambient.mp3';

export default function Create() {
    const soundUrl = '../assets/sounds/cityambient.mp3';
  
    const [playbackRate, setPlaybackRate] = React.useState(0.75);
  
    const [play] = useSound(soundUrl, {
      playbackRate,
      volume: 0.5,
    });
  
    const handleClick = () => {
      setPlaybackRate(playbackRate + 0.1);
      play();
    };
  
    return (
    <div>
      <button onClick={handleClick}>
        <span role="img" aria-label="Heart">
          💖
        </span>
      </button>
    </div>
    );
  }
