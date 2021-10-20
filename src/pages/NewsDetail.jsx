import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getSingleNews, GetSidebarData } from "../redux/actions/News";
import { getNewsComments } from "../redux/actions/NewsComment";
import { TagItemSkeleton } from "../components/skeletons/TagItemSkeleton";
import { RelatedNews } from "./RelatedNews";
import { SingleNewsCard } from "../components/skeletons/SingleNewsCard";
import { Sidebar } from "./Sidebar";

import { Loading } from "../components/includes/Loading";
class NewsDetail extends Component {
    state = {
        slug: "",
        isLoading: false,
    };

    componentDidMount() {
        const { slug } = this.props.match.params;
        this.props.getSingleNews(slug);
        this.props.GetSidebarData();
        window.scrollTo(0, 0);
    }
    render() {
        const { single_news: news, isLoading } = this.props;

        if (this.state.slug) {
            this.props.getSingleNews(this.state.slug);
            this.setState({ slug: "" });
            window.scrollTo(0, 200);
        }
        if (isLoading === true || this.state.isLoading == true) {
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
                                                setSlug={(slug) =>
                                                    this.setState({
                                                        slug: slug,
                                                    })
                                                }
                                            />
                                        </div>
                                    </div>
                                    {/* Related news */}
                                    <div className="widget_advertisement">
                                        <img
                                            className="img-responsive"
                                            src=""
                                            alt="feature-top"
                                        />
                                    </div>
                                    {/*Advertisement*/}
                                    <div className="readers_comment">
                                        <div className="entity_inner__title header_purple">
                                            <h2>Readers Comment</h2>
                                        </div>
                                        {/* entity_title */}
                                        <div className="media">
                                            <div className="media-left">
                                                <a href="#">
                                                    <img
                                                        alt="64x64"
                                                        className="media-object"
                                                        data-src="assets/img/reader_img1.jpg"
                                                        src="assets/img/reader_img1.jpg"
                                                        data-holder-rendered="true"
                                                    />
                                                </a>
                                            </div>
                                            <div className="media-body">
                                                <h2 className="media-heading">
                                                    <a href="#">Sr. Ryan</a>
                                                </h2>
                                                But who has any right to find
                                                fault with a man who chooses to
                                                enjoy a pleasure that has no
                                                annoying consequences, or one
                                                who avoids a pain that produces
                                                no resultant pleasure?
                                                <div className="entity_vote">
                                                    <a href="#">
                                                        <i
                                                            className="fa fa-thumbs-o-up"
                                                            aria-hidden="true"
                                                        />
                                                    </a>
                                                    <a href="#">
                                                        <i
                                                            className="fa fa-thumbs-o-down"
                                                            aria-hidden="true"
                                                        />
                                                    </a>
                                                    <a href="#">
                                                        <span className="reply_ic">
                                                            Reply{" "}
                                                        </span>
                                                    </a>
                                                </div>
                                                <div className="media">
                                                    <div className="media-left">
                                                        <a href="#">
                                                            <img
                                                                alt="64x64"
                                                                className="media-object"
                                                                data-src="assets/img/reader_img2.jpg"
                                                                src="assets/img/reader_img2.jpg"
                                                                data-holder-rendered="true"
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="media-body">
                                                        <h2 className="media-heading">
                                                            <a href="#">
                                                                Admin
                                                            </a>
                                                        </h2>
                                                        But who has any right to
                                                        find fault with a man
                                                        who chooses to enjoy a
                                                        pleasure that has no
                                                        annoying consequences,
                                                        or one who avoids a pain
                                                        that produces no
                                                        resultant pleasure?
                                                        <div className="entity_vote">
                                                            <a href="#">
                                                                <i
                                                                    className="fa fa-thumbs-o-up"
                                                                    aria-hidden="true"
                                                                />
                                                            </a>
                                                            <a href="#">
                                                                <i
                                                                    className="fa fa-thumbs-o-down"
                                                                    aria-hidden="true"
                                                                />
                                                            </a>
                                                            <a href="#">
                                                                <span className="reply_ic">
                                                                    Reply{" "}
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* media end */}
                                        <div className="media">
                                            <div className="media-left">
                                                <a href="#">
                                                    <img
                                                        alt="64x64"
                                                        className="media-object"
                                                        data-src="assets/img/reader_img3.jpg"
                                                        src="assets/img/reader_img3.jpg"
                                                        data-holder-rendered="true"
                                                    />
                                                </a>
                                            </div>
                                            <div className="media-body">
                                                <h2 className="media-heading">
                                                    <a href="#">S. Joshep</a>
                                                </h2>
                                                But who has any right to find
                                                fault with a man who chooses to
                                                enjoy a pleasure that has no
                                                annoying consequences, or one
                                                who avoids a pain that produces
                                                no resultant pleasure?
                                                <div className="entity_vote">
                                                    <a href="#">
                                                        <i
                                                            className="fa fa-thumbs-o-up"
                                                            aria-hidden="true"
                                                        />
                                                    </a>
                                                    <a href="#">
                                                        <i
                                                            className="fa fa-thumbs-o-down"
                                                            aria-hidden="true"
                                                        />
                                                    </a>
                                                    <a href="#">
                                                        <span className="reply_ic">
                                                            Reply{" "}
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* media end */}
                                    </div>
                                    {/*Readers Comment*/}
                                    <div className="widget_advertisement">
                                        <img
                                            className="img-responsive"
                                            src="assets/img/category_advertisement.jpg"
                                            alt="feature-top"
                                        />
                                    </div>
                                    {/*Advertisement*/}
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
                                    setSlug={(slug) =>
                                        this.setState({
                                            slug: slug,
                                        })
                                    }
                                    popular_news={this.props.popular_news}
                                    most_commented_news={
                                        this.props.most_commented_news
                                    }
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
    news_comments: state.commentReducer,
});

export default connect(mapStateToProps, {
    getSingleNews,
    GetSidebarData,
    getNewsComments,
})(NewsDetail);
