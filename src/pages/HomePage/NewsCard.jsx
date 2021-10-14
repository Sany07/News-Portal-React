import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import moment from 'moment'
import newscard from './NewsCard';
import { NewsCatalogFive } from './NewsCatalogFive';

export const Newscardtest = (props) => {
    const {news} = props;
    console.log(news);
    return (
        <div>
        {    news.map(news => {
             return (
      
           <div className="category_section camera">
                                    <div className="article_title header_orange">
                                        <h2><a href="category.html" target="_self">Camera</a></h2>
                                    </div>

                                    <div className="category_article_wrapper">
                                        <div className="row">
                                            <div className="col-md-5">
                                                <div className="top_article_img">
                                                    <a href="single.html" target="_self">
                                                        <img className="img-responsive" src="assets/img/cam_left1.jpg" alt="feature-top" />
                                                    </a>
                                                </div>

                                            </div>
                                            <div className="col-md-7">
                                                <span className="tag orange">Camera</span>

                                                <div className="category_article_title">
                                                    <h2><a href="single.html" target="_self">Yasaki camera launches new generic hi-speed </a></h2>
                                                </div>

                                                <div className="article_date"><a href="#">10Aug- 2015</a>, by: <a href="#">Eric joan</a></div>

                                                <div className="category_article_content">
                                                    Collaboratively administrate empowered markets via plug-and-play networks. Dynamically
                                                    procrastinate.
                                                </div>


                                                <div className="media_social">
                                                    <span><a href="#"><i className="fa fa-share-alt"></i>424 </a> Shares</span>
                                                    <span><i className="fa fa-comments-o"></i><a href="#">4</a> Comments</span>
                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                    <p className="divider"><a href="#">More News&nbsp;&raquo;</a></p>
           </div>



             )
        })

        }
        </div>
    )
}


