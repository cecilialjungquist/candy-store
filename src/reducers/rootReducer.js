// reducers/: Innehåller alla Redux reducers. 
// rootReducer.js kombinerar alla individuella reducers 
// och exportera den kombinerade reducern.

import { combineReducers } from 'redux';
import cartReducer from './cartReducer.js';
import loginReducer from './loginReducer.js';
import candyReducer from './candyReducer.js';


const rootReducer = combineReducers({ 
    cart: cartReducer, 
    login: loginReducer,
    candy: candyReducer
});

export default rootReducer;