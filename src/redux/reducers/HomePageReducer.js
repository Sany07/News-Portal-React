import { FETCH_HOMEPAGE } from "../actions/actionTypes";

const HomePageReducer =  (data = [], action) => {
    switch (action.type) {
        case FETCH_HOMEPAGE:
            return action.payload.data
        default:
            return data;
    }
};

export default HomePageReducer
