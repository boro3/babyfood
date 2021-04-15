// initial state
const init = {
    isAuth: false,
    user: null
};

const LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER = 'LOGOUT_USER';

export const loginUser = (data) => {
    return {
        type: LOGIN_USER,
        payload: data
    };
};

export const logoutUser = () => {
    return {
        type: LOGOUT_USER,
        payload: false
    };
};

const authReducer = (state = init, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state, isAuth: true, user: action.payload
            }
        case LOGOUT_USER:
            return {
                ...state, isAuth: false, user: null
            }
        default:
            return state;
    };
};

export default authReducer;