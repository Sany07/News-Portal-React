import React from "react";
import LoadingBar from "react-top-loading-bar";
import { TopLoadingBarProgress } from "../../redux/actions/topLoadingBarProgress";
import { useSelector } from "react-redux";
import store from "../../store";

export const TopLoader = () => {
    const topProgressBar = useSelector((state) => state.topProgressBar);

    return (
        <LoadingBar
            color="red"
            height={3}
            progress={topProgressBar.loadingProgress}
            onLoaderFinished={() => store.dispatch(TopLoadingBarProgress(0))}
        />
    );
};
