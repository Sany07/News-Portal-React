import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

export const SingleNewsCard = (props) => {
    const { news } = props;
    return (
        <>
            <div className="entity_title">
                <h1>
                    {news.title}
                </h1>
            </div>
            {/* entity_title */}
            <div className="entity_meta">
                {moment(news.timestamp).format("Do MMM  YYYY")}
                
                , by:
                <Link href="#">
                    {news.author && news.author.user.username}
                </Link>
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
                <div href="#" className="icons-sm sh-ic">
                    <i className="fa fa-share-alt" />
                    <b>424</b> <span className="share_ic">Shares</span>
                </div>
                <Link to="#" className="icons-sm fb-ic">
                    <i className="fa fa-facebook" />
                </Link>
                {/*Twitter*/}
                 <Link to="#" className="icons-sm tw-ic">
                    <i className="fa fa-twitter" />
                </Link>
                {/*Google +*/}
                 <Link to="#" className="icons-sm inst-ic">
                    <i className="fa fa-google-plus"> </i>
                </Link>
                {/*Linkedin*/}
                 <Link to="#" className="icons-sm tmb-ic">
                    <i className="fa fa-ge"> </i>
                </Link>
                {/*Pinterest*/}
                 <Link to="#" className="icons-sm rss-ic">
                    <i className="fa fa-rss"> </i>
                </Link>
            </div>
            {/* entity_social */}
            <div className="entity_thumb">
                <img
                    className="img-responsive"
                    src={news.thumbnail_url ? news.thumbnail_url : news.thumbnail}
                    alt="feature-top"
                />
            </div>
            {/* entity_thumb */}
            <div className="entity_content">
                <p>{news.description}</p>
            </div>
        </>
    );
};
