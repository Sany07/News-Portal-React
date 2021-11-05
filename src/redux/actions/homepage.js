import { FETCH_HOMEPAGE, LOADING_REQUEST, EMAIL_NEWS_LETTER } from "./actionTypes";
import * as api from "../../apis/NewsApi";
import { beginTheBar, endTheBar } from "../../services/topLoadingBar";
export const getHomepageData = () => async (dispatch) => {
    try {
        beginTheBar();
        dispatch({ type: LOADING_REQUEST });
        const response = await api.fetchHomePageData();

        dispatch({ type: FETCH_HOMEPAGE, payload: response });
        endTheBar();
    } catch (error) {
        console.log("error");
    }
};

export const emailNewsLetterSubscription = (email) => async (dispatch) => {
    try {
        const response = await api.emailNewsLetterSubscription(email);
        console.log(response);
        dispatch({ type: EMAIL_NEWS_LETTER, payload: response });
    } catch (error) {
        console.log("error");
    }
};
