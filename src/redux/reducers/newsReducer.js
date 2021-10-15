import { FETCH_SINGLE_NEWS } from "../actions/actionTypes";


export default (news = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case FETCH_SINGLE_NEWS:
            console.log(action.payload)
            return { ...news, [action.payload.id]: action.payload };
            
        default:
            return news;
    }
};
