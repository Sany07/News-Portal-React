import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const NewsLetter = () => {
    const onChangeEmail = (e) => {
        const email = e.target.value;
        // setEmail(email);
        console.log(email);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        toast();
        console.log(e.target.value);
    };
    return (
        <>
            <section id="subscribe_section" className="subscribe_section">
                <div className="row">
                    <ToastContainer />
                    <form
                        onSubmit={handleSubmit}
                        method="post"
                        className="form-horizontal"
                    >
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
                                    onChange={onChangeEmail}
                                    type="text"
                                    id="subscribe"
                                    name="subscribe"
                                    className="form-control input-lg"
                                />
                            </div>
                            <div className="col-sm-1">
                                <input
                                    type="submit"
                                    value="Submit"
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
