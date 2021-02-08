import './App.css';
import React, { useState, useRef } from 'react'
import NameForm from './NameForm';
import Canvas from './Canvas';
import ImageCarousel from './ImageCarousel';
import { Container, Row, Col, Button, Navbar } from 'react-bootstrap';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [pronouns, setPronouns] = useState('');
  const [backgroundImage, setBackgroundImage] = useState("https://virtualbackdrop.s3.amazonaws.com/wit_background_1.png");

  function handleFirstNameChange(firstName) {
    setFirstName(firstName);
  }

  function handleLastNameChange(lastName) {
    setLastName(lastName);
  }

  function handlePronounsChange(pronouns) {
    setPronouns(pronouns);
  }

  const canvasRef = useRef(null);
  const onSaveClick = () => {
    canvasRef.current.downloadImage();
  }

  function handleBackgroundImageSelect(backgroundImage) {
    setBackgroundImage(backgroundImage);
  }

  return (
    <div className="App" >
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <h1>
            <img
              alt="logo"
              src={process.env.PUBLIC_URL + '/wit_logo.png'}
              width="50"
              height="50"
              className="d-inline-block align-center"
            />
            Remote Classroom Background Generator
          </h1>
        </Navbar.Brand>
      </Navbar>
      <Container style={{ marginTop: 36 }}>
        <Row>
          <Col>
            <NameForm
              firstName={firstName}
              onFirstNameChange={handleFirstNameChange}
              lastName={lastName}
              onLastNameChange={handleLastNameChange}
              pronouns={pronouns}
              onPronounsChange={handlePronounsChange}
            />
            <ImageCarousel
              backgroundImage={backgroundImage}
              onBackgroundImageSelect={handleBackgroundImageSelect}
            />
          </Col>
          <Col>
            <Canvas
              ref={canvasRef}
              firstName={firstName}
              lastName={lastName}
              pronouns={pronouns}
              backgroundImage={backgroundImage}
            />
            <Button variant='secondary' onClick={onSaveClick}>Save Image</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
