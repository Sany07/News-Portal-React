import {
    FETCH_SINGLE_NEWS,
    FETCH_SIDEBAR_DATA,
    FETCH_SINGLE_CATEGORY_DATA,
    FETCH_SINGLE_TAG_DATA,
    LOADING_REQUEST,
} from "./actionTypes";
import * as api from "../../apis/NewsApi";
import _ from "lodash";
import { beginTheBar, endTheBar } from "../../services/topLoadingBar";
// export const getSingleNews = (slug) => async (dispatch) => {
//     console.log('slugggg--', slug);

//     try {
//         const response = await api.fetchSingleNews(slug);
//         dispatch({ type: FETCH_SINGLE_NEWS, payload: response });
//     }
//     catch (error) {
//       console.log(error);
//     }

// };

export const getSingleNews = (slug) => (dispatch) => {
    _fetchSingleNews(slug, dispatch);
};

const _fetchSingleNews = _.memoize(async (slug, dispatch) => {
    try {
        beginTheBar();
        dispatch({ type: LOADING_REQUEST });
        const response = await api.fetchSingleNews(slug);
        endTheBar();
        dispatch({ type: FETCH_SINGLE_NEWS, payload: response });
        _fetchSingleNews.cache.delete(slug);
    } catch (error) {
        console.log(error);
    }
});

export const GetSidebarData = () => async (dispatch) => {
    // console.log('slugggg--', slug);
    try {
        const response = await api.fetchSidebarData();
        dispatch({ type: FETCH_SIDEBAR_DATA, payload: response });
    } catch (error) {
        console.log("error");
    }
};

export const GetSingleTagData = (slug) => async (dispatch) => {
    try {
        dispatch({ type: LOADING_REQUEST });
        const response = await api.fetchTagNews(slug);
        dispatch({ type: FETCH_SINGLE_TAG_DATA, payload: response });
    } catch (error) {
        console.log("error");
    }
};

export const GetSingleCategoryData = (slug) => async (dispatch) => {
    try {
        dispatch({ type: LOADING_REQUEST });
        const response = await api.fetchCategoryNews(slug);
        dispatch({ type: FETCH_SINGLE_CATEGORY_DATA, payload: response });
    } catch (error) {
        console.log("error");
    }
};
