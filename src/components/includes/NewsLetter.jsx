import React from "react";

export const NewsLetter = () => {
    return (
        <>
            <section id="subscribe_section" className="subscribe_section">
                <div className="row">
                    <form action="#" method="post" className="form-horizontal">
                        <div className="form-group form-group-lg">
                            <label
                                className="col-sm-6 control-label"
                                for="formGroupInputLarge"
                            >
                                <h1>
                                    <span className="red-color">Sign up</span>
                                    for the latest news
                                </h1>
                            </label>

                            <div className="col-sm-3">
                                <input
                                    type="text"
                                    id="subscribe"
                                    name="subscribe"
                                    className="form-control input-lg"
                                />
                            </div>
                            <div className="col-sm-1">
                                <input
                                    type="submit"
                                    value="Sign Up"
                                    className="btn btn-large pink"
                                />
                            </div>
                            <div className="col-sm-2"></div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};
