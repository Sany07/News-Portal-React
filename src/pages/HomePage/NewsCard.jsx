import React, { Component } from "react";
import { Link } from "react-router-dom";
import newscard from "./NewsCard";
import { NewsCatalogFive } from "./NewsCatalogFive";
import { TagItemSkeleton } from "../../components/skeletons/TagItemSkeleton";
import { MoreNewsSkeleton } from "../../components/skeletons/MoreNewsButtonSkeleton";

import moment from "moment";

export const Newscardtest = (props) => {
    const { newslist } = props;
    console.log(props);

    return (
        <div>
            {newslist.map((news, index) => {
                return (
                    <div className="category_section camera">
                        <div className="category_article_wrapper">
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="top_article_img">
                                        <a href="single.html" target="_self">
                                            <img
                                                className="img-responsive"
                                                src={`http://localhost:8000${news.thumbnail}`}
                                                alt="feature-top"
                                            />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <TagItemSkeleton
                                        tag={news.tags}
                                        css={"tag orange"}
                                    />
                                    <div className="category_article_title">
                                        <h2>
                                            <Link to={`/single/${news.slug}`}>
                                                {news.title}
                                            </Link>
                                        </h2>
                                    </div>

                                    <div className="article_date">
                                        <a href="#">
                                            {moment(news.timestamp).format(
                                                "Do MMM  YYYY"
                                            )}
                                        </a>
                                        , by:
                                        <a href="#">
                                            {news.author.user.username}
                                        </a>
                                    </div>

                                    <div className="category_article_content">
                                        {news.description.substring(0, 90)}...
                                    </div>

                                    <div className="media_social">
                                        <span>
                                            <a href="#">
                                                <i className="fa fa-share-alt"></i>
                                                424
                                            </a>
                                            Shares
                                        </span>
                                        <span>
                                            <i className="fa fa-comments-o"></i>
                                            <a href="#">
                                                {news.total_comment_count}
                                            </a>
                                            Comments
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* {index === news.length - 1 ? (
                            <p className="divider">
                                <Link to={`/category/${news.category.slug}`}>
                                    More News&nbsp;&raquo;
                                </Link>
                            </p>
                        ) : (
                            ""
                        )} */}

                        <MoreNewsSkeleton
                            news={newslist}
                            index={index}
                            slug={news.category.slug}
                        />
                    </div>
                );
            })}
        </div>
    );
};
