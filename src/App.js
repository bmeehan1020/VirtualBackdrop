import './App.css';
import React, { useState, useRef } from 'react'
import NameForm from './NameForm';
import Canvas from './Canvas';
import { Container, Row, Col, Button } from 'react-bootstrap';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [pronouns, setPronouns] = useState('');

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

  return (
    <div className="App" >
      <header className="App-header">
        <h1>WIT Remote Background Generator</h1>
      </header>
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
            <Button variant='secondary' onClick={onSaveClick}>Save Image</Button>
          </Col>
          <Col>
            <Canvas
              ref={canvasRef}
              firstName={firstName}
              lastName={lastName}
              pronouns={pronouns}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
