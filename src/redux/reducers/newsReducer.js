import { FETCH_SINGLE_NEWS } from "../actions/actionTypes";

const data =  { isLoading: true, news:{}, single_news:{} } 

export default (news = data, action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload.data;
        case FETCH_SINGLE_NEWS:
            return {
                single_news : action.payload.data,
                isLoading : false,
            };
        
        default:
            return news;
    }
};
