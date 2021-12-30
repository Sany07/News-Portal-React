import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

export const Sidebar = (props) => {
    const { popular_news, most_commented_news, setSlug } = props;
    return (
        <Fragment>
            <div className="col-md-4">
                <div className="widget">
                    <div className="widget_title widget_black">
                        <h2>
                        <Link to="#">Popular News </Link>
                        </h2>
                    </div>
                    {popular_news &&
                        popular_news.map((popular_news) => {
                            return (
                                <div className="media" key={popular_news.id}>
                                    <div className="media-left">
                                        <Link
                                            onClick={() =>
                                                setSlug
                                                    ? setSlug(
                                                        popular_news.slug,
                                                        popular_news.id
                                                      )
                                                    : ""
                                            }
                                            to={`/post/${popular_news.slug}`}
                                        >
                                            <img
                                                style={{
                                                    height: 100,
                                                    width: 100,
                                                }}
                                                className="media-object"
                                                src={
                                                    popular_news.thumbnail_url
                                                        ? popular_news.thumbnail_url
                                                        : popular_news.thumbnail.startsWith(
                                                              "/media"
                                                          )
                                                        ? `http://localhost:8000${popular_news.thumbnail}`
                                                        : `http://localhost:8000/media/${popular_news.thumbnail}`
                                                }
                                                alt="i"
                                            />
                                        </Link>
                                    </div>
                                    <div className="media-body">
                                        <h3 className="media-heading">
                                            <Link
                                                onClick={
                                                    setSlug
                                                        ? () =>
                                                              setSlug(
                                                                  popular_news.slug,
                                                                  popular_news.id
                                                              )
                                                        : ""
                                                }
                                                to={`/post/${popular_news.slug}`}
                                            >
                                                {popular_news.title}
                                            </Link>
                                        </h3>
                                        <span className="media-date">
                                            {moment(
                                                popular_news.timestamp
                                            ).format("Do MMM  YYYY")}
                                            , by:{" "}
                                            <Link to="#">
                                                {
                                                    popular_news.author.user
                                                        .username
                                                }
                                            </Link>
                                        </span>
                                        <div className="widget_article_social">
                                            <span>
                                                <Link 
                                                    to="#"
                                                    target="_self"
                                                >
                                                    {" "}
                                                    <i className="fa fa-share-alt"></i>
                                                    424
                                                </Link>{" "}
                                                Shares
                                            </span>
                                            <span>
                                                <i className="fa fa-comments-o"></i>
                                                    {
                                                        popular_news.total_comment_count
                                                    }
                                                
                                                Comments
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    <p className="widget_divider">
                        <Link to="#" target="_self">
                            More News&nbsp;&raquo;
                        </Link>
                    </p>
                </div>

                <div className="widget m30">
                    <div className="widget_title widget_black">
                        <h2>
                            <Link to="#">Most Commented</Link>
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
                                            onClick={() =>
                                                setSlug
                                                    ? setSlug(
                                                          most_commented_news.slug,
                                                          most_commented_news.id
                                                      )
                                                    : ""
                                            }
                                            to={`/post/${most_commented_news.slug}`}
                                        >
                                            <img
                                                style={{
                                                    height: 100,
                                                    width: 100,
                                                }}
                                                className="media-object"
                                                src={
                                                    most_commented_news.thumbnail_url
                                                        ? most_commented_news.thumbnail_url
                                                        : most_commented_news.thumbnail.startsWith(
                                                              "/media"
                                                          )
                                                        ? `http://localhost:8000${most_commented_news.thumbnail}`
                                                        : `http://localhost:8000/media/${most_commented_news.thumbnail}`
                                                }
                                                alt="i"
                                            />
                                        </Link>
                                    </div>
                                    <div className="media-body">
                                        <h3 className="media-heading">
                                            <Link
                                                onClick={() =>
                                                    setSlug
                                                        ? setSlug(
                                                              most_commented_news.slug,
                                                              most_commented_news.id
                                                          )
                                                        : ""
                                                }
                                                to={`/post/${most_commented_news.slug}`}
                                            >
                                                {most_commented_news.title}
                                            </Link>
                                        </h3>
                                        <div className="media_social">
                                            <span>
                                                <i className="fa fa-comments-o"></i>
                                                { most_commented_news.total_comment_count } Comments
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
