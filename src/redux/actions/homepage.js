import { FETCH_HOMEPAGE, HOMEPAGE_LOADING_REQUEST } from "./actionTypes";
import * as api from "../../apis/NewsApi";

export const getHomepageData = () => async (dispatch) => {
    try {
        dispatch({ type: HOMEPAGE_LOADING_REQUEST });
        const response = await api.fetchHomePageData();
        dispatch({ type: FETCH_HOMEPAGE, payload: response });
    } catch (error) {
        console.log("error");
    }
};
