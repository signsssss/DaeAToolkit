import React from 'react';
import styles from './Menu.css';

class Menu extends React.Component {
    render() {
        return (
            <div>
                <header className="toolbar toolbar-header">
                    <h1 className="title">UI Toolkit for DaeA TI</h1>
                    <div className="toolbar-actions">
                        <div className="btn-group">
                            <button className="btn btn-default">
                                <span className="icon icon-folder"></span>
                                <div className={styles.buttonName}>File</div>
                            </button>
                            <button className="btn btn-default">
                                <span className="icon icon-help"></span>
                                <div className={styles.buttonName}>Help</div>
                            </button>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

export default Menu;
