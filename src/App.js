import React, { Component } from 'react';

import Range from './components/Range/Range';

export default class Calculator extends Component {
    state = {
        height: 160,
        weight: 80,
    }

    setParams = (event) => {
        let name = event.target.name

        this.setState({
            [name]: event.target.value
        })
    }

    bmi(h, w) {
        return (w / (h / 100) ** 2).toFixed(2)
    }

    category(b) {
        if (b > 0 && b <= 16) return 'Severely underweight'
        if (b > 16 && b <= 18.5) return 'Underweight'
        if (b > 18.5 && b <= 25) return 'Normal (healthy weight)'
        if (b > 25 && b <= 30) return 'Overweight'
        if (b > 30 && b <= 220) return 'Obese'
    }


    render() {
        let { height, weight } = this.state;
        let bodyMassIndex = this.bmi(height, weight);
        let categorized = this.category(bodyMassIndex);

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
                <span>BMI: {bodyMassIndex}</span>
                {' '}
                <span>{categorized}</span>
            </div>
        )
    }
}
