import { FETCH_HOMEPAGE } from "../actions/actionTypes";

const HomePageReducer =  (data = [], action) => {
    switch (action.type) {
        case FETCH_HOMEPAGE:
            // console.log(action.payload.data);
            // return action.payload;

            // console.log(aa);
            return action.payload.data
        default:
            return data;
    }
};

export default HomePageReducer
