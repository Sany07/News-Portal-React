import React, { useState, useEffect } from "react";
import LoadingBar from "react-top-loading-bar";
import { beginTheBar } from "../../services/topLoadingBar";
import { TopLoadingBarProgress } from "../../redux/actions/topLoadingBarProgress";
import store from "../../store";
import { useSelector } from "react-redux";
export const TopLoader = () => {
    const topProgressBar = useSelector((state) => state.topProgressBar);
    useEffect(() => {
        console.log("loadingProgress");
    }, [0]);
    return (
        <LoadingBar
            color="red"
            height={3}
            progress={topProgressBar.loadingProgress}
            onLoaderFinished={() => store.dispatch(TopLoadingBarProgress(0))}
        />
    );
};
