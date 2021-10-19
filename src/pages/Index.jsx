import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getHomepageData } from "../redux/actions/homepage";
import { GetSidebarData } from "../redux/actions/News";
import Sidebar from "./Sidebar";
import { NewscardTwo } from "./HomePage/NewsCardTwo";
import NewsListCard from "./HomePage/NewsListCard";
import { NewsLetter } from "../components/includes/NewsLetter";
import { FeatureNewsCard } from "./HomePage/FeatureNewsCard";

class index extends Component {
    componentDidMount() {
        this.props.getHomepageData();
        this.props.GetSidebarData();
    }

    render() {
        const { loggedIn } = this.props.loggedIn;
        if (loggedIn === true) {
            return "Loading";
        } else {
            return (
                <>
                    <section
                        id="feature_news_section"
                        className="feature_news_section"
                    >
                        <FeatureNewsCard
                            hot_news={this.props.hot_news}
                            trending_new={this.props.trending_new}
                            editor_choice={this.props.editor_choice}
                        />
                    </section>
                    {/* <!-- Feature News Section --> */}

                    <section id="category_section" className="category_section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8">
                                    {this.props.news_catalog_one ? (
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

                                <Sidebar
                                    popular_news={this.props.popular_news}
                                    most_commented_news={
                                        this.props.most_commented_news
                                    }
                                />
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
}

const mapStateToProps = (state) => ({
    news_catalog_one: state.HomePageReducer.news.post_catalog_one,
    news_catalog_two: state.HomePageReducer.news.post_catalog_two,
    news_catalog_three: state.HomePageReducer.news.post_catalog_three,
    news_catalog_four: state.HomePageReducer.news.post_catalog_four,
    news_catalog_five: state.HomePageReducer.news.post_catalog_five,
    hot_news: state.HomePageReducer.news.hot_news,
    trending_new: state.HomePageReducer.news.trending_new,
    editor_choice: state.HomePageReducer.news.editor_choice,
    loggedIn: state.HomePageReducer.news,

    most_commented_news: state.sidebarReducer.news.most_commented,
    popular_news: state.sidebarReducer.news.popular_news,
});

export default connect(mapStateToProps, { getHomepageData, GetSidebarData })(
    index
);
