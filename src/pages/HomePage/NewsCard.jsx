import React, { Component } from 'react'

export default class newscard extends Component {



    render() {
        return (
            <div>

            
                <div className="category_section design">
                    <div className="article_title header_blue">
                        <h2><a href="category.html" target="_self">Design</a></h2>
                    </div>

                    <div className="category_article_wrapper">
                        <div className="row">


                    { this.props.news.map(w => {
                            {w}
                    })() }




                        { console.log(this.props.news) }
                            <div className="col-md-6">
                                <div className="category_article_body">
                                    <div className="top_article_img">
                                        <a href="single.html" target="_self">
                                            <img className="img-responsive" src="assets/img/design_top1.jpg" alt="feature-top" />
                                        </a>
                                    </div>

                                    <span className="tag blue"><a href="category.html" target="_self">Design</a></span>

                                    <div className="category_article_title">
                                        <h2><a href="single.html" target="_self">Marketing Tranportation Fast and </a></h2>
                                    </div>

                                    <div className="category_article_date"><a href="#">10Aug- 2015</a>, by: <a href="#">Eric joan</a></div>


                                    <div className="category_article_content">
                                        Collaboratively administrate empowered markets via plug-and-play networks.
                                    </div>

                                    <div className="media_social">
                                        <span><a href="#"><i className="fa fa-share-alt"></i>424 </a> Shares</span>
                                        <span><i className="fa fa-comments-o"></i><a href="#">4</a> Comments</span>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                    <p className="divider"><a href="#">More News&nbsp;&raquo;</a></p>
                </div>
            </div>
        )
    }
}
