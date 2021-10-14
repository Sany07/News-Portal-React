import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class newscard extends Component {
    // const ImageList = props => {
    //   const images = props.images.map(image => {
    //     return <ImageCard key={image.id} image={image} />;
    //   });

    //   return <div className="image-list">{images}</div>;
    // };
    renderList() {

        console.log(this.props.news);
        return this.props.news.map(news => {
            return (

                <div className="col-md-6">
                    <div className="category_article_body">
                        <div className="top_article_img">
                            <Link to="/single" >
                                <img className="img-responsive" style={{ width: 360, height: 274 }} src={`http://localhost:8000${news.thumbnail}`} alt="feature-top" />
                            </Link>
                        </div>
                        <span className="tag blue"><a href="category.html" target="_self">{news.category.name}</a></span>
                        <div className="category_article_title">
                            <h2><Link to="/single">{news.title} </Link></h2>
                        </div>

                        <div className="category_article_date"><a href="#">{news.timestamp}</a>, by: <a href="#">{news.author.user.username}</a></div>


                        <div className="category_article_content">
                            {news.description}
                        </div>

                        <div className="media_social">
                            <span><a href="#"><i className="fa fa-share-alt"></i>424 </a> Shares</span>
                            <span><i className="fa fa-comments-o"></i><a href="#">{news.total_comment_count}</a> Comments</span>
                        </div>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                <div className="category_section design">
                    <div className="article_title header_blue">
                        <h2><a href="category.html" target="_self">Design</a></h2>
                    </div>
                    <div className="category_article_wrapper">
                        <div className="row">
                            {this.renderList()}

                        </div>

                    </div>
                    <p className="divider"><a href="#">More News&nbsp;&raquo;</a></p>
                </div>
            </div>
        )
    }
}
