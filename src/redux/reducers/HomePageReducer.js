import {
    FETCH_HOMEPAGE,
    HOMEPAGE_LOADING_REQUEST,
} from "../actions/actionTypes";

const data = { isLoading: true, news: {} };
const HomePageReducer = (news = data, action) => {
    switch (action.type) {
        case HOMEPAGE_LOADING_REQUEST:
            console.log(action.type);
            return {
                ...news,
                isLoading: true,
            };
        case FETCH_HOMEPAGE:
            return {
                news: action.payload.data,
                isLoading: false,
            };
        default:
            return news;
    }
};

export default HomePageReducer;
