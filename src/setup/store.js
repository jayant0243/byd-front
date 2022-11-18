import {rootReducer} from "./reducers/reducer";
import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk  from "redux-thunk";

// const store = createStore(
//   rootReducer,
//   compose(
//     applyMiddleware(thunk),
//     window.__REDUX_DEVTOOLS_EXTENSION__
//       ? window.__REDUX_DEVTOOLS_EXTENSION__()
//       : (f) => f,
//   ),
// );

// export default store;

// store configuration for reducers
// export default function configureStore() {
  export const store = createStore(rootReducer, compose(
    applyMiddleware(ReduxThunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )); // thunk middleware for async tasks
  // return store;
// }