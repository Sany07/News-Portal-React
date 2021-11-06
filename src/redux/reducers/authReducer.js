import {
    LOADING_REQUEST,
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    LOGOUT,
    AUTH_RESET,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
} from "../actions/actionTypes";

const initialState = { isLoading: false, isAuthenticated: false, user: {} };

export const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING_REQUEST:
            return {
                isLoading: true,
            };
        case REGISTER_SUCCESS:
            return {
                isLoading: false,
                success: true,
                message: action.payload.data,
            };
        case REGISTER_FAIL:
            return {
                isLoading: false,
                error: action.payload.data,
            };

        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            };
        case AUTH_RESET:
            return {
                isLoading: false,
            };
        default:
            return state;
    }
};
export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING_REQUEST:
            return {
                isLoading: true,
            };
        case LOGIN_SUCCESS:
            console.log(action.payload);
            return {
                isLoading: false,
                success: true,
                user: action.payload,
            };
        case LOGIN_FAIL:
            return {
                isLoading: false,
                isAuthenticated: true,
                user: action.payload.data,
            };

        case AUTH_RESET:
            return {
                isLoading: false,
            };
        default:
            return state;
    }
};
