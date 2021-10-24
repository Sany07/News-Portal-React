import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getSingleNews, GetSidebarData } from "../redux/actions/News";
import { getNewsComments } from "../redux/actions/NewsComment";
import { TagItemSkeleton } from "../components/skeletons/TagItemSkeleton";
import { RelatedNews } from "./RelatedNews";
import { SingleNewsCard } from "../components/skeletons/SingleNewsCard";
import { Sidebar } from "./Sidebar";
import { Loading } from "../components/includes/Loading";
import { Comments } from "../components/includes/Comments";

class NewsDetail extends Component {
    state = {
        slug: "",
        newsId: "",
    };

    componentDidMount() {
        const { slug } = this.props.match.params;
        this.props.getSingleNews(slug);
        this.props.GetSidebarData();
        window.scrollTo(0, 0);
    }

    render() {
        const {
            single_news: news,
            isLoading,
            comments,
            popular_news,
            most_commented_news,
        } = this.props;

        if (this.state.slug || this.state.newsId) {
            this.props.getSingleNews(this.state.slug);
            this.props.getNewsComments(this.state.newsId);
            this.setState({ slug: "", newsId: "" });
            window.scrollTo(0, 200);
        } else if (
            news.total_comment_count > 0 &&
            isLoading === false &&
            comments === null
        ) {
            this.props.getNewsComments(news.id);
        }

        if (isLoading === true) {
            return <Loading />;
        } else {
            return (
                <section id="entity_section" className="entity_section">
                    <div className="container">
                        <div className="row">
                            {news && (
                                <div className="col-md-8">
                                    <div className="entity_wrapper">
                                        <SingleNewsCard news={news} />
                                        {/* entity_content */}
                                        <div className="entity_footer">
                                            <div className="entity_tag">
                                                {news.tags ? (
                                                    <TagItemSkeleton
                                                        tag={news.tags}
                                                        css={""}
                                                    />
                                                ) : (
                                                    ""
                                                )}
                                            </div>
                                            {/* entity_tag */}
                                            <div className="entity_social">
                                                <span>
                                                    <i className="fa fa-share-alt" />
                                                    424 <a href="#">Shares</a>
                                                </span>
                                                <span>
                                                    <i className="fa fa-comments-o" />
                                                    {news.total_comment_count}
                                                    <a href="#">Comments</a>
                                                </span>
                                            </div>
                                            {/* entity_social */}
                                        </div>
                                        {/* entity_footer */}
                                    </div>

                                    <div className="related_news">
                                        <div className="entity_inner__title header_purple">
                                            <h2>Related Post</h2>
                                        </div>
                                        {/* entity_title */}
                                        <div className="row">
                                            <RelatedNews
                                                related_post={news.related_post}
                                                setSlug={(slug, newsId) =>
                                                    this.setState({
                                                        slug: slug,
                                                        newsId: newsId,
                                                    })
                                                }
                                            />
                                        </div>
                                    </div>
                                    {/* Related news */}

                                    <div className="readers_comment">
                                        {/* entity_title */}
                                        {news ? (
                                            <Fragment>
                                                <div className="entity_inner__title header_purple">
                                                    <h2>Readers Comment</h2>
                                                </div>
                                                <Comments comments={comments} />
                                            </Fragment>
                                        ) : (
                                            ""
                                        )}
                                    </div>
                                    {/*Readers Comment*/}

                                    <div className="entity_comments">
                                        <div className="entity_inner__title header_black">
                                            <h2>Add a Comment</h2>
                                        </div>
                                        {/*Entity Title */}
                                        <div className="entity_comment_from">
                                            <form>
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="inputName"
                                                        placeholder="Name"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="inputEmail"
                                                        placeholder="Email"
                                                    />
                                                </div>
                                                <div className="form-group comment">
                                                    <textarea
                                                        className="form-control"
                                                        id="inputComment"
                                                        placeholder="Comment"
                                                        defaultValue={""}
                                                    />
                                                </div>
                                                <button
                                                    type="submit"
                                                    className="btn btn-submit red"
                                                >
                                                    Submit
                                                </button>
                                            </form>
                                        </div>
                                        {/*Entity Comments From */}
                                    </div>
                                    {/*Entity Comments */}
                                </div>
                            )}
                            {this.props.popular_news && (
                                <Sidebar
                                    setSlug={(slug, newsId) =>
                                        this.setState({
                                            slug: slug,
                                            newsId: newsId,
                                        })
                                    }
                                    popular_news={popular_news}
                                    most_commented_news={most_commented_news}
                                />
                            )}
                            {/*Right Section*/}
                        </div>
                    </div>
                    {/* container */}
                </section>
            );
        }
    }
}
const mapStateToProps = (state) => ({
    single_news: state.newsReducer.single_news,
    isLoading: state.newsReducer.isLoading,
    most_commented_news: state.sidebarReducer.news.most_commented,
    popular_news: state.sidebarReducer.news.popular_news,
    comments: state.commentReducer.comments,
});

export default connect(mapStateToProps, {
    getSingleNews,
    GetSidebarData,
    getNewsComments,
})(NewsDetail);
