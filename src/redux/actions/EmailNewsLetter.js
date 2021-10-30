import { FETCH_HOMEPAGE, LOADING_REQUEST, SUCCESS } from "./actionTypes";
import * as api from "../../apis/NewsApi";

export const getHomepageData = () => async (dispatch) => {
    try {
        dispatch({ type: LOADING_REQUEST });
        const response = await api.fetchHomePageData();
        dispatch({ type: FETCH_HOMEPAGE, payload: response });
    } catch (error) {
        console.log("error");
    }
};

export const emailNewsLetterSubscription = (email) => async (dispatch) => {
    try {
        dispatch({ type: LOADING_REQUEST });
        const response = await api.emailNewsLetterSubscription(email);
        dispatch({ type: SUCCESS, payload: response });
    } catch (error) {
        console.log("error");
    }
};
