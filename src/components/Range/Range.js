import React from 'react';

const Range = (props) => (
    <form>
        <label>
            {props.title}
            {' '}
            <span>{props.min}</span>
            {' '}
            <input type="range" {...props}/>
            {' '}
            <span>{props.max}</span>
            {' '}
            <span><b>{props.value}{props.uom}</b></span>
        </label>
    </form>
)

export default Range;
