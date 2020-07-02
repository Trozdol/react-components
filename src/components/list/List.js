import { Component } from 'react';
import ListItem from './ListItem';

class List extends Component {
    static defaultProps = {
        color: 'blue'
    };

    state = {
        data: [],
        listRef: null
    };

    constructor(props) {
        super(props);
        
        this.listRef = React.createRef();
    }

    renderListItem() {
        return this.state.data.map((props, index) => {
            return (
                <ListItem key={index}>
                    {props.children}
                </ListItem>
            );
        });
    }

    render() {
        return (
            <ul className="list">
                {this.renderListItems()}
            </ul>
        );
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        // Are we adding new items to the list?
        // Capture the scroll position so we can adjust scroll later.
        if (prevProps.list.length < this.props.list.length) {
            const list = this.listRef.current;
            return list.scrollHeight - list.scrollTop;
        }
        return null;
    }
    
    componentDidUpdate(prevProps, prevState, snapshot) {
        // If we have a snapshot value, we've just added new items.
        // Adjust scroll so these new items don't push the old ones out of view.
        // (snapshot here is the value returned from getSnapshotBeforeUpdate)
        if (snapshot !== null) {
            const list = this.listRef.current;
            list.scrollTop = list.scrollHeight - snapshot;
        }
    }
}