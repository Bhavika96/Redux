import { LOAD_DATA } from "./action";

const productArray = [
    {
        id: 1,
        title: "abc",
        price: 120,
        quantity: 5 
    },
    {
        id:2,
        title: "def",
        price: 200,
        quantity: 5 
    },
    {
        id:3,
        title: "ghi",
        price: 250,
        quantity: 5 
    },
    {
        id:4,
        title: "jkl",
        price: 290,
        quantity: 5 
    },
]


const ProductListReducer = (state = productArray, action) => {
    let {type, params} = action
    switch (action.type) {
        // case INCREMENT: 
        //     return state.quantity + 1;
        // case DECREMENT:
        //     return state.quantity -1;
        case LOAD_DATA:
            return {
                ...state, ...params
            }
        default: 
            return state;
    }
}
export default ProductListReducer;