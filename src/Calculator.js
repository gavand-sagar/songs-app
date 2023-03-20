import React, { useState } from 'react'

export default function Calculator() {

    const [number, setNumber] = useState('0')
    const [square, setSquare] = useState('0')

    function calculateSquare() {
        if (isNaN(number)) {
            setSquare('N/A')
        } else if (number == '') {
            setSquare('N/A')
        } else {
            setSquare(number * number)
        }
    }

    return (
        <div>
            <input data-testid='calc-input' value={number} onChange={e => setNumber(e.target.value)} />

            <button data-testid='calc-button' onClick={calculateSquare}>Square</button>
            <hr />
            <span data-testid='calc-output'>{square}</span>
        </div>
    )
}
