import { FETCH_SINGLE_NEWS } from "../actions/actionTypes";


export default (news = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload.data;
        case FETCH_SINGLE_NEWS:
            return action.payload.data;
            
        default:
            return news;
    }
};
