import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import MusicButton from "../components/Button";
import SoundWaves from "../assets/sound-waves.jpg";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <Container className="homepage-container">
      <Row>
        <Col md="8" sm="12" className="main-section">
          <h4>Daily Sound:</h4>
          <Row>
            <Col>
              <div className="main-img-container">
                <img src={SoundWaves} alt="soundwaves" />


                <div className="audio-player">
                <figure>
                <figcaption>Listen City Ambient:</figcaption>
                <audio controls src="https://sounds-project-gg.s3.amazonaws.com/mp3+sounds/cityambient.mp3">
                  Your browser does not support the
                  <code>audio</code> element.
                </audio>
              </figure>
                </div>


                <div className="tags">
                  <p className="tag">Tags: Sleep</p>
                </div>
                <div className="favorite-button">
                <Button>Add to Favorites</Button>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
        <Col md="4" className="sidebar">
          <h4>Explore by Intention:</h4>
          <Row>
            <Col md="12">
              <Row className="music-button-row">
                <Col className="music-button-col">
                  <MusicButton color="primary" title="Calm" link="/calm"/>
                </Col>
              </Row>
              <Row>
                <Col className="music-button-col">
                  <MusicButton color="secondary" title="Study" link="study"/>
                </Col>
              </Row>
              <Row>
                <Col className="music-button-col">
                  <MusicButton color="success" title="Energize" link="/energize"/>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
