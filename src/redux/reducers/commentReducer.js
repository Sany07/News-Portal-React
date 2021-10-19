import { FETCH_NEWS_COMMENT } from "../actions/actionTypes";

const data =  { isLoading: true, comments:{} } 

export default (comments = data, action) => {
    switch (action.type) {
        case FETCH_NEWS_COMMENT:
            console.log('single news');
            return {
                comments : action.payload.data,
                isLoading : false,
            };
        
        default:
            return comments;
    }
};
