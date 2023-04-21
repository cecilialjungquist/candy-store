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