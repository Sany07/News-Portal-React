import { FETCH_NEWS_COMMENT } from "./actionTypes";
import * as api from "../../apis/NewsApi";
import _ from "lodash";

// export const getNewsComments = (id) => async (dispatch) => {
//     try {
//         const response = await api.fetchNewsComments(id);
//         dispatch({ type: FETCH_NEWS_COMMENT, payload: response });
//     } catch (error) {
//         console.log("error");
//     }
// };

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
