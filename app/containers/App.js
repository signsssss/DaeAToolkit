import React, { Component, PropTypes } from 'react';
import Home from '../components/Home';
const remote = require('electron').remote;
const fs = remote.require('fs');

export default class App extends Component {
    // static propTypes = {
    //     children: PropTypes.element.isRequired
    // };

    render() {
        console.log('fs from another component', fs);
        let divStyle = {
            height: "100%"
        };

        return (
            <Home />
        );
    }
}
