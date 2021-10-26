import {
    CREATE_NEWS_COMMENT,
    FETCH_NEWS_COMMENT,
    NEW_COMMENT_RESET,
} from "../actions/actionTypes";

const data = { isLoading: true, comments: null };

export default (state = data, action) => {
    switch (action.type) {
        case FETCH_NEWS_COMMENT:
            return {
                comments: action.payload.data,
                isLoading: false,
            };
        case CREATE_NEWS_COMMENT:
            return {
                isCreated: true,
                isLoading: true,
            };
        case NEW_COMMENT_RESET:
            return {
                isLoading: true,
                isCreated: false,
            };

        default:
            return state;
    }
};
