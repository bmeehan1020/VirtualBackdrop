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
  const [backgroundImage, setBackgroundImage] = useState(process.env.PUBLIC_URL + '/wit_background_1.png');

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
      <Container>
        <Row>
          <Col>
            <h3 style={{ margin: 24 }} className="text-center">
              Create an approved virtual background for use in classroom Zoom sessions.
          </h3>
          </Col>
        </Row>
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
            <h4 style={{ paddingLeft: 8, paddingTop: 24, paddingBottom: 0 }}>Choose a Background:</h4>
            <ImageCarousel
              style={{ padding: 8 }}
              backgroundImage={backgroundImage}
              onBackgroundImageSelect={handleBackgroundImageSelect}
            />
          </Col>
          <Col style={{ marginLeft: 24 }}>
            <Row>
              <Canvas
                ref={canvasRef}
                firstName={firstName}
                lastName={lastName}
                pronouns={pronouns}
                backgroundImage={backgroundImage}
              />
            </Row>
            <Row>
              <Button
                variant='secondary'
                onClick={onSaveClick}
                style={{ marginTop: 24, marginLeft: 'auto', marginRight: 'auto', alignContent: 'center' }}>
                Save Image
              </Button>
            </Row>
          </Col>
        </Row>
      </Container>
    </div >
  );
}

export default App;
