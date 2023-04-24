import { fetchData } from "../api/api"

// actions/: 
//Innehåller alla Redux actions och deras typer. 
// actionTypes.js kan användas för att definiera konstanter för actionstyper, 
// och index.js kan exportera alla actions från denna katalog. 

// En action är en funktion som returnerar en objekt 
// med type prop och ev payload
const addToCart = item => {
    return {
        type: 'ADD_TO_CART',
        payload: item
    }
}

const removeFromCart = item => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: item
    }
}

const logIn = () => {
    return {
        type: 'SIGN_IN'
    }
}

const placeOrder = () => {
    return {
        type: 'PLACE_ORDER'
    }
}

// They would receive dispatch as an argument and may call it asynchronously. 
// Such functions are called thunks. Another example of middleware is redux-promise. 
// It lets you dispatch a Promise async action, 
// and dispatches a normal action when the Promise resolves.

const loadData = () => async (dispatch) => {
    const data = await fetchData();
    dispatch({ type: 'LOAD_DATA', payload: data });
};

export { addToCart, removeFromCart, logIn, placeOrder, loadData };