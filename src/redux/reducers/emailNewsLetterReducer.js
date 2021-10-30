import { LOADING_REQUEST, EMAIL_NEWS_LETTER } from "../actions/actionTypes";

const data = { isLoading: true };

const emailNewsLetterReducer = (state = data, action) => {
    switch (action.type) {
        case LOADING_REQUEST:
            return {
                isLoading: true,
            };
        case EMAIL_NEWS_LETTER:
            return {
                success: true,
                isLoading: false,
            };

        default:
            return state;
    }
};

export default emailNewsLetterReducer;
