import {
    LOADING_REQUEST,
    LOGIN_FAIL,
    REGISTER_SUCCESS,
    LOGOUT,
    REGISTER_FAIL,
} from "../actions/actionTypes";

const initialState = {};

export const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING_REQUEST:
            return {
                isLoggedIn: true,
            };
        case REGISTER_SUCCESS:
            return {
                isLoggedIn: false,
                success: true,
                message: action.payload.data.message,
            };
        case REGISTER_FAIL:
            return {
                success: false,
                isLoggedIn: false,
                message: action.payload.data.message,
            };

        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            };
        default:
            return state;
    }
};
