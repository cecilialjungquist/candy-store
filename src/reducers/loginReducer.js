const initialState = false;

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return !state;
        default:
            return state;
    }
}

export default loginReducer;