import { FETCH_SINGLE_CATEGORY_DATA } from "../actions/actionTypes";

const data =  { isLoading: true, news:{}, single_category_news:{} } 

export default (news = data, action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload.data;
        case FETCH_SINGLE_CATEGORY_DATA:
            return {
                single_category_news : action.payload.data,
                isLoading : false,
            };
        
        default:
            return news;
    }
};
