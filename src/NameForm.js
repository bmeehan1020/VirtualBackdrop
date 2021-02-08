import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

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
        const { firstName, lastName, pronouns } = this.props;

        return (
            <Form>
                <Form.Row style={{ padding: 8 }}>
                    <Form.Control
                        value={firstName}
                        onChange={this.handleFirstNameChange}
                        placeholder="First Name"
                        size='lg'
                        type="text" />
                </Form.Row>
                <Form.Row style={{ padding: 8 }}>
                    <Form.Control
                        value={lastName}
                        onChange={this.handleLastNameChange}
                        placeholder="Last Name"
                        size='lg'
                        type="text" />
                </Form.Row>
                <Form.Row style={{ padding: 8 }}>
                    <Form.Control
                        value={pronouns}
                        onChange={this.handlePronounsChange}
                        placeholder="Pronouns (optional)"
                        size='lg'
                        type="text" />
                </Form.Row>
            </Form>
        )
    }
}
