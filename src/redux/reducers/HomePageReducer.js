import { FETCH_HOMEPAGE } from "../actions/actionTypes";


const data =  { loggedIn: true, news:{} } 
const HomePageReducer =  (news =data, action) => {
    switch (action.type) {
        case FETCH_HOMEPAGE:
            return {
                // ...news,
                loggedIn : false,
                news : action.payload.data
            };
            // return action.payload.data
        default:
            return data;
    }
};

export default HomePageReducer
