const add = (first, second) => {
    return first + second
}

const multiply = (first, second) => {
    return first * second
}
//array reduce example
// const numbers = [23, 74, 85, 85, 44, 83, 34]
// const sumReducer = (previous, current) => previous + current
// const total = numbers.reduce(sumReducer, 0)
// console.log(total)

// Another example
// const items = [
//     { id: 1, name: 'alta', price: 100 },
//     { id: 2, name: 'nail polish', price: 200 },
//     { id: 3, name: 'mashkara', price: 700 },
//     { id: 4, name: 'churi', price: 300 },
//     { id: 5, name: 'mehedi', price: 50 },
// ]
// const itemSumReducer = (previous, current) => previous + current.price
// const itemTotal = items.reduce(itemSumReducer, 0)
// console.log(itemTotal)

const getTotalPrice = products => {
    const reducer = (previous, current) => previous + current
    const total = products.reduce(reducer, 0)
    return total
}


export {
    add,
    multiply,
    getTotalPrice as getTotal
}