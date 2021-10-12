import { FETCH_HOMEPAGE } from "../actions/actionTypes";

const HomePageReducer =  (data = [], action) => {
    switch (action.type) {
        case FETCH_HOMEPAGE:
            console.log(action.payload.data);
            return action.payload;
            // return { ...state, ..._.mapKeys(action.payload, 'id') };
        default:
            return data;
    }
};

export default HomePageReducer
