import { LOADING_REQUEST, EMAIL_NEWS_LETTER, EMAIL_SUBMIT_RESET } from "../actions/actionTypes";

const data = { isLoading: false };

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
                data: action.payload.data,
            };
        case EMAIL_SUBMIT_RESET:
            return {
                success: false,
            };
        default:
            return state;
    }
};

export default emailNewsLetterReducer;
