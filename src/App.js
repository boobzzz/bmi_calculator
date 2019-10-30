import React, { Component } from 'react';

import Range from './components/Range/Range';

export default class Calculator extends Component {

    render() {

        return (
            <div>
                <Range />
                <br/>
                <Range />
                <br/>
                <span></span>
            </div>
        )
    }
}
