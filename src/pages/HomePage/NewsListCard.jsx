import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import moment from 'moment'
import newscard from './NewsCard';
import { NewsCatalogFive } from './NewsCatalogFive';
import {Newscardtest} from './NewsCard';

export default class NewsListCard extends Component {

    renderNews() {
        const { news_catalog_five, news_catalog_four } = this.props;
        // console.log(this.props.news_catalog_four);
        return news_catalog_five.map(news => {
            return (
                <div className="col-md-6" style={{ marginBottom: '15px' }}>
                    <div className="category_article_body">
                        <div className="top_article_img">
                            <Link to="/single" >
                                <img className="img-responsive" style={{ width: 360, height: 274 }} src={`http://localhost:8000${news.thumbnail}`} alt="feature-top" />
                            </Link>
                        </div>
                        <span className="tag blue"><a href="category.html" target="_self">{news.category.name}</a></span>
                        <div className="category_article_title">
                            <h2><Link to={`/single/${news.slug}`} >{news.title} </Link></h2>
                        </div>

                        <div className="category_article_date"><a href="#">
                            {moment(news.timestamp).format('Do MMM  YYYY')}

                        </a>, by: <a href="#">{news.author.user.username}</a></div>


                        <div className="category_article_content">
                            {news.description.substring(0, 90)}...
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
                <div className="category_section camera">
                    <div className="article_title header_orange">
                        <h2><a href="category.html" target="_self">Camera</a></h2>
                    </div>
                    <Newscardtest news={this.props.news_catalog_four}/>
                    <NewsCatalogFive />
                    
                    <p className="divider"><a href="#">More News&nbsp;&raquo;</a></p>
                </div>


                <div className="category_section design">
                    <div className="article_title header_blue">
                        <h2><a href="category.html" target="_self">Design</a></h2>
                    </div>
                    <div className="category_article_wrapper">
                        <div className="row">
                            {this.renderNews()}
                        </div>

                    </div>
                    <p className="divider"><a href="#">More News&nbsp;&raquo;</a></p>
                </div>
            </div>
        )
    }
}
