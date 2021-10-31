import { LOADING_REQUEST, REGISTER_FAIL } from "./actionTypes";
import * as api from "../../apis/NewsApi";

export const registerUser = () => async (dispatch) => {
    try {
        dispatch({ type: LOADING_REQUEST });
        const response = await api.register(data);
        dispatch({ type: FETCH_HOMEPAGE, payload: response });
    } catch (error) {
        dispatch({ type: REGISTER_FAIL, payload: error.response });
    }
};
