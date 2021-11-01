import {
    LOADING_REQUEST,
    LOGIN_FAIL,
    REGISTER_SUCCESS,
    LOGOUT,
    REGISTER_FAIL,
} from "../actions/actionTypes";

const initialState = { isLoading: false };

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
                message: action.payload.data.message,
            };
        case REGISTER_FAIL:
            return {
                success: false,
                isLoading: false,
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
