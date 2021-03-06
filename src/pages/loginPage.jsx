import React, { useState, useEffect } from "react";
import { loginUser } from "../redux/actions/Auth";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { AUTH_RESET } from "../redux/actions/actionTypes";
import { ToastContainer, toast } from "react-toastify";
import { beginTheBar, endTheBar } from "../services/topLoadingBar";
import "react-toastify/dist/ReactToastify.css";

export const LoginPage = () => {
    const [userData, setUser] = useState({
        username: "",
        email: "",
    });

    const history = useHistory();
    const dispatch = useDispatch();

    const { success, error } = useSelector((state) => state.loginReducer);
 

    useEffect(() => {
        beginTheBar()
        if (success) {
            toast.success("Login Success");
            dispatch({ type: AUTH_RESET });
            setTimeout(() => {
                // if (isAuthenticated && typeof window !== 'undefined') window.location.href = "/login";
                history.push('/');
               
            }, 1100);
        }

        if (error) {
            toast.error("Something went wrong");
            // toast.error(error.password[0]);
            // toast.error(error.email);
            dispatch({ type: AUTH_RESET });
        }
        endTheBar()
    }, [dispatch,history, success, error]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser(userData));
        // setUser({ [e.target.name]: "" });
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
                                >Login
                                    {/* {isLoading ? (
                                        <Fragment>
                                            <i className="fa fa-spinner fa-spin" /> Loading
                                        </Fragment>
                                    ) : (
                                        "Login"
                                    )} */}
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
