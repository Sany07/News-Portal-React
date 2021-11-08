import store from "../store";
import { TopLoadingBarProgress } from "../redux/actions/topLoadingBarProgress";

export const beginTheBar = () => {
    let i = Math.floor(Math.random() * 40) + 10;
    store.dispatch(TopLoadingBarProgress(i));
};

export const endTheBar = () => {
    store.dispatch(TopLoadingBarProgress(100));
};
