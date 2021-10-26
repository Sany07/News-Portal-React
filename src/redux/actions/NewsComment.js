import {
    FETCH_NEWS_COMMENT,
    COMMENT_LOADING_REQUEST,
    CREATE_NEWS_COMMENT,
    LOADING_REQUEST,
} from "./actionTypes";
import * as api from "../../apis/NewsApi";
import _ from "lodash";

export const createtNewsComment = (comment) => async (dispatch) => {
    try {
        const response = await api.createNewsComments(comment);
        dispatch({ type: CREATE_NEWS_COMMENT, payload: response });
    } catch (error) {
        dispatch({
            type: "FAIL",
            payload: error.response,
        });
    }
};

export const getNewsComments = (slug) => (dispatch) => {
    _fetchNewsComments(slug, dispatch);
};

const _fetchNewsComments = _.memoize(async (id, dispatch) => {
    try {
        const response = await api.fetchNewsComments(id);
        dispatch({ type: FETCH_NEWS_COMMENT, payload: response });
        _fetchNewsComments.cache.delete(id);
    } catch (error) {
        console.log(error);
    }
});
