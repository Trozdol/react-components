import React, { Component } from 'react';

export default class Tab extends Component {

    static defaultProps = {
        base: 'tab',
        index: null,
        id: null,
        route: null,
        active: false
    }

    render() {
        
        const { base, index, id, route, active, children } = this.props;
        const classNames = [base, (active ? 'active' : '')].join(' ').trim();
        
        // console.log(index, classNames, route)

        return (
            <div className={classNames} index={index} id={id} route={route} active={active.toString()}>
                <div className={`${base}-body`}>
                    {children}
                </div>
            </div>
        );
    }
}