
const AuthReducer = (state = {}, action)=> {
    switch (action.type) {
        case 'SET_AUTH':
            return {
                UID: action.UID
            }
        case 'GET_AUTH':
            return state.UID
        default:
            return state;
    }
}

export default AuthReducer;