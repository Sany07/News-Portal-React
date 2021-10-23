import { FETCH_NEWS_COMMENT } from "../actions/actionTypes";

const data = { isLoading: true, comments: null };

export default (comments = data, action) => {
    switch (action.type) {
        case FETCH_NEWS_COMMENT:
            return {
                comments: action.payload.data,
                isLoading: false,
            };

        default:
            return comments;
    }
};
