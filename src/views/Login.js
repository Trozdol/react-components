import React, { Component } from 'react';

import { auth } from '../services';

import Form, { Field } from '../components/form';

class Login extends Component {
    
    state = {
        email: 'shayne@trozdol.com',
        password: 'Stx@12345!',
        loggedIn: '',
        message: ''
    };
    
    constructor(props) {
        super(props);
        
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    render() {
        return (
            <Form
                title='Login'
                message={this.state.message}
                onSubmit={this.onSubmit}
                fields={[{
                    type: 'email',
                    label: 'Email',
                    name: 'email',
                    value: this.state.email,
                    onChange: this.onChange
                }, (
                    <Field
                        key='password'
                        type='password'
                        label='Password'
                        name='password'
                        value={this.state.password}
                        onChange={this.onChange} />
                )]}
            />
        );
    }

    onChange(e) {
        console.log(this.constructor.name + '.handleChange');
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        console.log(this.constructor.name + '.handleSubmit');
        
        const { email, password } = this.state;

        if (email.length === 0) {
            this.setState(state => ({
                message: 'Email is required' 
            }));
        }

        if (password.length === 0) {
            this.setState(state => ({
                message: 'Password is required'
            }));
        }
    }
}

export default Login;