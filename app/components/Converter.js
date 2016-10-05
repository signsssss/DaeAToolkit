import React from 'react';

import styles from './Converter.css';
import Item from './Item';

class Converter extends React.Component {
    render() {
        let items = [ 'v == 1', 'v', 'v == 1', 'v * 100 + 10'];

        return (
            <div className={styles.converter}>
                <h3>Converter Area</h3>
                {items.map((item, index) => {
                    return (
                        <Item item={item} key={index} />
                    )
                })}
            </div>
        );
    }
}

export default Converter;

// {items.map((item, index) => {
//     return (
//         <Item key={index}
//             item={item} index={index}
//         />
//     );
// })}
