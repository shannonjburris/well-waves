import React from "react";
import { Button } from "reactstrap";
import "./index.css";

const MusicButton = (props) => {
  return (
    <div className="music-buttons">
      <Button href={props.link} color={props.color} className="music-button">
          {props.title}
      </Button>
    </div>
  );
};

export default MusicButton;
