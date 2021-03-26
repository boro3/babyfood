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

// export const fetchUserRequest = (userAuth) => {
//     return dispatch => {
//         fetch(`http://localhost:8081/api/v1/user/${userAuth.uid}`,
//             {
//                 method: 'GET',
//                 headers: {
//                     'Authorization': `Bearer ${userAuth.jwt}`,
//                     'Accept': 'application/json',
//                     'Content-type': 'application/json'
//                 }
//             }
//         )
//             .then(res => res.json())
//             .then(data => {
//                 dispatch(fetchUserSuccess(data))
//             })
//             .catch(err => { dispatch(fetchUserFail(err)) })
//     }
// };

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