import React, { Component } from 'react';
import Field from './Field';

class Form extends Component {
    state = {
        message: null
    };

    renderMessage() {
        // console.log(this.constructor.name, 'renderMessage');
        if (this.props.message) {
            return (<div class="form-message">{this.props.message}</div>)
        }
        return null;
    }

    renderFields() {
        return this.props.fields.map((item, index) => {
            // console.log(item.constructor.name);

            if (!item.$$typeof) {
                const {type, name, label, value, onChange} = item;
                return (
                    <Field
                        key={index}
                        type={type}
                        name={name}
                        label={label}
                        value={value}
                        onChange={onChange}
                    />
                );
            } else {
                return item;
            }
        });
    }

    render() {
        // console.log(this.constructor.name, 'render');
        
        return (
            <form onSubmit={this.props.onSubmit}>
                {this.props.title 
                    ? <h2>{this.props.title}</h2>
                    : null
                }

                {this.renderFields()}

                {this.renderMessage()}

                {this.props.children}

                <button>Login</button>
            </form>
        );
    }
}

export default Form;