import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
export const RelatedNews = (props) => {
    const { related_post, setSlug } = props;
    return (
        <>
            {related_post &&
                related_post.map((news) => {
                    return (
                        <div className="col-md-6 s" key={news.id}>
                            <div className="media">
                                <div className="media-left">
                                        <img
                                            style={{
                                                height: 118,
                                                width: 100,
                                            }}
                                            className="media-object"
                                            src={
                                                news.thumbnail_url
                                                    ? news.thumbnail_url
                                                    : news.thumbnail.startsWith(
                                                          "/media"
                                                      )
                                                    ? `http://localhost:8000${news.thumbnail}`
                                                    : `http://localhost:8000/media/${news.thumbnail}`
                                            }
                                            alt="{news.title}"
                                        />
                                </div>
                                <div className="media-body">
                                    {/* <span className="tag purple">
                                        <Link href="category.html">
                                            Mobile
                                        </Link>
                                    </span> */}
                                    <h3 className="media-heading">
                                        <Link
                                            onClick={() =>
                                                setSlug(news.slug, news.id)
                                            }
                                            to={`/post/${news.slug}/`}
                                        >
                                            {news.title}
                                        </Link>
                                    </h3>
                                    <span className="media-date">
                                        {moment(news.timestamp).format(
                                            "Do MMM  YYYY"
                                        )}
                                        {/* , by:{" "}
                                        {/* <a href="#">
                                            {news.author &&
                                                news.author.user.username}
                                        </a> */}
                                    </span>
                                    <div className="media_social">
                                        <span>
                                        
                                                <i className="fa fa-share-alt" />
                                                424
                                          
                                            Shares
                                        </span>
                                        <span>
                                            {news.total_comment_count} Comments
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
