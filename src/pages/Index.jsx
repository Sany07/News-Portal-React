import React, { Component } from "react";
import { connect } from "react-redux";
import { getHomepageData } from "../redux/actions/Homepage";
import { GetSidebarData } from "../redux/actions/News";
import { Sidebar } from "./Sidebar";
import { FeatureNewsCard } from "./HomePage/FeatureNewsCard";
import { Loading } from "../components/includes/Loading";
import { VideoSection } from "../components/includes/VideoSection";
import NewsLetter from "../components/includes/NewsLetter";
import NewsListCard from "./HomePage/NewsListCard";

class index extends Component {
    componentDidMount() {
        this.props.getHomepageData();
        this.props.GetSidebarData();
    }

    render() {
        const { isLoading } = this.props;

        if (isLoading === true) {
            return (
                <>
                    <Loading />
                    {/* <VideoSection /> */}
                    <NewsLetter />
                </>
            );
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
                                        <Loading />
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
                    {/* <VideoSection /> */}
                    <NewsLetter />
                </>
            );
        }
    }
}

const mapStateToProps = (state) => (
    console.log(state),
    {
        news_catalog_one: state.HomePageReducer.news.post_catalog_one,
        news_catalog_two: state.HomePageReducer.news.post_catalog_two,
        news_catalog_three: state.HomePageReducer.news.post_catalog_three,
        news_catalog_four: state.HomePageReducer.news.post_catalog_four,
        news_catalog_five: state.HomePageReducer.news.post_catalog_five,
        hot_news: state.HomePageReducer.news.hot_news,
        trending_new: state.HomePageReducer.news.trending_new,
        editor_choice: state.HomePageReducer.news.editor_choice,
        isLoading: state.HomePageReducer.isLoading,

        most_commented_news: state.sidebarReducer.news.most_commented,
        popular_news: state.sidebarReducer.news.popular_news,
    }
);

export default connect(mapStateToProps, { getHomepageData, GetSidebarData })(
    index
);
