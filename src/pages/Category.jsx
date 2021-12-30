import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { GetSingleCategoryData } from "../redux/actions/News";
import { GetSidebarData } from "../redux/actions/News";
import { NewsCard } from "../components/skeletons/NewsCard";
import { Sidebar } from "./Sidebar";
import { Loading } from "../components/includes/Loading";

class Category extends Component {
        componentDidMount() {
            const { slug } = this.props.match.params;
            this.props.GetSingleCategoryData(slug);
            this.props.GetSidebarData();
        }

        // componentDidUpdate(){
        //     const { slug } = this.props.match.params;
        //     console.log('slug1', slug);
        //     console.log('slug11', this.props.match.params.slug);
    
        //     if (this.props.match.params.slug !== slug) {
        //         console.log('slug2', slug);
        //         this.props.GetSingleCategoryData(slug);
        //         }
        //     }


    render() {
        const { category, isLoading } = this.props;

        if (isLoading === true) {
            return <Loading />;
        } else {
            if (category && category.slug !== this.props.match.params.slug) {
                console.log('slug2', this.props.match.params.slug);
                this.props.GetSingleCategoryData(this.props.match.params.slug);
            }
            return (
                <Fragment>
                    <section class="breadcrumb_section">
                        <div class="container">
                            <div class="row">
                                <ol class="breadcrumb">
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li class="active">
                                        {category && category.name}
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </section>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-8">
                                <div class="entity_title header_purple">
                                    <h1>
                                        {category && category.name}
                                    </h1>
                                </div>
                                <div class="row">
                                    {category &&
                                        category.news.map((news, index) => {
                                            return (
                                                <NewsCard
                                                    news={news}
                                                    index={index}
                                                />
                                            );
                                        })}
                                </div>

                                {/* {% if is_paginated %}
                            {% include 'site/includes/_paginator.html' %}
                        {% endif %} */}
                                {/* </div>  */}
                            </div>
                            {this.props.popular_news && (
                                <Sidebar
                                    popular_news={this.props.popular_news}
                                    most_commented_news={
                                        this.props.most_commented_news
                                    }
                                />
                            )}
                        </div>
                    </div>
                    ;
                </Fragment>
            );
        }
    }
}
const mapStateToProps = (state) => (
    
    {
        category: state.categoryReducer.single_category_data,
        isLoading: state.categoryReducer.isLoading,
        most_commented_news: state.sidebarReducer.news.most_commented,
        popular_news: state.sidebarReducer.news.popular_news,
    }
);

export default connect(mapStateToProps, {
    GetSingleCategoryData,
    GetSidebarData,
})(Category);
