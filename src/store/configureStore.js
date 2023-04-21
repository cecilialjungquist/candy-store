// store/: Här konfigurerar och skapar du Redux store. 
// configureStore.js är ansvarig för att skapa en store 
// med hjälp av rootReducer och eventuella middleware. 

import { legacy_createStore } from "redux";
import rootReducer from '../reducers/rootReducer.js';

import { fetchData } from '../api/api.js';

export const loadData = () => async (dispatch) => {
  const data = await fetchData();
  dispatch({ type: 'LOAD_DATA', payload: data });
}


// createStore kan endast ta EN reducer,
// därav hooken combineReducer i rootReducer
const store = legacy_createStore(rootReducer);

export default store;