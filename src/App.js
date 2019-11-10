import React, { Component } from 'react';

import Range from './components/Range/Range';

export default class Calculator extends Component {
    state = {
        height: 160,
        weight: 80,
        bmi: 0,
    }

    setParams = (event) => {
        let name = event.target.name
        let { height, weight } = this.state

        this.setState({
            [name]: event.target.value
        })
        this.setState({
            bmi: (weight / (height / 100) ** 2).toFixed(2)
        })
    }


    render() {
        let { height, weight, bmi } = this.state;
        let category =
            (this.state.bmi > 0 && this.state.bmi <= 16) ? 'Severely underweight' :
            (this.state.bmi > 16 && this.state.bmi <= 18.5) ? 'Underweight' :
            (this.state.bmi > 18.5 && this.state.bmi <= 25) ? 'Normal (healthy weight)' :
            (this.state.bmi > 25 && this.state.bmi <= 30) ? 'Overweight' :
            (this.state.bmi > 30 && this.state.bmi <= 220) ? 'Obese' : null

        return (
            <div>
                <Range
                    name="height"
                    title="Height:"
                    min="90" max="250"
                    value={height}
                    onChange={this.setParams} />
                <Range
                    name="weight"
                    title="Weight:"
                    min="35" max="220"
                    value={weight}
                    onChange={this.setParams} />
                <br/>
                <span>BMI: {bmi}</span>
                {' '}
                <span>{category}</span>
            </div>
        )
    }
}
