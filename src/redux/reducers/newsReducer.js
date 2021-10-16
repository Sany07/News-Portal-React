import { FETCH_SINGLE_NEWS } from "../actions/actionTypes";

const data =  { loggedIn: true, news:{} } 

export default (news = data, action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload.data;
        case FETCH_SINGLE_NEWS:

            // return action.payload.data;
            return {
                // ...news,
                loggedIn : false,
                news : action.payload.data
            };
            
        default:
            return news;
    }
};
