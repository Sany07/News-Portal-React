import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getSingleNews } from "../redux/actions/News";
import Sidebar from "../components/includes/Sidebar";
import { NewscardTwo } from "./HomePage/NewsCardTwo";
import NewsListCard from "./HomePage/NewsListCard";
import { NewsLetter } from "../components/includes/NewsLetter";
import { TagItemSkeleton } from "../components/skeletons/TagItemSkeleton";
import moment from "moment";

class NewsDetail extends Component {
    componentDidMount() {
        const { slug } = this.props.match.params;
        this.props.getSingleNews(slug);
        console.log("slug", slug);
    }
    render() {
        const { news } = this.props;
        console.log("a", news);

        return (
            <>
                <section id="entity_section" className="entity_section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="entity_wrapper">
                                    <div className="entity_title">
                                        <h1>
                                            <a href="#">{news.title}</a>
                                        </h1>
                                    </div>
                                    {/* entity_title */}
                                    <div className="entity_meta">
                                        <a href="#" target="_self">
                                            {moment(news.timestamp).format(
                                                "Do MMM  YYYY"
                                            )}
                                        </a>
                                        , by:
                                        <a href="#" target="_self">
                                            {news.author &&
                                                news.author.user.username}
                                        </a>
                                    </div>
                                    {/* entity_meta */}
                                    <div className="entity_rating">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star-half-full" />
                                    </div>
                                    {/* entity_rating */}
                                    <div className="entity_social">
                                        <a href="#" className="icons-sm sh-ic">
                                            <i className="fa fa-share-alt" />
                                            <b>424</b>{" "}
                                            <span className="share_ic">
                                                Shares
                                            </span>
                                        </a>
                                        <a href="#" className="icons-sm fb-ic">
                                            <i className="fa fa-facebook" />
                                        </a>
                                        {/*Twitter*/}
                                        <a href="#" className="icons-sm tw-ic">
                                            <i className="fa fa-twitter" />
                                        </a>
                                        {/*Google +*/}
                                        <a
                                            href="#"
                                            className="icons-sm inst-ic"
                                        >
                                            <i className="fa fa-google-plus">
                                                {" "}
                                            </i>
                                        </a>
                                        {/*Linkedin*/}
                                        <a href="#" className="icons-sm tmb-ic">
                                            <i className="fa fa-ge"> </i>
                                        </a>
                                        {/*Pinterest*/}
                                        <a href="#" className="icons-sm rss-ic">
                                            <i className="fa fa-rss"> </i>
                                        </a>
                                    </div>
                                    {/* entity_social */}
                                    <div className="entity_thumb">
                                        <img
                                            className="img-responsive"
                                            src={news.thumbnail}
                                            alt="feature-top"
                                        />
                                    </div>
                                    {/* entity_thumb */}
                                    <div className="entity_content">
                                        <p>{news.description}</p>
                                    </div>
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
                                {/* entity_wrapper */}
                                <div className="related_news">
                                    <div className="entity_inner__title header_purple">
                                        <h2>
                                            <a href="#">Related Post</a>
                                        </h2>
                                    </div>
                                    {/* entity_title */}
                                    <div className="row">
                                        {news.related_post &&
                                            news.related_post.map(
                                                (related_post) => {
                                                    console.log(related_post);
                                                    return (
                                                        <div className="col-md-6">
                                                            <div className="media">
                                                                <div className="media-left">
                                                                    <a href="#">
                                                                        <img
                                                                            className="media-object"
                                                                            src="{`http://localhost:8000${news.thumbnail}`}"
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
                                                                    <h3 className="media-heading">
                                                                        <a
                                                                            href="single.html"
                                                                            target="_self"
                                                                        >
                                                                            {
                                                                                related_post.title
                                                                            }
                                                                        </a>
                                                                    </h3>
                                                                    <span className="media-date">
                                                                        <a href="#">
                                                                            10Aug-
                                                                            2015
                                                                        </a>
                                                                        , by:{" "}
                                                                        <a href="#">
                                                                            Eric
                                                                            joan
                                                                        </a>
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
                                        src="assets/img/category_advertisement.jpg"
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
                                            But who has any right to find fault
                                            with a man who chooses to enjoy a
                                            pleasure that has no annoying
                                            consequences, or one who avoids a
                                            pain that produces no resultant
                                            pleasure?
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
                                                        <a href="#">Admin</a>
                                                    </h2>
                                                    But who has any right to
                                                    find fault with a man who
                                                    chooses to enjoy a pleasure
                                                    that has no annoying
                                                    consequences, or one who
                                                    avoids a pain that produces
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
                                            But who has any right to find fault
                                            with a man who chooses to enjoy a
                                            pleasure that has no annoying
                                            consequences, or one who avoids a
                                            pain that produces no resultant
                                            pleasure?
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
                            {/*Left Section*/}
                            <div className="col-md-4">
                                <div className="widget">
                                    <div className="widget_title widget_black">
                                        <h2>
                                            <a href="#">Popular News</a>
                                        </h2>
                                    </div>
                                    <div className="media">
                                        <div className="media-left">
                                            <a href="#">
                                                <img
                                                    className="media-object"
                                                    src="assets/img/pop_right1.jpg"
                                                    alt="Generic placeholder image"
                                                />
                                            </a>
                                        </div>
                                        <div className="media-body">
                                            <h3 className="media-heading">
                                                <a
                                                    href="single.html"
                                                    target="_self"
                                                >
                                                    Canon launches photo centric
                                                    00214 Model supper shutter
                                                    camera
                                                </a>
                                            </h3>{" "}
                                            <span className="media-date">
                                                <a href="#">10Aug- 2015</a>, by:{" "}
                                                <a href="#">Eric joan</a>
                                            </span>
                                            <div className="widget_article_social">
                                                <span>
                                                    <a
                                                        href="single.html"
                                                        target="_self"
                                                    >
                                                        {" "}
                                                        <i className="fa fa-share-alt" />
                                                        424
                                                    </a>{" "}
                                                    Shares
                                                </span>
                                                <span>
                                                    <a
                                                        href="single.html"
                                                        target="_self"
                                                    >
                                                        <i className="fa fa-comments-o" />
                                                        4
                                                    </a>{" "}
                                                    Comments
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <div className="media-left">
                                            <a href="#">
                                                <img
                                                    className="media-object"
                                                    src="assets/img/pop_right2.jpg"
                                                    alt="Generic placeholder image"
                                                />
                                            </a>
                                        </div>
                                        <div className="media-body">
                                            <h3 className="media-heading">
                                                <a
                                                    href="single.html"
                                                    target="_self"
                                                >
                                                    Samsung galaxy note are the
                                                    supper mobile of all
                                                    products.
                                                </a>
                                            </h3>
                                            <span className="media-date">
                                                <a href="#">10Aug- 2015</a>, by:{" "}
                                                <a href="#">Eric joan</a>
                                            </span>
                                            <div className="widget_article_social">
                                                <span>
                                                    <a
                                                        href="single.html"
                                                        target="_self"
                                                    >
                                                        {" "}
                                                        <i className="fa fa-share-alt" />
                                                        424
                                                    </a>{" "}
                                                    Shares
                                                </span>
                                                <span>
                                                    <a
                                                        href="single.html"
                                                        target="_self"
                                                    >
                                                        <i className="fa fa-comments-o" />
                                                        4
                                                    </a>{" "}
                                                    Comments
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <div className="media-left">
                                            <a href="#">
                                                <img
                                                    className="media-object"
                                                    src="assets/img/pop_right3.jpg"
                                                    alt="Generic placeholder image"
                                                />
                                            </a>
                                        </div>
                                        <div className="media-body">
                                            <h3 className="media-heading">
                                                <a
                                                    href="single.html"
                                                    target="_self"
                                                >
                                                    Apple launches photo-centric
                                                    wrist watch for Android
                                                </a>
                                            </h3>
                                            <span className="media-date">
                                                <a href="#">10Aug- 2015</a>, by:{" "}
                                                <a href="#">Eric joan</a>
                                            </span>
                                            <div className="widget_article_social">
                                                <span>
                                                    <a
                                                        href="single.html"
                                                        target="_self"
                                                    >
                                                        {" "}
                                                        <i className="fa fa-share-alt" />
                                                        424
                                                    </a>{" "}
                                                    Shares
                                                </span>
                                                <span>
                                                    <a
                                                        href="single.html"
                                                        target="_self"
                                                    >
                                                        <i className="fa fa-comments-o" />
                                                        4
                                                    </a>{" "}
                                                    Comments
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <div className="media-left">
                                            <a href="#">
                                                <img
                                                    className="media-object"
                                                    src="assets/img/pop_right4.jpg"
                                                    alt="Generic placeholder image"
                                                />
                                            </a>
                                        </div>
                                        <div className="media-body">
                                            <h3 className="media-heading">
                                                <a
                                                    href="single.html"
                                                    target="_self"
                                                >
                                                    Kodak Hi-Speed shutter
                                                    double shot camera comming
                                                    soon
                                                </a>
                                            </h3>
                                            <span className="media-date">
                                                <a href="#">10Aug- 2015</a>, by:{" "}
                                                <a href="#">Eric joan</a>
                                            </span>
                                            <div className="widget_article_social">
                                                <span>
                                                    <a
                                                        href="single.html"
                                                        target="_self"
                                                    >
                                                        <i className="fa fa-share-alt" />
                                                        424
                                                    </a>{" "}
                                                    Shares
                                                </span>
                                                <span>
                                                    <a
                                                        href="single.html"
                                                        target="_self"
                                                    >
                                                        <i className="fa fa-comments-o" />
                                                        4
                                                    </a>{" "}
                                                    Comments
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="widget_divider">
                                        <a href="#" target="_self">
                                            More News&nbsp;»
                                        </a>
                                    </p>
                                </div>
                                {/* Popular News */}
                                <div className="widget reviews m30">
                                    <div className="widget_title widget_black">
                                        <h2>
                                            <a href="#">Reviews</a>
                                        </h2>
                                    </div>
                                    <div className="media">
                                        <div className="media-left">
                                            <a href="#">
                                                <img
                                                    className="media-object"
                                                    src="assets/img/pop_right1.jpg"
                                                    alt="Generic placeholder image"
                                                />
                                            </a>
                                        </div>
                                        <div className="media-body">
                                            <h3 className="media-heading">
                                                <a
                                                    href="single.html"
                                                    target="_self"
                                                >
                                                    DSLR is the most old camera
                                                    at this time readmore about
                                                    new products
                                                </a>
                                            </h3>
                                            <span className="rating">
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star-half-full" />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <div className="media-left">
                                            <a href="#">
                                                <img
                                                    className="media-object"
                                                    src="assets/img/pop_right2.jpg"
                                                    alt="Generic placeholder image"
                                                />
                                            </a>
                                        </div>
                                        <div className="media-body">
                                            <h3 className="media-heading">
                                                <a
                                                    href="single.html"
                                                    target="_self"
                                                >
                                                    Samsung is the best mobile
                                                    in the android market.
                                                </a>
                                            </h3>{" "}
                                            <span className="rating">
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star-half-full" />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <div className="media-left">
                                            <a href="#">
                                                <img
                                                    className="media-object"
                                                    src="assets/img/pop_right3.jpg"
                                                    alt="Generic placeholder image"
                                                />
                                            </a>
                                        </div>
                                        <div className="media-body">
                                            <h3 className="media-heading">
                                                <a
                                                    href="single.html"
                                                    target="_self"
                                                >
                                                    Apple launches photo-centric
                                                    wrist watch for Android
                                                </a>
                                            </h3>
                                            <span className="rating">
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star-half-full" />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <div className="media-left">
                                            <a href="#">
                                                <img
                                                    className="media-object"
                                                    src="assets/img/pop_right4.jpg"
                                                    alt="Generic placeholder image"
                                                />
                                            </a>
                                        </div>
                                        <div className="media-body">
                                            <h3 className="media-heading">
                                                <a
                                                    href="single.html"
                                                    target="_self"
                                                >
                                                    Yasaki camera launches new
                                                    generic hi-speed shutter
                                                    camera.
                                                </a>
                                            </h3>
                                            <span className="rating">
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star-half-full" />
                                            </span>
                                        </div>
                                    </div>
                                    <p className="widget_divider">
                                        <a href="#" target="_self">
                                            More News&nbsp;»
                                        </a>
                                    </p>
                                </div>
                                {/* Reviews News */}
                                <div className="widget hidden-xs m30">
                                    <img
                                        className="img-responsive widget_img"
                                        src="assets/img/right_add6.jpg"
                                        alt="add_one"
                                    />
                                </div>
                                {/* Advertisement */}
                                <div className="widget m30">
                                    <div className="widget_title widget_black">
                                        <h2>
                                            <a href="#">Most Commented</a>
                                        </h2>
                                    </div>
                                    <div className="media">
                                        <div className="media-left">
                                            <a href="#">
                                                <img
                                                    className="media-object"
                                                    src="assets/img/pop_right1.jpg"
                                                    alt="Generic placeholder image"
                                                />
                                            </a>
                                        </div>
                                        <div className="media-body">
                                            <h3 className="media-heading">
                                                <a
                                                    href="single.html"
                                                    target="_self"
                                                >
                                                    Yasaki camera launches new
                                                    generic hi-speed shutter
                                                    camera.
                                                </a>
                                            </h3>
                                            <div className="media_social">
                                                <span>
                                                    <i className="fa fa-comments-o" />
                                                    <a href="#">4</a> Comments
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <div className="media-left">
                                            <a href="#">
                                                <img
                                                    className="media-object"
                                                    src="assets/img/pop_right2.jpg"
                                                    alt="Generic placeholder image"
                                                />
                                            </a>
                                        </div>
                                        <div className="media-body">
                                            <h3 className="media-heading">
                                                <a
                                                    href="single.html"
                                                    target="_self"
                                                >
                                                    Samsung is the best mobile
                                                    in the android market.
                                                </a>
                                            </h3>
                                            <div className="media_social">
                                                <span>
                                                    <i className="fa fa-comments-o" />
                                                    <a href="#">4</a> Comments
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <div className="media-left">
                                            <a href="#">
                                                <img
                                                    className="media-object"
                                                    src="assets/img/pop_right3.jpg"
                                                    alt="Generic placeholder image"
                                                />
                                            </a>
                                        </div>
                                        <div className="media-body">
                                            <h3 className="media-heading">
                                                <a
                                                    href="single.html"
                                                    target="_self"
                                                >
                                                    Apple launches photo-centric
                                                    wrist watch for Android
                                                </a>
                                            </h3>
                                            <div className="media_social">
                                                <span>
                                                    <i className="fa fa-comments-o" />
                                                    <a href="#">4</a> Comments
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <div className="media-left">
                                            <a href="#">
                                                <img
                                                    className="media-object"
                                                    src="assets/img/pop_right4.jpg"
                                                    alt="Generic placeholder image"
                                                />
                                            </a>
                                        </div>
                                        <div className="media-body">
                                            <h3 className="media-heading">
                                                <a
                                                    href="single.html"
                                                    target="_self"
                                                >
                                                    DSLR is the most old camera
                                                    at this time readmore about
                                                    new products
                                                </a>
                                            </h3>
                                            <div className="media_social">
                                                <span>
                                                    <i className="fa fa-comments-o" />
                                                    <a href="#">4</a> Comments
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="widget_divider">
                                        <a href="#" target="_self">
                                            More News&nbsp;&nbsp;»{" "}
                                        </a>
                                    </p>
                                </div>
                                {/* Most Commented News */}
                                <div className="widget m30">
                                    <div className="widget_title widget_black">
                                        <h2>
                                            <a href="#">Editor Corner</a>
                                        </h2>
                                    </div>
                                    <div className="widget_body">
                                        <img
                                            className="img-responsive left"
                                            src="assets/img/editor.jpg"
                                            alt="Generic placeholder image"
                                        />
                                        <p>
                                            Collaboratively administrate
                                            empowered markets via plug-and-play
                                            networks. Dynamically procrastinate
                                            B2C users after installed base
                                            benefits. Dramatically visualize
                                            customer directed convergence
                                            without
                                        </p>
                                        <p>
                                            Collaboratively administrate
                                            empowered markets via plug-and-play
                                            networks. Dynamically procrastinate
                                            B2C users after installed base
                                            benefits. Dramatically visualize
                                            customer directed convergence
                                            without revolutionary ROI.
                                        </p>
                                        <button className="btn pink">
                                            Read more
                                        </button>
                                    </div>
                                </div>
                                {/* Editor News */}
                                <div className="widget hidden-xs m30">
                                    <img
                                        className="img-responsive add_img"
                                        src="assets/img/right_add7.jpg"
                                        alt="add_one"
                                    />
                                    <img
                                        className="img-responsive add_img"
                                        src="assets/img/right_add7.jpg"
                                        alt="add_one"
                                    />
                                    <img
                                        className="img-responsive add_img"
                                        src="assets/img/right_add7.jpg"
                                        alt="add_one"
                                    />
                                    <img
                                        className="img-responsive add_img"
                                        src="assets/img/right_add7.jpg"
                                        alt="add_one"
                                    />
                                </div>
                                {/*Advertisement */}
                                <div className="widget m30">
                                    <div className="widget_title widget_black">
                                        <h2>
                                            <a href="#">Readers Corner</a>
                                        </h2>
                                    </div>
                                    <div className="widget_body">
                                        <img
                                            className="img-responsive left"
                                            src="assets/img/reader.jpg"
                                            alt="Generic placeholder image"
                                        />
                                        <p>
                                            Collaboratively administrate
                                            empowered markets via plug-and-play
                                            networks. Dynamically procrastinate
                                            B2C users after installed base
                                            benefits. Dramatically visualize
                                            customer directed convergence
                                            without
                                        </p>
                                        <p>
                                            Collaboratively administrate
                                            empowered markets via plug-and-play
                                            networks. Dynamically procrastinate
                                            B2C users after installed base
                                            benefits. Dramatically visualize
                                            customer directed convergence
                                            without revolutionary ROI.
                                        </p>
                                        <button className="btn pink">
                                            Read more
                                        </button>
                                    </div>
                                </div>
                                {/*  Readers Corner News */}
                                <div className="widget hidden-xs m30">
                                    <img
                                        className="img-responsive widget_img"
                                        src="assets/img/podcast.jpg"
                                        alt="add_one"
                                    />
                                </div>
                                {/*Advertisement*/}
                            </div>
                            {/*Right Section*/}
                        </div>
                        {/* row */}
                    </div>
                    {/* container */}
                </section>
            </>
        );
    }
}
const mapStateToProps = (state) => ({
    news: state.newsReducer,
});

export default connect(mapStateToProps, { getSingleNews })(NewsDetail);
