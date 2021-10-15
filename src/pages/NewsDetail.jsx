import React from "react";

const NewsDetail = () => {
    const news = [];
    return (
        <div>
            <div>
                <section className="breadcrumb_section">
                    <div className="container">
                        <div className="row">
                            <ol className="breadcrumb">
                                <li>
                                    <a href="{% url 'newspaper:home'%}">Home</a>
                                </li>
                                <li>
                                    <a href="#">News</a>
                                </li>
                                <li>
                                    <a href="#">Tech</a>
                                </li>
                                <li className="active">
                                    <a href="{{ category.get_absolute_url }}">
                                        {"{"}
                                        {"{"} category {"}"}
                                        {"}"}
                                    </a>
                                </li>
                            </ol>
                        </div>
                    </div>
                </section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="entity_title header_purple">
                                <h1>
                                    <a href target="_blank">
                                        {"{"}category{"}"}
                                    </a>
                                </h1>
                            </div>
                            <div className="row">
                                <div
                                    className="entity_wrapper"
                                    style={{ marginLeft: "17px" }}
                                >
                                    <div className="entity_thumb">
                                        <img
                                            className="img-responsive"
                                            style={{
                                                width: "775px",
                                                maxHeight: "450px",
                                            }}
                                            src="{ news.thumbnail.url }"
                                            alt="feature-top"
                                        />
                                    </div>
                                    <div className="entity_title">
                                        <a
                                            href="{ news.get_absolute_url }"
                                            target="_blank"
                                        >
                                            <h3>
                                                {" "}
                                                {"{"}news.title{"}"}{" "}
                                            </h3>
                                        </a>
                                    </div>
                                    <div className="entity_meta">
                                        <a href="#">10Aug- 2015</a>, by:{"{"}" "
                                        {"}"}
                                        <a href="#">
                                            {"{"}news.author | title{"}"}
                                        </a>
                                    </div>
                                    <div className="entity_content">
                                        {"{"}news.description{"}"}
                                    </div>
                                    <div className="entity_social">
                                        <span>
                                            <i className="fa fa-share-alt" />
                                            424{"{"}" "{"}"}
                                            <a href="#">Shares</a>
                                            {"{"}" "{"}"}
                                        </span>
                                        <span>
                                            <i className="fa fa-comments-o" />
                                            {"{"}news.get_comment_count{"}"}
                                            {"{"}" "{"}"}
                                            <a href="#">Comments</a>
                                            {"{"}" "{"}"}
                                        </span>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="category_article_body  mb-5">
                                        <div className="top_article_img">
                                            <img
                                                className="img-fluid"
                                                style={{
                                                    width: "360px",
                                                    height: "250px",
                                                }}
                                                src="{ news.thumbnail.url }"
                                                alt="feature-top"
                                            />
                                        </div>
                                        <div className="category_article_title">
                                            <h5>
                                                <a
                                                    href="{ news.get_absolute_url }"
                                                    target="_blank"
                                                >
                                                    {"{"}news.title{"}"}
                                                    {"{"}" "{"}"}
                                                </a>
                                            </h5>
                                        </div>
                                        <div className="article_date">
                                            <a href="#">10Aug- 2015</a>, by:
                                            {"{"}" "{"}"}
                                            <a href="#">Eric joan</a>
                                        </div>
                                        <div className="category_article_content">
                                            {"{"}news.description{"}"}
                                        </div>
                                        <div className="article_social">
                                            <span>
                                                <a href="#">
                                                    <i className="fa fa-share-alt" />
                                                    424{"{"}" "{"}"}
                                                </a>
                                                {"{"}" "{"}"}
                                                Shares
                                            </span>
                                            <span>
                                                <i className="fa fa-comments-o" />
                                                <a href="#">
                                                    {"{"}news.get_comment_count
                                                    {"}"}
                                                    {"}"}
                                                </a>
                                                {"{"}" "{"}"}
                                                Comments
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 mt-5 mb-5">
                                    <div className="widget_advertisement">
                                        <img
                                            className="img-responsive"
                                            src="{% static 'assets/img/category_advertisement.jpg' %}"
                                            alt="feature-top"
                                        />
                                    </div>
                                </div>
                            </div>
                            {"{"}/* pagination */{"}"}
                        </div>
                        {"{"}/* sidebar */{"}"}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsDetail;
