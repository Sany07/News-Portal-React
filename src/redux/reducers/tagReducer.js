import { FETCH_SINGLE_TAG_DATA } from "../actions/actionTypes";

const data =  { isLoading: true } 

export default (news = data, action) => {
    switch (action.type) {
        case FETCH_SINGLE_TAG_DATA:
            return {
                single_tag_data : action.payload.data,
                isLoading : false,
            };
        
        default:
            return news;
    }
};
