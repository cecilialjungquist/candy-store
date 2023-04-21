const initialState = [];

function cartReducer(state = initialState, action) {
  // Check to see if the reducer cares about this action

    switch (action.type) {
        case 'ADD_TO_CART':
            // If so, make a copy of `state`
            return [
                ...state,
                // and update the copy with the new item
                action.payload
              ];
        case 'REMOVE_FROM_CART':
            const updatedState = state.filter(item => action.payload.id !== item.id);
            return [updatedState];
        default:
            // otherwise return the existing state unchanged
            return state;
    }
}

export default cartReducer;