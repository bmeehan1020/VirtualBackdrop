import './App.css';
import React, { Component } from 'react'
import NameForm from './NameForm';
import Canvas from './Canvas';
import { Container, Row, Col, Button } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handlePronounsChange = this.handlePronounsChange.bind(this);
    this.state = {
      firstName: '', lastName: '', pronouns: ''
    };
  }

  handleFirstNameChange(firstName) {
    this.setState({ firstName: firstName });
  }

  handleLastNameChange(lastName) {
    this.setState({ lastName: lastName });
  }

  handlePronounsChange(pronouns) {
    this.setState({ pronouns: pronouns });
  }

  render() {
    const { firstName, lastName, pronouns } = this.state;

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
                onFirstNameChange={this.handleFirstNameChange}
                lastName={lastName}
                onLastNameChange={this.handleLastNameChange}
                pronouns={pronouns}
                onPronounsChange={this.handlePronounsChange}
              />
              <Button variant='secondary'>Save Image</Button>
            </Col>
            <Col>
              <Canvas
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
}

export default App;
