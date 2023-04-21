const loginReducer = (state, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return !state;
        default:
            break;
    }
}

export default loginReducer;