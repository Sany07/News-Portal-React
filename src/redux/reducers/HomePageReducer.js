import { FETCH_HOMEPAGE, LOADING_REQUEST } from "../actions/actionTypes";

const data = { isLoading: true, news: {} };
const HomePageReducer = (HomePageData = data, action) => {
    switch (action.type) {
        case LOADING_REQUEST:
            return {
                ...data,
                isLoading: true,
            };
        case FETCH_HOMEPAGE:
            return {
                news: action.payload.data,
                isLoading: false,
            };
        default:
            return HomePageData;
    }
};

export default HomePageReducer;
