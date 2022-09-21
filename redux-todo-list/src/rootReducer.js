// import todoReducer from "./components/reducer";

// const reducers = {
//     todoReducer
// }

// export default reducers;

import todoReducer from "./components/reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    todoReducer
})

export default rootReducer
