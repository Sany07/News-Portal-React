import React, { useState, useEffect } from "react";
import { registerUser } from "../redux/actions/Auth";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AUTH_RESET } from "../redux/actions/actionTypes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { beginTheBar, endTheBar } from "../services/topLoadingBar";
import { useHistory } from "react-router-dom";
export const RegisterPage = () => {
    const [userData, setUser] = useState({
        username: "",
        email: "",
        password: "",
        password2: "",
    });

    const dispatch = useDispatch();
    const { success, error } = useSelector((state) => state.registerReducer);
    const history = useHistory();
  
    useEffect(() => {
        beginTheBar()
        if (success) {
            toast.success("success");
            dispatch({ type: AUTH_RESET });
            setTimeout(() => {
                history.push('/login');
               
            }, 1100);
        }

        if (error) {
            console.log(error);
            toast.error("Something went wrong");
            // toast.error(error.password[0]);
            // toast.error(error.email);

            dispatch({ type: AUTH_RESET });
        }
        endTheBar()
    }, [dispatch,history, success, error]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(registerUser(userData));
        // setUser({ [e.target.name]: "" });
    };
    const onChange = (e) => {
        setUser({ ...userData, [e.target.name]: e.target.value });
    };
    // if (isLoading === true) {
    //     return (<Loading />), dispatch({ type: AUTH_RESET });
    // } else {  }
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
                                    <label>Email address</label>
                                    <input
                                        onChange={onChange}
                                        name="email"
                                        type="email"
                                        className="form-control"
                                        placeholder="Email"
                                        value={userData.email}
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
                                <div className="form-group">
                                    <label>Confirm Password</label>
                                    <input
                                        onChange={onChange}
                                        type="password"
                                        name="password2"
                                        className="form-control"
                                        placeholder="Confirm Password "
                                        value={userData.password2}
                                        required
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
                                >Register
                                    {/* {isLoading ? (
                                        <Fragment>
                                            <i className="fa fa-spinner fa-spin" /> Loading
                                        </Fragment>
                                    ) : (
                                        "Register"
                                    )} */}
                                </button>
                                <div className="register-link m-t-15 text-center">
                                    <p>
                                        Already have account ? <Link to="/login">Sign In</Link>
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
