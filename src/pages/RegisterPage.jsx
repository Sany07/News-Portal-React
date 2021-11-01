import React, { useState, useEffect, Fragment } from "react";
import { registerUser } from "../redux/actions/Auth";
import { useSelector, useDispatch } from "react-redux";
import { REGISTER_RESET } from "../redux/actions/actionTypes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
<ToastContainer />;
export const RegisterPage = () => {
    const [userData, setUser] = useState({
        username: "",
        email: "",
        password: "",
        password2: "",
    });

    const dispatch = useDispatch();
    const { isLoading, success, error } = useSelector((state) => state.registerReducer);

    useEffect(() => {
        if (success) {
            toast.success("success");
            dispatch({ type: REGISTER_RESET });
        }

        if (error) {
            toast.error(error.username[0]);

            error.map((error) => {
                return console.log(error);
            });

            dispatch({ type: REGISTER_RESET });
        }
    }, [success, error]);
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(registerUser(userData));
    };
    const onChange = (e) => {
        setUser({ ...userData, [e.target.name]: e.target.value });
    };

    return (
        <section id="subscribe_section" className="subscribe_section">
            <div className="row">
                <ToastContainer />
                <div className="col-md-6 col-md-offset-3">
                    <div className="entity_comment_from">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group comment">
                                <div className="form-group">
                                    <label>User Name</label>
                                    <input
                                        onChange={onChange}
                                        type="text"
                                        name="username"
                                        className="form-control"
                                        placeholder="User Name"
                                        value={userData.username}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email address</label>
                                    <input
                                        onChange={onChange}
                                        name="email"
                                        type="email"
                                        className="form-control"
                                        placeholder="Email"
                                        value={userData.email}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input
                                        onChange={onChange}
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        placeholder="Password"
                                        value={userData.password}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Confirm Password</label>
                                    <input
                                        onChange={onChange}
                                        type="password"
                                        name="password2"
                                        className="form-control"
                                        placeholder="Confirm Password "
                                        value={userData.password2}
                                    />
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" /> Agree the terms and policy
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary btn-flat m-b-30 m-t-30"
                                >
                                    {isLoading ? (
                                        <Fragment>
                                            <i className="fa fa-spinner fa-spin" /> Loading
                                        </Fragment>
                                    ) : (
                                        "Register"
                                    )}
                                </button>
                                <div className="register-link m-t-15 text-center">
                                    <p>
                                        Already have account ? <a href="#"> Sign in</a>
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
