import {
    LOADING_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
} from "./actionTypes";
import * as api from "../../apis/AuthApi";
import jwt_decode from "jwt-decode";

export const registerUser = (data) => async (dispatch) => {
    try {
        dispatch({ type: LOADING_REQUEST });
        const response = await api.register(data);
        dispatch({ type: REGISTER_SUCCESS, payload: response });
    } catch (error) {
        dispatch({ type: REGISTER_FAIL, payload: error.response });
    }
};

export const loginUser = (data) => async (dispatch) => {
    try {
        dispatch({ type: LOADING_REQUEST });
        const response = await api.login(data);
        console.log(response.data.access);
        // localStorage.setItem("ItechJWT", token);
        // // setAuthToken(token);
        const decoded = jwt_decode(response.data.access);

        dispatch({ type: LOGIN_SUCCESS, payload: decoded });
    } catch (error) {
        dispatch({ type: REGISTER_FAIL, payload: error.response });
    }
};
