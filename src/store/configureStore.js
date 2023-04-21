// store/: Här konfigurerar och skapar du Redux store. 
// configureStore.js är ansvarig för att skapa en store 
// med hjälp av rootReducer och eventuella middleware. 

import { legacy_createStore, applyMiddleware, compose } from "redux";
import rootReducer from '../reducers/rootReducer.js';
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composedEnhancer = composeEnhancers(applyMiddleware(thunk));


// createStore kan endast ta EN reducer,
// därav hooken combineReducer i rootReducer
const store = legacy_createStore(rootReducer, composedEnhancer);

export default store;