import * as ACTION_TYPE from './Actions/ACTION_TYPE';

export default (state={}, action) => {
    const {type, email} = action;
    switch(type) {
        case ACTION_TYPE.SET_LOGGED_IN: {
            return {
                ...state,
                hasLoggedIn: true,
                email: email
            };
        }
        case ACTION_TYPE.SET_LOGGED_OUT: {
            return {
                ...state,
                hasLoggedIn: false,
                email: ''
            };
        }
        default: {
            return {
                ...state,
            }
        }
    }
}