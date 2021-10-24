import { LOADING_REQUEST, FETCH_SINGLE_NEWS } from "../actions/actionTypes";

const data = { isLoading: true, news: {}, single_news: {} };

export default (news = data, action) => {
    switch (action.type) {
        case LOADING_REQUEST:
            return {
                ...news,
                isLoading: true,
            };
        case FETCH_SINGLE_NEWS:
            return {
                single_news: action.payload.data,
                isLoading: false,
            };

        default:
            return news;
    }
};
