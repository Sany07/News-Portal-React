import {
    CREATE_NEWS_COMMENT,
    FETCH_NEWS_COMMENT,
    COMMENT_LOADING_REQUEST,
    NEW_COMMENT_RESET,
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
        case COMMENT_LOADING_REQUEST:
            return {
                // isLoading: true,
                isCreated: false,
            };
        case CREATE_NEWS_COMMENT:
            // console.log(action.payload.data);
            return {
                // isLoading: false,
                isCreated: true,
                comments: action.payload,
            };
        case NEW_COMMENT_RESET:
            console.log("action.payload.data");
            return {
                isLoading: false,
                isCreated: false,
            };

        default:
            return state;
    }
};
