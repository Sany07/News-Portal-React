import {
    FETCH_SINGLE_CATEGORY_DATA,
    LOADING_REQUEST,
} from "../actions/actionTypes";

const data = { isLoading: true, news: {}, single_category_news: {} };

export default (news = data, action) => {
    switch (action.type) {
        case LOADING_REQUEST:
            return {
                isLoading: true,
            };
        case FETCH_SINGLE_CATEGORY_DATA:
            return {
                single_category_data: action.payload.data,
                isLoading: false,
            };

        default:
            return news;
    }
};
