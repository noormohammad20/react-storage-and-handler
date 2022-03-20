import React from 'react'
import Cosmetic from '../Cosmetic/Cosmetic'


const Shoes = () => {
    const cosmetics = [
        { id: 1, name: 'alta', price: 100 },
        { id: 2, name: 'nail polish', price: 200 },
        { id: 3, name: 'mashkara', price: 700 },
        { id: 4, name: 'churi', price: 300 },
        { id: 5, name: 'mehedi', price: 50 },

    ]
    return (
        <div>
            <h2>This Is Shoes Component</h2>
            {
                cosmetics.map(cosmetic => <Cosmetic
                    key={cosmetic.id}
                    cosmetic={cosmetic}
                ></Cosmetic>)
            }
        </div>
    )
}

export default Shoes