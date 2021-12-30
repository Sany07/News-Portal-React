import { FETCH_SINGLE_TAG_DATA, LOADING_REQUEST } from "../actions/actionTypes";

const data = { isLoading: true };

export const tagReducer = (news = data, action) => {
    switch (action.type) {
        case LOADING_REQUEST:
            return {
                isLoading: true,
            };
        case FETCH_SINGLE_TAG_DATA:
            return {
                single_tag_data: action.payload.data,
                isLoading: false,
            };

        default:
            return news;
    }
};
