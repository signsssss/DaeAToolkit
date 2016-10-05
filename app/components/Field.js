import React from 'react';
import { ItemTypes } from './constants';
//  import { DragSource } from 'react-dnd';

import styles from './Field.css';

class Field extends React.Component {
    sortingHat() {
        if(this.props.index == 0) {
            return (
                <label className={styles.nonStyled + ' ' + styles.header} >
                    <span>{this.props.field}</span>
                </label>
            );
        } else if(this.props.last) {
            return (
                <label className={styles.nonStyled}>
                    <span>{this.props.field}</span>
                </label>
            );
        } else {
            return (
                <label className={styles.checkboxStyled}>
                    <input type="checkbox" />
                    <span>{this.props.field}</span>
                </label>
            );
        }
    }

    render() {
        return (
            <div className={styles.field}>
                {this.sortingHat()}
            </div>
        );
    }
}

export default Field;
