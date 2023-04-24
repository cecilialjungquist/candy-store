const initialState = [];

function cartReducer(state = initialState, action) {
    // Check to see if the reducer cares about this action

    switch (action.type) {
        case 'ADD_TO_CART':
            // Kolla om den finns i cart
            const index = state.findIndex(item => item.id === action.payload.id);
            if (index === -1) {
                return [
                    ...state,
                    // Om inte, lägg till
                    action.payload
                ];
            } else {
                // Annars - uppdatera quantity
                state[index].quantity = state[index].quantity + parseInt(action.payload.quantity);
                return [...state];
            }
        case 'REMOVE_FROM_CART':
            const updatedState = state.filter(item => action.payload.id !== item.id);
            return updatedState;
        case 'PLACE_ORDER':
            return initialState;
        default:
            // otherwise return the existing state unchanged
            return state;
    }
}

export default cartReducer;