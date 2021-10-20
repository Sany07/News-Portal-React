import { FETCH_HOMEPAGE } from "../actions/actionTypes";


const data =  { isLoading: true, news:{} } 
const HomePageReducer =  (news =data, action) => {
    switch (action.type) {
        case FETCH_HOMEPAGE:
            return {
                isLoading : false,
                news : action.payload.data
            };
        default:
            return news;
    }
};

export default HomePageReducer
