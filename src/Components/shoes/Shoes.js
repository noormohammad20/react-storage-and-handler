import React from 'react'
import { add, multiply } from './calculate'

const Shoes = () => {
    const first = 14
    const second = 11
    const result = multiply(first, second)
    const sum = add(first, second)
    return (
        <div>
            <h2>This Is Shoes Component</h2>
            <p>Result: {result} and total:{sum}</p>
        </div>
    )
}

export default Shoes