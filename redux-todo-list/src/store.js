// import { configureStore } from "@reduxjs/toolkit";
// import reducers from "./reducer";

// export default configureStore ({
//     reducer: reducers,
// });

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

export default configureStore ({
        reducer: rootReducer,
  });

// const store = configureStore(rootReducer)
// export default store