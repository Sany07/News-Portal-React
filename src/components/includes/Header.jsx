import React, { useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import LoadingBar from "react-top-loading-bar";
import { useSelector, useDispatch } from "react-redux";
import { TopLoadingBarProgress } from "../../redux/actions/topLoadingBarProgress";
import store from "../../store";

export const Header = () => {
    const [progress, setProgress] = useState(0);
    // const progressBar = useSelector((state) => state.state);
    // const { loadingProgress } = store.getState().topProgressBar;
    return (
        <div>
            <section id="header_section_wrapper" className="header_section_wrapper">
                <div className="container">
                    <div className="header-section">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="left_section">
                                    <span className="date">{moment().format("dddd")} .</span>
                                    {/* <!-- Date --> */}
                                    <span className="time">{moment().format("D MMMM , YYYY")}</span>
                                    {/* <!-- Time --> */}
                                    <div className="social">
                                        <a href="/#" className="icons-sm fb-ic">
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                        {/* <!--Twitter--> */}
                                        <a href="/#" className="icons-sm tw-ic">
                                            <i className="fa fa-twitter"></i>
                                        </a>
                                        {/* <!--Google +--> */}
                                        <a href="/#" className="icons-sm inst-ic">
                                            <i className="fa fa-instagram"> </i>
                                        </a>
                                        {/* <!--Linkedin--> */}
                                        <a href="/#" className="icons-sm tmb-ic">
                                            <i className="fa fa-tumblr"> </i>
                                        </a>
                                        {/* <!--Pinterest--> */}
                                        <a href="/#" className="icons-sm rss-ic">
                                            <i className="fa fa-rss"> </i>
                                        </a>
                                    </div>
                                    {/* <!-- Top Social Section --> */}
                                </div>
                                {/* <!-- Left Header Section --> */}
                            </div>
                            <div className="col-md-4">
                                <div className="logo">
                                    <Link exact to="/">
                                        <img src="assets/img/logo.png" alt="Tech NewsLogo" />
                                    </Link>
                                </div>
                                {/* <!-- Logo Section --> */}
                            </div>
                            <div className="col-md-4">
                                <div className="right_section">
                                    <ul className="nav navbar-nav">
                                        <li>
                                            <Link to="/login">Login</Link>
                                        </li>
                                        <li>
                                            <Link to="/register">Register</Link>
                                        </li>
                                        <li className="dropdown lang">
                                            <button
                                                className="btn btn-default dropdown-toggle"
                                                type="button"
                                                id="dropdownMenu1"
                                                data-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="true"
                                            >
                                                En <i className="fa fa-angle-down"></i>
                                            </button>
                                            <ul
                                                className="dropdown-menu"
                                                aria-labelledby="dropdownMenu1"
                                            >
                                                <li>
                                                    <a href="/#">Bn</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    {/* <!-- Language Section --> */}

                                    <ul className="nav-cta hidden-xs">
                                        <li className="dropdown">
                                            <a
                                                href="/#"
                                                data-toggle="dropdown"
                                                className="dropdown-toggle"
                                            >
                                                <i className="fa fa-search"></i>
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <div className="head-search">
                                                        <form action="">
                                                            <div className="input-group">
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    placeholder="Type Something"
                                                                />
                                                                <span className="input-group-btn">
                                                                    <button
                                                                        type="submit"
                                                                        classname="btn btn-primary"
                                                                    >
                                                                        Search
                                                                    </button>
                                                                </span>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    {/* <!-- Search Section --> */}
                                </div>
                                {/* <!-- Right Header Section --> */}
                            </div>
                        </div>
                    </div>
                    {/* <!-- Header Section --> */}

                    <div className="navigation-section">
                        <nav className="navbar m-menu navbar-default">
                            <div className="container">
                                {/* <!-- Brand and toggle get grouped for better mobile display --> */}
                                <div className="navbar-header">
                                    <button
                                        type="button"
                                        className="navbar-toggle collapsed"
                                        data-toggle="collapse"
                                        data-target="#navbar-collapse-1"
                                    >
                                        <span className="sr-only">Toggle navigation</span>{" "}
                                        <span className="icon-bar"></span>{" "}
                                        <span className="icon-bar"></span>{" "}
                                        <span className="icon-bar"></span>
                                    </button>
                                </div>
                                <div className="collapse navbar-collapse" id="#navbar-collapse-1">
                                    <ul className="nav navbar-nav main-nav">
                                        <li className="active">
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li>
                                            <a href="index.html">News</a>
                                        </li>
                                        <li>
                                            <a href="category.html">Mobile</a>
                                        </li>
                                        <li>
                                            <a href="blog.html">Tablet</a>
                                        </li>
                                        <li>
                                            <a href="blog.html">Gadgets</a>
                                        </li>
                                        <li>
                                            <a href="blog.html">Camera</a>
                                        </li>
                                        <li>
                                            <a href="blog.html">Design</a>
                                        </li>
                                    </ul>
                                </div>
                                {/* <!-- .navbar-collapse --> */}
                            </div>
                            {/* <!-- .container --> */}
                        </nav>
                        {/* <!-- .nav --> */}
                    </div>
                    {/* <!-- .navigation-section --> */}
                </div>
                {/* <!-- .container --> */}
            </section>
        </div>
    );
};
