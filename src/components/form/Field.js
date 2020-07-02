import React, { Component } from 'react';

class Field extends Component {
    static defaultProps = {
        type: 'text'
    };

    style = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'stretch',
        padding: '3px'
    }

    labelStyle = {
        margin: 0,
        boxSizing: 'border-box',
        display: 'inline-block',
        flex: 1
    }

    inputStyle = {
        margin: 0,
        boxSizing: 'border-box',
        display: 'inline-block',
        flex: 2
    }

    constructor(props) {
        super(props);
        this.handleChange = props.handleChange;
    }

    render() {
        const { type, name, label, value, onChange } = this.props;

        return (
            <div style={this.style}>
                <label
                    htmlFor={name}
                    style={this.labelStyle}
                    >{label}
                </label>
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    style={this.inputStyle}
                />
            </div>
        );
    }
}

export default Field;