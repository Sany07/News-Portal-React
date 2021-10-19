import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getSingleNews, GetSidebarData } from "../redux/actions/News";
import { getNewsComments } from "../redux/actions/NewsComment";
import Sidebar from "./Sidebar";
import { NewsLetter } from "../components/includes/NewsLetter";
import { TagItemSkeleton } from "../components/skeletons/TagItemSkeleton";
import { RelatedNews } from "./RelatedNews";
import moment from "moment";
import { SingleNewsCard } from "../components/skeletons/SingleNewsCard";

class NewsDetail extends Component {
    state = {
        slug: "",
        isLoading: false,
    };

    componentDidMount() {
        const { slug } = this.props.match.params;
        this.props.getSingleNews(slug);
        this.props.GetSidebarData();
    }

    render() {
        const { single_news, isLoading } = this.props;
        const news = single_news;
        const id = this.state.slug;
        // if (news) {
        //     this.props.getNewsComments(news.id);
        // }
        if (id) {
            this.props.getSingleNews(id);
            this.setState({ slug: "" });
            this.props.getNewsComments(1);
        }
        if (isLoading === true || this.state.isLoading == true) {
            return "Loading";
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
                                    +
                                    <div className="related_news">
                                        <div className="entity_inner__title header_purple">
                                            <h2>Related Post</h2>
                                        </div>
                                        {/* entity_title */}
                                        <div className="row">
                                            {/* <RelatedNews
                                                related_post={news.related_post}
                                                rr={this.setState}
                                            /> */}

                                            {news.related_post &&
                                                news.related_post.map(
                                                    (news) => {
                                                        return (
                                                            <div
                                                                className="col-md-6 s"
                                                                key={news.id}
                                                            >
                                                                <div className="media">
                                                                    <div className="media-left">
                                                                        <a href="#">
                                                                            <img
                                                                                style={{
                                                                                    height: 100,
                                                                                    width: 100,
                                                                                }}
                                                                                className="media-object"
                                                                                src={`http://localhost:8000/media/${news.thumbnail}`}
                                                                                alt="Generic placeholder image"
                                                                            />
                                                                        </a>
                                                                    </div>
                                                                    <div className="media-body">
                                                                        <span className="tag purple">
                                                                            <a
                                                                                href="category.html"
                                                                                target="_self"
                                                                            >
                                                                                Mobile
                                                                            </a>
                                                                        </span>
                                                                        <h3
                                                                            className="media-heading"
                                                                            // onClick={rr({
                                                                            //     id: news.slug,
                                                                            // })}
                                                                        >
                                                                            <Link
                                                                                onClick={() =>
                                                                                    this.setState(
                                                                                        {
                                                                                            slug: news.slug,
                                                                                        }
                                                                                    )
                                                                                }
                                                                                to={`/post/${news.slug}/`}
                                                                            >
                                                                                {
                                                                                    news.title
                                                                                }
                                                                            </Link>
                                                                        </h3>
                                                                        <span className="media-date">
                                                                            <a href="#">
                                                                                {moment(
                                                                                    news.timestamp
                                                                                ).format(
                                                                                    "Do MMM  YYYY"
                                                                                )}
                                                                            </a>
                                                                            {/* , by:{" "}
                                        {/* <a href="#">
                                            {news.author &&
                                                news.author.user.username}
                                        </a> */}
                                                                        </span>
                                                                        <div className="media_social">
                                                                            <span>
                                                                                <a href="#">
                                                                                    <i className="fa fa-share-alt" />
                                                                                    424
                                                                                </a>{" "}
                                                                                Shares
                                                                            </span>
                                                                            <span>
                                                                                <a href="#">
                                                                                    <i className="fa fa-comments-o" />

                                                                                    4
                                                                                </a>{" "}
                                                                                Comments
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        );
                                                    }
                                                )}
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
const mapStateToProps = (state) => (
    console.log(state.commentReducer.comments),
    {
        single_news: state.newsReducer.single_news,
        isLoading: state.newsReducer.isLoading,
        most_commented_news: state.sidebarReducer.news.most_commented,
        popular_news: state.sidebarReducer.news.popular_news,
        news_comments: state.commentReducer,
    }
);

export default connect(mapStateToProps, {
    getSingleNews,
    GetSidebarData,
    getNewsComments,
})(NewsDetail);
