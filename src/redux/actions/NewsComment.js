import { FETCH_NEWS_COMMENT, CREATE_NEWS_COMMENT, NEW_COMMENT_RESET } from "./actionTypes";
import * as api from "../../apis/NewsApi";
import _ from "lodash";

export const createtNewsComment = (comment) => async (dispatch) => {
    try {
        // dispatch({ type: COMMENT_LOADING_REQUEST });
        const response = await api.createNewsComments(comment);
        dispatch({ type: CREATE_NEWS_COMMENT, payload: response });
        dispatch({ type: NEW_COMMENT_RESET });
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
