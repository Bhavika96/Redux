import {Add, Subtract, Multiply, Divide} from './action'

const initialState = {
    result: 0
}

const CalculatorReducer = (state=initialState, action) => {
    console.log("Action",action)
    switch(action.type) {
        case Add: {
            
            return {...state, result: action.params.input1 + action.params.input2 }
        }
        case Subtract: {
            return  {...state}
        }
        case Multiply: {
            return  {...state}
        }
        case Divide: {
            return  {...state}
        }
        default: {
            return state
        }
    }
}

export default CalculatorReducer