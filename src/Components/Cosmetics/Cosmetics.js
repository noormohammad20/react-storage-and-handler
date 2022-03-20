import React from 'react'
import { add } from '../shoes/calculate'

const Cosmetics = () => {
    const first = 55
    const second = 66
    const total = add(first, second)
    return (
        <div>
            <h1>WellCome To My Cosmetics Store </h1>
            <p>total: {total}</p>
        </div>
    )
}

export default Cosmetics