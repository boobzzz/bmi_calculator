import React, { Component } from 'react';

import Range from './components/Range/Range';

export default class Calculator extends Component {
    state = {
        height: 160,
        weight: 80,
        bmi: 0,
        category: ''
    }

    setParams = (event) => {
        let name = event.target.name
        let { height, weight, bmi } = this.state

        this.setState({
            [name]: event.target.value
        })
        this.setState({
            bmi: (weight / (height / 100) ** 2).toFixed(2)
        })
        this.setState({
            category:
                (bmi > 0 && bmi <= 16) ? 'Severely underweight' :
                (bmi > 16 && bmi <= 18.5) ? 'Underweight' :
                (bmi > 18.5 && bmi <= 25) ? 'Normal (healthy weight)' :
                (bmi > 25 && bmi <= 30) ? 'Overweight' :
                (bmi > 30 && bmi <= 220) ? 'Obese' : null
        })
    }

    render() {
        let { height, weight, bmi, category } = this.state;

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
