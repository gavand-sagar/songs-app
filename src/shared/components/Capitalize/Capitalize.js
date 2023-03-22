import React from 'react'
import { makeCapiltal } from '../../../operations.js'

export default function Capitalize({ label }) {

    return (
        <span data-testid='sp01'>{makeCapiltal(label)}</span>
    )
}
