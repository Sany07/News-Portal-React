import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getHomepageData } from "../redux/actions/homepage";
import Sidebar from "../components/includes/Sidebar";
import { NewscardTwo } from "./HomePage/NewsCardTwo";
import NewsListCard from "./HomePage/NewsListCard";
import { NewsLetter } from "../components/includes/NewsLetter";

class index extends Component {
    componentDidMount() {
        this.props.getHomepageData();
    }

    render() {
        return (
            <>
                <section
                    id="feature_news_section"
                    className="feature_news_section"
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="feature_article_wrapper">
                                    <div className="feature_article_img">
                                        <img
                                            className="img-responsive top_static_article_img"
                                            src="assets/img/feature-top.jpg"
                                            alt="feature-top"
                                        />
                                    </div>
                                    {/* <!-- feature_article_img --> */}

                                    <div className="feature_article_inner">
                                        <div className="tag_lg red">
                                            <a href="category.html">Hot News</a>
                                        </div>
                                        <div className="feature_article_title">
                                            <h1>
                                                <a
                                                    href="single.html"
                                                    target="_self"
                                                >
                                                    Chevrolet car-saving
                                                    technology delivers{" "}
                                                </a>
                                            </h1>
                                        </div>
                                        {/* <!-- feature_article_title --> */}

                                        <div className="feature_article_date">
                                            <a href="#" target="_self">
                                                Stive Clark
                                            </a>
                                            ,
                                            <a href="#" target="_self">
                                                Aug 4, 2015
                                            </a>
                                        </div>
                                        {/* <!-- feature_article_date --> */}

                                        <div className="feature_article_content">
                                            In a move to address mounting
                                            concerns about security on Android,
                                            Google and Samsung are now issuing.
                                        </div>
                                        {/* <!-- feature_article_content --> */}

                                        <div className="article_social">
                                            <span>
                                                <i className="fa fa-share-alt"></i>
                                                <a href="#">424</a>Shares
                                            </span>
                                            <span>
                                                <i className="fa fa-comments-o"></i>
                                                <a href="#">4</a>Comments
                                            </span>
                                        </div>
                                        {/* <!-- article_social --> */}
                                    </div>
                                    {/* <!-- feature_article_inner --> */}
                                </div>
                                {/* <!-- feature_article_wrapper --> */}
                            </div>
                            {/* <!-- col-md-7 --> */}

                            <div className="col-md-5">
                                <div className="feature_static_wrapper">
                                    <div className="feature_article_img">
                                        <img
                                            className="img-responsive"
                                            src="assets/img/feature-static1.jpg"
                                            alt="feature-top"
                                        />
                                    </div>
                                    {/* <!-- feature_article_img --> */}

                                    <div className="feature_article_inner">
                                        <div className="tag_lg purple">
                                            <a href="category.html">
                                                Top Viewed
                                            </a>
                                        </div>
                                        <div className="feature_article_title">
                                            <h1>
                                                <a
                                                    href="single.html"
                                                    target="_self"
                                                >
                                                    Alcatel's $180 Idol 3 4.7 is
                                                    a
                                                </a>
                                            </h1>
                                        </div>
                                        {/* <!-- feature_article_title --> */}

                                        <div className="feature_article_date">
                                            <a href="#" target="_self">
                                                Stive Clark
                                            </a>
                                            ,
                                            <a href="#" target="_self">
                                                Aug 4, 2015
                                            </a>
                                        </div>
                                        {/* <!-- feature_article_date --> */}

                                        <div className="feature_article_content">
                                            In a move to address mounting
                                            concerns about security on
                                            Android...
                                        </div>
                                        {/* <!-- feature_article_content --> */}

                                        <div className="article_social">
                                            <span>
                                                <i className="fa fa-share-alt"></i>
                                                <a href="#">424</a>Shares
                                            </span>
                                            <span>
                                                <i className="fa fa-comments-o"></i>
                                                <a href="#">4</a>Comments
                                            </span>
                                        </div>
                                        {/* <!-- article_social --> */}
                                    </div>
                                    {/* <!-- feature_article_inner --> */}
                                </div>
                                {/* <!-- feature_static_wrapper --> */}
                            </div>
                            {/* <!-- col-md-5 --> */}

                            <div className="col-md-5">
                                <div className="feature_static_last_wrapper">
                                    <div className="feature_article_img">
                                        <img
                                            className="img-responsive"
                                            src="assets/img/feature-static2.jpg"
                                            alt="feature-top"
                                        />
                                    </div>
                                    {/* <!-- feature_article_img --> */}

                                    <div className="feature_article_inner">
                                        <div className="tag_lg blue">
                                            <a href="category.html">
                                                Top Viewed
                                            </a>
                                        </div>

                                        <div className="feature_article_title">
                                            <h1>
                                                <a
                                                    href="single.html"
                                                    target="_self"
                                                >
                                                    Gadget user good news
                                                </a>
                                            </h1>
                                        </div>
                                        {/* <!-- feature_article_title --> */}

                                        <div className="feature_article_date">
                                            <a href="#" target="_self">
                                                Stive Clark
                                            </a>
                                            ,
                                            <a href="#" target="_self">
                                                Aug 4, 2015
                                            </a>
                                        </div>
                                        {/* <!-- feature_article_date --> */}

                                        <div className="feature_article_content">
                                            In a move to address mounting
                                            concerns about security on
                                            Android...
                                        </div>
                                        {/* <!-- feature_article_content --> */}

                                        <div className="article_social">
                                            <span>
                                                <i className="fa fa-share-alt"></i>
                                                <a href="#">424</a>Shares
                                            </span>
                                            <span>
                                                <i className="fa fa-comments-o"></i>
                                                <a href="#">4</a>Comments
                                            </span>
                                        </div>
                                        {/* <!-- article_social --> */}
                                    </div>
                                    {/* <!-- feature_article_inner --> */}
                                </div>
                                {/* <!-- feature_static_wrapper --> */}
                            </div>
                            {/* <!-- col-md-5 --> */}
                        </div>
                        {/* <!-- Row --> */}
                    </div>
                    {/* <!-- container --> */}
                </section>
                {/* <!-- Feature News Section --> */}

                <section id="category_section" className="category_section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                {this.props.news_catalog_five ? (
                                    <NewsListCard
                                        news_catalog_one={
                                            this.props.news_catalog_one
                                        }
                                        news_catalog_two={
                                            this.props.news_catalog_two
                                        }
                                        news_catalog_three={
                                            this.props.news_catalog_three
                                        }
                                        news_catalog_four={
                                            this.props.news_catalog_four
                                        }
                                        news_catalog_five={
                                            this.props.news_catalog_five
                                        }
                                    />
                                ) : (
                                    ""
                                )}
                            </div>
                            <Sidebar />
                        </div>
                    </div>
                </section>
                {/* 
                <section id="video_section" className="video_section">
                    <div className="container">
                        <div className="well">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="embed-responsive embed-responsive-4by3">
                                        <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/MJ-jbFdUPns"
                                            frameborder="0" allowfullscreen></iframe>
                                    </div>

                                </div>

                                <div className="col-md-3">
                                    <div className="embed-responsive embed-responsive-4by3">
                                        <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/h5Jni-vy_5M"></iframe>
                                    </div>

                                    <div className="embed-responsive embed-responsive-4by3 m16">
                                        <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/wQ5Gj0UB_R8"></iframe>
                                    </div>

                                </div>

                                <div className="col-md-3">
                                    <div className="embed-responsive embed-responsive-4by3">
                                        <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/UPvJXBI_3V4"></iframe>
                                    </div>

                                    <div className="embed-responsive embed-responsive-4by3 m16">
                                        <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/DTCtj5Wz6BM"></iframe>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </section> */}

                <NewsLetter />
            </>
        );
    }
}

const mapStateToProps = (state) => (
    console.log(state),
    {
        news_catalog_one: state.HomePageReducer.post_catalog_one,
        news_catalog_two: state.HomePageReducer.post_catalog_two,
        news_catalog_three: state.HomePageReducer.post_catalog_three,
        news_catalog_four: state.HomePageReducer.post_catalog_four,
        news_catalog_five: state.HomePageReducer.post_catalog_five,
    }
);

export default connect(mapStateToProps, { getHomepageData })(index);
