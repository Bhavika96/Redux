import {INCREMENT, DECREMENT } from "./action";

const productArray = [
    {
        id: 1,
        title: "abc",
        price: 120,
        quantity: 1,
        total: 0
    },
    {
        id:2,
        title: "def",
        price: 200,
        quantity: 1,
        total: 0
    },
    {
        id:3,
        title: "ghi",
        price: 250,
        quantity: 1,
        total: 0
    },
    {
        id:4,
        title: "jkl",
        price: 290,
        quantity: 1,
        total: 0
    },
]


const ProductListReducer = (state = productArray, action) => {
    let {type, params} = action
    console.log(action, "action")
    switch (action.type) {
        case INCREMENT: 
        const newArr = [];
        for(let i=0; i<state.length; i++) {
            const currentElement = {...state[i]}
            console.log(currentElement, "currentElement")
            if(currentElement.id === action.params.itemId) {
                currentElement.quantity = currentElement.quantity + 1;
            }
            newArr.push(currentElement)
        }
        return newArr;
        

        case DECREMENT:
            const newArr1 = []; 
            for(let i=0; i<state.length; i++) {
                const currentElement = {...state[i]}
                if(currentElement.id === action.params.itemId) {
                    currentElement.quantity = currentElement.quantity - 1;
                }
                newArr1.push(currentElement)
            }
            return newArr1;
        default: 
            return state;
    }
}
export default ProductListReducer;