import React from "react";
import { Button } from "reactstrap";
import "./index.css";

const MusicButton = (props) => {
  return (
    <div className="music-buttons">
      <Button color={props.color} size="lg" ClassName="music-button">
        <a href={props.link} className="music-button-link">
          {props.title}
        </a>
      </Button>
    </div>
  );
};

export default MusicButton;
