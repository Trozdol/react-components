import React, { Component } from 'react';
import router from '../../services/router';
import Tab from './Tab';

export default class TabPanel extends Component {

    static defaultProps = {
        base: 'tabpanel',
        index: 1,
        route: '/',
        tabs: []
    }

    getRoute = router.getRoute;

    setRoute = router.setRoute;

    state = {
        index : this.props.tabs.findIndex(tab => tab.route === this.getRoute()) + 1, // +1 bc 0 is /error
        route : this.getRoute(),
        tabs  : [],

        tabWidth: 0,
        tabWrapperPosition: 0
    };

    constructor(props) {
        super(props);
        
        this.state.tabs = [
            {
                route: '/error',
                title: '404 Not Found',
                children: (<h1 style={{ flex: 0, textAlign: 'center' }}>404 Not Found</h1>)
            }
        ].concat(this.props.tabs);

        this.onButtonClick = this.onButtonClick.bind(this);
        this.renderNav = this.renderNav.bind(this)
        this.renderTabs = this.renderTabs.bind(this)
        this.onResize = this.onResize.bind(this)
    }

    renderNav() {
        const tabs = this.state.tabs;

        return tabs.map((props, index) => {
            const active = (this.state.route === props.route || this.state.index === props.index ? true : false);
            const classNames = [ 'button', (active ? 'active' : '') ].join(' ').trim();
            
            return (
                <button
                    key={index}
                    index={index}
                    route={props.route}
                    active={active.toString()}
                    className={classNames}
                    onClick={this.onButtonClick}>
                    {props.title}
                </button>
            )
        })
    }

    renderTabs() {
        const tabs = this.state.tabs;
        
        return tabs.map((props, index) => {
            const active = (this.state.route === props.route || this.state.index === props.index ? true : false);
            return (
                <Tab key={index} index={index} id={props.id} route={props.route} active={active}>
                    {props.children}
                </Tab>
            )
        });
    }

    render() {
        const { base } = this.props;
        const { tabWrapperPosition } = this.state;

        return (
            <div className={`${base}`}>
                <div className={`${base}-body`}>
                    <nav className={`${base}-nav`}>
                        {this.renderNav()}
                    </nav>
                    <main className={`${base}-content`}>
                        <div 
                            className={`${base}-tab-container animate-transition`}
                            style={{ transform: `translate(-${tabWrapperPosition}px)` }}
                            >
                            {this.renderTabs()}
                        </div>
                    </main>
                </div>
            </div>
        )
    }
    
    componentDidMount() {
        window.addEventListener('resize', this.onResize);

        if (this.state.index < 1) {
            this.setActive({ 
                index: this.state.index,
                route: this.state.route
            });
        }
        this.updateLayout();
    }
    
    onResize(e) {
        this.updateLayout()
    }

    onButtonClick(e) {
        const button = e.target;
        const index = button.getAttribute('index');
        const route = button.getAttribute('route');

        this.setActive({ 
            route,
            index
        });
    }

    updateLayout() {
        const wrapper = this.getView('wrapper');
        const tabWidth = wrapper.getBoundingClientRect().width;
        const tabWrapperPosition = tabWidth * this.state.index;

        wrapper.style.setProperty('transform', `translate(-${tabWrapperPosition}px)`);
        
        // now make sure react renders.
        this.setState(state => {
            return {
                tabWidth,
                tabWrapperPosition 
            }
        });
    }

    setActive({ route, index }) {
        if (index < 1) {
            index = 0;
            route = '/error';
        }
        
        // don't want to trigger a re-render yet. 
        // for some reason react screws this up
        // when using setState().
        this.state.index = index;
        this.state.route = route;

        this.setRoute(route);
        this.updateLayout();
    }

    getActive() {
        const tabpanel = this.getView().tabpanel;
        const [ button, tab ] = Array.from(tabpanel.querySelectorAll('.active'));
        const index = this.getView().tabs.indexOf(tab);

        return {
            index,
            button,
            tab
        };
    }

    #view = null;

    getView(key) {
        if (this.#view === null) {
            class View {
                get nav() {
                    return Array.from(this.tabpanel.querySelectorAll('.tabpanel-nav .button'))
                }
                get tabs() {
                    return Array.from(this.tabpanel.querySelectorAll('.tab'))
                }
                get wrapper() {
                    return this.tabpanel.querySelector('.tabpanel-tab-container');
                }
                get tabpanel() {
                    return document.querySelector('.tabpanel');
                }
            }
            this.#view = new View();
        }
        return ((key) ? this.#view[key] : this.#view);
    }
}
