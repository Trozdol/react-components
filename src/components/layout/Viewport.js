import React, { Component } from 'react';

export default class Viewport extends Component {
    
    static defaultProps = {
        base: 'viewport',
        classes: []
    }

    render() {
        const props = this.props;
        const classNames = [`${props.base}-body`, ...props.classes].join(' ');
        
        return (
            <div className={props.base}>
                <div className={classNames}>

                    {props.children}

                </div>
            </div>
        );
    }
}
