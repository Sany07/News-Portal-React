import { TOP_LOADING_PROGRESS } from "../actions/actionTypes";

const data = { loadingProgress: 3 };

export const topProgressBar = (state = data, action) => {
    switch (action.type) {
        case TOP_LOADING_PROGRESS:
            // state.loadingProgress = action.payload;
            state.loadingProgress = action.payload;

            return { ...state };
        // return { loadingProgress: action.payload };

        default:
            return state;
    }
};
