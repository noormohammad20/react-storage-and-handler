import React from 'react'
import './Cosmetic.css'
const Cosmetic = (props) => {
    const { name, price, id } = props.cosmetic
    const addToCart = (id) => {
        console.log('Item Added', id)
    }
    const addToCartWithParam = () => addToCart(id)
    return (
        <div className='product'>
            <h2>Bye This: {name}</h2>
            <p> Only For: ${price}</p>
            <p><small>Its Has Id:{id}</small></p>
            <button onClick={addToCartWithParam} >Add To Cart</button>
            <button onClick={() => addToCart(id)} >Add To Cart shortcut</button>
        </div>
    )
}

export default Cosmetic