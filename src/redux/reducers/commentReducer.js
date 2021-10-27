import {
    CREATE_NEWS_COMMENT,
    FETCH_NEWS_COMMENT,
    LOADING_REQUEST,
} from "../actions/actionTypes";

const data = { isLoading: true, comments: null };

export default (state = data, action) => {
    switch (action.type) {
        case FETCH_NEWS_COMMENT:
            return {
                ...state,
                comments: action.payload.data,
                isLoading: false,
            };
        // case CREATE_NEWS_COMMENT:
        //     return {
        //         new_comment: action.payload.data,
        //         isCreated: true,
        //         isLoading: true,
        //     };

        default:
            return state;
    }
};

export const newCommentReducer = (state = data, action) => {
    switch (action.type) {
        case CREATE_NEWS_COMMENT:
            return {
                isLoading: false,
                isCreated: true,
                success: action.payload,
            };

        default:
            return state;
    }
};
