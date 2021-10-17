import { FETCH_SINGLE_NEWS, FETCH_SIDEBAR_DATA } from "../actions/actionTypes";

const data =  { isLoading: true, news:{} } 

export default (news = data, action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload.data;
        case FETCH_SINGLE_NEWS:
            return {
                // ...news,
                news : action.payload.data,
                isLoading : false,
            };
        case FETCH_SIDEBAR_DATA: 
            return action.payload.data 
        default:
            return news;
    }
};
