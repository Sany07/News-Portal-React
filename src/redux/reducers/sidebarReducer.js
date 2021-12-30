import { FETCH_SIDEBAR_DATA } from "../actions/actionTypes";

const data = { isLoading: true, news: {}, single_news: {} };

export const sidebarReducer = (news = data, action) => {
    switch (action.type) {
        case FETCH_SIDEBAR_DATA:
            return {
                news: action.payload.data,
                // isLoading : false,
            };
        default:
            return news;
    }
};
