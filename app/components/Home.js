import React, { Component } from 'react';
import { Link } from 'react-router';
import { Window, TitleBar, Button, NavPane, NavPaneItem } from 'react-desktop/windows';

import styles from './Home.css';

import Viewer from './Viewer';
import Converter from './Converter';
import Result from './Result';
import Menu from './Menu';

export default class Home extends Component {
    render() {
        return (
            <Window
                color='#F4742D'
                theme='light'
                chrome
            >
                <TitleBar title='UI Toolkit for DaeA TI' controls />
                
                <div className="window-content">
                    <div className="pane-group">
                        <Viewer />
                        <Converter />
                        <Result />
                    </div>
                </div>
            </Window>
        );
    }
}
