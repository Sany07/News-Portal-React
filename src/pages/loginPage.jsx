import React, { useState, useEffect, Fragment } from "react";
import { registerUser, loginUser } from "../redux/actions/Auth";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Loading } from "../components/includes/Loading";
import { AUTH_RESET, LOADING_REQUEST } from "../redux/actions/actionTypes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
<ToastContainer />;
export const LoginPage = () => {
    const [userData, setUser] = useState({
        username: "",
        email: "",
    });

    const dispatch = useDispatch();
    const { isLoading, success, error } = useSelector((state) => state.loginReducer);
    console.log(isLoading);
    useEffect(() => {
        if (success) {
            toast.success("success");
            dispatch({ type: AUTH_RESET });
        }

        if (error) {
            console.log(error);
            toast.error("Something went wrong");
            // toast.error(error.password[0]);
            // toast.error(error.email);

            dispatch({ type: AUTH_RESET });
        }
    }, [success, error]);
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser(userData));
        // setUser({ [e.target.name]: "" });
    };
    const onChange = (e) => {
        setUser({ ...userData, [e.target.name]: e.target.value });
    };
    // if (isLoading === true) {
    //     return <Loading />;
    // } else {
    //     ("");
    // }
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
                                        required
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
                                        required
                                    />
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
                                        "Login"
                                    )}
                                </button>
                                <div className="register-link m-t-15 text-center">
                                    <p>
                                        Did Not have account ? <Link to="/register">Sign In</Link>
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
