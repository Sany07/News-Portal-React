import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { GetSidebarData } from "../redux/actions/News";
import moment from "moment";

const Sidebar = (props) => {
    const { popular_news, most_commented_news } = props;
    return (
        <Fragment>
            <div className="col-md-4">
                <div className="widget">
                    <div className="widget_title widget_black">
                        <h2>
                            <a href="#">Popular News</a>
                        </h2>
                    </div>
                    {popular_news &&
                        popular_news.map((popular_news) => {
                            return (
                                <div className="media" key={popular_news.id}>
                                    <div className="media-left">
                                        <Link to={`/post/${popular_news.slug}`}>
                                            <img
                                                style={{
                                                    height: 100,
                                                    width: 100,
                                                }}
                                                className="media-object"
                                                src={`http://localhost:8000${popular_news.thumbnail}`}
                                                alt="Generic placeholder image"
                                            />
                                        </Link>
                                    </div>
                                    <div className="media-body">
                                        <h3 className="media-heading">
                                            <Link
                                                to={`/post/${popular_news.slug}`}
                                            >
                                                {popular_news.title}
                                            </Link>
                                        </h3>{" "}
                                        <span className="media-date">
                                            <a href="#">
                                                {moment(
                                                    popular_news.timestamp
                                                ).format("Do MMM  YYYY")}
                                            </a>
                                            , by:{" "}
                                            <a href="#">
                                                {
                                                    popular_news.author.user
                                                        .username
                                                }
                                            </a>
                                        </span>
                                        <div className="widget_article_social">
                                            <span>
                                                <a
                                                    href="single.html"
                                                    target="_self"
                                                >
                                                    {" "}
                                                    <i className="fa fa-share-alt"></i>
                                                    424
                                                </a>{" "}
                                                Shares
                                            </span>
                                            <span>
                                                <a
                                                    href="single.html"
                                                    target="_self"
                                                >
                                                    <i className="fa fa-comments-o"></i>
                                                    {
                                                        popular_news.total_comment_count
                                                    }
                                                </a>{" "}
                                                Comments
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    <p className="widget_divider">
                        <a href="#" target="_self">
                            More News&nbsp;&raquo;
                        </a>
                    </p>
                </div>

                <div className="widget m30">
                    <div className="widget_title widget_black">
                        <h2>
                            <a href="#">Most Commented</a>
                        </h2>
                    </div>
                    {most_commented_news &&
                        most_commented_news.map((most_commented_news) => {
                            return (
                                <div
                                    className="media"
                                    key={most_commented_news.id}
                                >
                                    <div className="media-left">
                                        <Link
                                            to={`/post/${most_commented_news.slug}`}
                                        >
                                            <img
                                                style={{
                                                    height: 100,
                                                    width: 100,
                                                }}
                                                className="media-object"
                                                src={`http://localhost:8000${most_commented_news.thumbnail}`}
                                                alt="Generic placeholder image"
                                            />
                                        </Link>
                                    </div>
                                    <div className="media-body">
                                        <h3 className="media-heading">
                                            <Link
                                                to={`/post/${most_commented_news.slug}`}
                                            >
                                                {most_commented_news.title}
                                            </Link>
                                        </h3>

                                        <div className="media_social">
                                            <span>
                                                <i className="fa fa-comments-o"></i>
                                                <a href="#">
                                                    {
                                                        most_commented_news.total_comment_count
                                                    }
                                                </a>{" "}
                                                Comments
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
        </Fragment>
    );
};

export default Sidebar;
