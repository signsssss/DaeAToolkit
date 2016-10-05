import React from 'react';

import styles from './Item.css';

class Item extends React.Component {
    render() {
        return (
            <div className={styles.item} key={this.props.index}>
                <input className={styles.header} type='text' defaultValue='title' />
                <input type='text' defaultValue={this.props.item} />
            </div>
        );
    }
}

export default Item;
