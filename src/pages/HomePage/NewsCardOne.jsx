import React from "react";
import { Link } from "react-router-dom";
import { TagItemSkeleton } from "../../components/skeletons/TagItemSkeleton";
import { MoreNewsSkeleton } from "../../components/skeletons/MoreNewsButtonSkeleton";
import moment from "moment";

export const NewsCardOne = (props) => {
    const { newslist } = props;

    return (
        <>
            {newslist.map((news, index) => {
                return (
                    <div key={index}>
                        {index === 0 ? (
                            <div className="article_title header_pink">
                                <h2>
                                    <Link
                                        to={`/category/${news.category.slug}`}
                                    >
                                        {news.category.name}
                                    </Link>
                                </h2>
                            </div>
                        ) : (
                            ""
                        )}

                        <div
                            className="col-md-6"
                            style={{
                                marginBottom: "15px",
                            }}
                        >
                            <div
                                className="category_article_body"
                                key={news.id}
                            >
                                <div className="top_article_img">
                                    <Link to={`/post/${news.slug}`}>
                                        <img
                                            style={{
                                                height: 279,
                                                width: 345,
                                            }}
                                            className="img-responsive"
                                            src={
                                                news.thumbnail_url
                                                    ? news.thumbnail_url
                                                    : news.thumbnail.startsWith(
                                                          "/media"
                                                      )
                                                    ? `http://localhost:8000${news.thumbnail}`
                                                    : `http://localhost:8000/media/${news.thumbnail}`
                                            }
                                            alt="feature-top"
                                        />
                                    </Link>
                                </div>
                                <TagItemSkeleton
                                    tag={news.tags}
                                    css={"tag blue"}
                                />
                                <div className="category_article_title">
                                    <h2>
                                        <Link to={`/post/${news.slug}`}>
                                            {news.title}
                                        </Link>
                                    </h2>
                                </div>

                                <div className="category_article_date">
                                        {moment(news.timestamp).format(
                                            "Do MMM  YYYY"
                                        )}
                                    , by:{" "}
                                    <Link to="#">{news.author.user.username}</Link>
                                </div>

                                <div className="category_article_content">
                                    {news.description.substring(0, 90)}
                                    ...
                                </div>

                                <div className="media_social">
                                    <span>
                                        <i className="fa fa-share-alt"></i>
                                            424
                                        Shares
                                    </span>
                                    <span>
                                        <i className="fa fa-comments-o"></i>
                                            {news.total_comment_count}
                                        Comments
                                    </span>
                                </div>
                            </div>
                        </div>
                        <MoreNewsSkeleton
                            news={newslist}
                            index={index}
                            slug={news.category.slug}
                        />
                    </div>
                );
            })}
        </>
    );
};
