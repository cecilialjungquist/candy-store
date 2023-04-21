// store/: Här konfigurerar och skapar du Redux store. 
// configureStore.js är ansvarig för att skapa en store 
// med hjälp av rootReducer och eventuella middleware. 

import { legacy_createStore } from "redux";
import rootReducer from '../reducers/rootReducer.js';

// createStore kan endast ta EN reducer,
// därav hooken combineReducer i rootReducer
const store = legacy_createStore(rootReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;