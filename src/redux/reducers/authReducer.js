import {
    LOADING_REQUEST,
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    LOGOUT,
    AUTH_RESET,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT_RESET
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
        case AUTH_RESET:
            return {
                isLoading: false,
                success: false,
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
            return {

                isLoading: false,
                success:true,
                isAuthenticated: true,
                user: action.payload,
            };
        case LOGIN_FAIL:
            return {
                isLoading: false,
                isAuthenticated: false,
            };
        case AUTH_RESET:
            return {
                ...state,
                success: false,
                isLoading: false,
            };
        default:
            return state;
    }
};

export const logOutReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGOUT:
            return {
                ...state,
                success:true,
            };
        case LOGOUT_RESET:
            return {
                success: false,
                
            };
        default:
            return state;
    }
};
