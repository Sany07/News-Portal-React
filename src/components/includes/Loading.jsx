import React from "react";
import Loader from "react-loader-spinner";

export const Loading = () => {
    return (
        <div className="container">
            <div className="row text-center">
                {/* <Loader type="Puff" color="#00BFFF" height={550} width={80} /> */}
                <Loader type="Bars" color="#00BFFF" height={480} width={80} />
            </div>
        </div>
    );
};
