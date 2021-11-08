import { TOP_LOADING_PROGRESS } from "../actions/actionTypes";

const data = { loadingProgress: 0 };

export const topProgressBar = (state = data, action) => {
    switch (action.type) {
        case TOP_LOADING_PROGRESS:
            // state.loadingProgress = action.payload;
            state.loadingProgress = action.payload;
            console.log(state.loadingProgress);
            return { ...state };
        // return { loadingProgress: action.payload };

        default:
            return state;
    }
};
