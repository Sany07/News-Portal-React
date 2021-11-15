import {
    LOADING_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT,
} from "./actionTypes";

import * as api from "../../apis/AuthApi";
import jwt_decode from "jwt-decode";
import setAuthTokenToHeader from "../../services/setAuthToken";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();
export default history;
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
        const token = response.data.access;
        localStorage.setItem("ItechJWT", token);
        setAuthTokenToHeader(token);
        const decoded = jwt_decode(token);
        dispatch({ type: LOGIN_SUCCESS, payload: decoded });
    } catch (error) {
        dispatch({ type: REGISTER_FAIL, payload: error.response });
    }
};

export const logoutUser = () => (dispatch) => {
    console.log("logout");
    localStorage.removeItem("ItechJWT");
    dispatch({ type: LOGOUT });
    history.push("/");
};
