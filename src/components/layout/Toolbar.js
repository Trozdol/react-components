import React, { Component } from 'react';

class Toolbar extends Component {
    constructor(props) {

    }
    render() {
        return (
            <header className="toolbar">
                <div class="toolbar-inner">

                    {props.children}
                    
                </div>
            </header>
        );
    }
}

export default Toolbar;