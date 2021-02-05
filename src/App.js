import './App.css';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>WIT Remote Background Generator</h1>
      </header>
      <div className="App-body">
        <Form>
          <Form.Group as={Row} controlId="formGroupFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group as={Row} controlId="formGroupLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group as={Row} controlId="formGroupPronouns">
            <Form.Label>Pronouns (optional) </Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}

export default App;
