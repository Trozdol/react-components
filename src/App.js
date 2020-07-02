import React, { Component } from 'react';
import router from './services/router';

import './App.css';

import Viewport from './components/layout/Viewport';
import TabPanel from './components/layout/TabPanel';

import Login from './views/Login';

class App extends Component {
    
    state = {
        loggedIn: false,
        account: {},
        message: null,
        tabs: [
            {
                route: '/',
                title: 'Default',
                children: (
                    <div style={{ textAlign: 'center' }}>
                        <h1>Some Default Landing Page</h1>
                        <p>
                            <button onClick={e => router.setRoute('/login')}>Sign In</button>&nbsp;
                            to see <b><code>/login</code></b> without a page reload.
                            Here's a normal link <a href="/login">Sign In</a>
                        </p>
                    </div> 
                )
            },
            {
                route: '/login',
                title: 'Login',
                children: (
                    <div style={{ margin: '40px' }}>
                        <Login />
                    </div> 
                )
            },
            {
                route: '/dashboard',
                title: 'Dashboard',
                children: (
                    <>
                        <h1>Dashboard</h1>
                        <p>Welcome</p>
                    </>
                )
            },
            {
                route: '/typography',
                title: 'Typography',
                children: (
                    <React.Fragment>
                        
                        <div className="example">
                            <h1>Heading: H1</h1>
                            <h2>Heading: H2</h2>
                            <h3>Heading: H3</h3>
                            <h4>Heading: H4</h4>
                            <h5>Heading: H5</h5>
                            <h6>Heading: H6</h6>
                        </div>

                        <div className="example">
                            <p>Paragraph with <i>Italic</i> &amp; <b>Bold</b></p>
                        </div>
                        
                        <div className="example">
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                Culpa aliquid ab ratione at rem minus sequi numquam est atque
                                error eligendi distinctio, cumque quam qui eos obcaecati, quo
                                non dolores!
                            </p>
                        </div>
                        
                        <div className="example">
                            <blockquote>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                Culpa aliquid ab ratione at rem minus sequi numquam est atque 
                                error eligendi distinctio, cumque quam qui eos obcaecati, quo 
                                non dolores!
                            </blockquote>
                        </div>
                        
                        <div className="example">
                            <address>
                                1234 Street Road<br />
                                Suite 2000 B<br />
                                City, State, 12345-123<br />
                                Country
                            </address>
                        </div>

                        <div className="example">
                            <button>Button</button> <a href="">Link</a>
                        </div>
                        
                        <div className="example">
                            <pre><code>{`const variable = null;`}</code></pre>
                        </div>

                    </React.Fragment>
                )
            }
        ]
    };

    render() {
        
        return (
            <Viewport classes={['box']}>
                {/* <div style={{ margin: '0 100px' }}> */}
                <TabPanel tabs={this.state.tabs} nav='top'/>
                {/* </div> */}
            </Viewport>
        );
    }
}

export default App;
