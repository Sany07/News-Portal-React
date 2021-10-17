import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
export const RelatedNews = (props) => {
    const { related_post, rr } = props;
    return (
        <>
            {related_post &&
                related_post.map((news) => {
                    return (
                        <div className="col-md-6 s">
                            <div className="media">
                                <div className="media-left">
                                    <a href="#">
                                        <img
                                            className="media-object"
                                            src={`http://localhost:8000${news.thumbnail}`}
                                            alt="Generic placeholder image"
                                        />
                                    </a>
                                </div>
                                <div className="media-body">
                                    <span className="tag purple">
                                        <a href="category.html" target="_self">
                                            Mobile
                                        </a>
                                    </span>
                                    <h3
                                        className="media-heading"
                                        onClick={rr({
                                            id: news.slug,
                                        })}
                                    >
                                        <Link to={`/post/${news.slug}/`}>
                                            {news.title}
                                        </Link>
                                    </h3>
                                    <span className="media-date">
                                        <a href="#">
                                            {moment(news.timestamp).format(
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
                })}
        </>
    );
};
