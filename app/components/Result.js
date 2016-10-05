import React from 'react';
import styles from './Result.css';

class Result extends React.Component {
    render() {
        return (
            <div className="pane">
                <div className={styles.result}>
                    <h3>Result Area</h3>
                    <div className={styles.entry}>
                        [
                            <br />
                            <br />
                            <div className={styles.center}>
                                speed: 100
                                <br />
                                <br />
                                closed: true
                                <br />
                                <br />
                                name: "train #1"
                            </div>
                            <br />
                            <div className={styles.right}>
                                ]
                            </div>
                    </div>
                    <div className={styles.entry}>
                        [
                            <br />
                            <br />
                            <div className={styles.center}>
                                speed: 110
                                <br />
                                <br />
                                closed: false
                                <br />
                                <br />
                                name: "train #2"
                            </div>
                            <br />
                            <div className={styles.right}>
                                ]
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Result;
