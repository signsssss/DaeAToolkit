import React from 'react';
import { connect } from 'react-redux';

import { readFile } from '../actions/counter';
import styles from './Viewer.css';
import Field from './Field';

class Viewer extends React.Component {
    // convertToArray(lines) {
    //     let temp = lines.split('\n');
    //
    //     temp.map((field, index, arr) => {
    //         arr[index] = field.split(' ');
    //     });
    //
    //     return temp;
    // }
    componentDidMount() {
        this.props.readFile();
    }

    render() {
        console.log('this.props:', this.props);

        return (
            <div className={styles.viewer}>
                <h3>Viewer Area</h3>
                {(this.props.field).map((line, index) => {
                    return (
                        <div className={styles.line} key={index}>
                            {line.map((field, index) => {

                                return (
                                    <Field
                                        field={field} index={index} checked={false} last={(line.length - 1) == index}
                                    />
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        field: state.viewer.field
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        readFile: () => {
            dispatch(readFile());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Viewer);
