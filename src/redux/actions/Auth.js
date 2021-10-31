import { LOADING_REQUEST, REGISTER_SUCCESS, REGISTER_FAIL } from "./actionTypes";
import * as api from "../../apis/NewsApi";

export const registerUser = (data) => async (dispatch) => {
    try {
        dispatch({ type: LOADING_REQUEST });
        const response = await api.register(data);
        dispatch({ type: REGISTER_SUCCESS, payload: response });
    } catch (error) {
        dispatch({ type: REGISTER_FAIL, payload: error.response });
    }
};
