import store from "../store";
import { TopLoadingBarProgress } from "../redux/actions/topLoadingBarProgress";

export const beginTheBar = () => {
    console.log("beginTheBar");
    let i = Math.floor(Math.random() * 40) + 1;
    console.log(i);
    store.dispatch(TopLoadingBarProgress(i));
};

export const endTheBar = () => {
    console.log("endTheBar");
    store.dispatch(TopLoadingBarProgress(100));
};
