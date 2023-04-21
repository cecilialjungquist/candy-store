// Här kanske man kan göra api-anropet? 
// Och sen nåt sånt här:

const initialState = [];

function candyReducer(state = initialState, action) {
  // Check to see if the reducer cares about this action

    switch (action.type) {
        case 'LOAD_DATA':
            return action.payload
            ;
        case 'GET_CANDY':
          return state.filter(item => item.id === action.payload.id);
        default:
            // otherwise return the existing state unchanged
            return state;
    }
}

export default candyReducer;