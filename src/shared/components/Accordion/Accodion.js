import React, { useState } from 'react'

export default function Accodion() {

    const [expand, setExpand] = useState(true)

    function toggle() {
        if (expand == true) {
            setExpand(false)
        }
        else {
            setExpand(true)
        }
    }

    return (
        <div className='border'>
            <h1 data-testid='head01' onClick={toggle}>heading</h1>
            {expand && <p data-testid='para01'>this is the description</p>}
        </div>
    )
}
