import { TOP_LOADING_PROGRESS } from "./actionTypes";

export const TopLoadingBarProgress = (value) => ({
    type: TOP_LOADING_PROGRESS,
    payload: value,
});
