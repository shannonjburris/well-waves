import React from "react";
import { Container, Row, Col } from "reactstrap";
import MusicButton from "../components/Button";
import "./Home.css";

function Home() {
  return (
    <Container fluid={true} className="homepage-container">
      <Row>
        <Col md="8" className="main-section"></Col>
        <Col md="4">
          <h4>Explore by Intention:</h4>
          <Row className="sidebar">
            <Col md="12">
              <Row className="music-button-row">
                <Col className="music-button-col">
                  <MusicButton color="primary" title="Calm"/>
                </Col>
              </Row>
              <Row>
                <Col className="music-button-col">
                  <MusicButton color="secondary" title="Study"/>
                </Col>
              </Row>
              <Row>
                <Col className="music-button-col">
                  <MusicButton color="success" title="Energize" />
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
