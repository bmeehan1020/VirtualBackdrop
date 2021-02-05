import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default class NameForm extends Component {
    constructor(props) {
        super(props);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handlePronounsChange = this.handlePronounsChange.bind(this);
    };

    handleFirstNameChange(e) {
        this.props.onFirstNameChange(e.target.value);
    }

    handleLastNameChange(e) {
        this.props.onLastNameChange(e.target.value);
    }

    handlePronounsChange(e) {
        this.props.onPronounsChange(e.target.value);
    }

    render() {
        const firstName = this.props.firstName;
        const lastName = this.props.lastName;
        const pronouns = this.props.pronouns;
        return (
            <Form>
                <Form.Group as={Row} controlId="formGroupFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        value={firstName}
                        onChange={this.handleFirstNameChange}
                        type="text" />
                </Form.Group>
                <Form.Group as={Row} controlId="formGroupLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        value={lastName}
                        onChange={this.handleLastNameChange}
                        type="text" />
                </Form.Group>
                <Form.Group as={Row} controlId="formGroupPronouns">
                    <Form.Label>Pronouns (optional) </Form.Label>
                    <Form.Control
                        value={pronouns}
                        onChange={this.handlePronounsChange}
                        type="text" />
                </Form.Group>
            </Form>
        )
    }
}
