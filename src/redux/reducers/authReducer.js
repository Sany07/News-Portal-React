import {
    LOADING_REQUEST,
    REGISTER_RESET,
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
            console.log(action.payload.data);
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
        case REGISTER_RESET:
            return {
                isLoading: false,
            };
        default:
            return state;
    }
};
