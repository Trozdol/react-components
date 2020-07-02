import React from 'react';

const ListItem = (props) => {
    return (
        <li className="list-item">
            {props.children}
        </li>
    );
}

export default ListItem;