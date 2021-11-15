import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { GetSingleTagData } from "../redux/actions/News";
import { GetSidebarData } from "../redux/actions/News";
import { NewsCard } from "../components/skeletons/NewsCard";
import { Sidebar } from "./Sidebar";
import { Loading } from "../components/includes/Loading";
import { beginTheBar } from "../services/topLoadingBar";
import moment from "moment";

export class Tag extends Component {
    componentDidMount() {
        beginTheBar();
        const { tag } = this.props.match.params;
        this.props.GetSingleTagData(tag);
        this.props.GetSidebarData();
    }
    render() {
        const { tag, isLoading } = this.props;
        if (isLoading === true) {
            return <Loading />;
        } else {
            return (
                <Fragment>
                    <section class="breadcrumb_section">
                        <div class="container">
                            <div class="row">
                                <ol class="breadcrumb">
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li class="active">{tag && tag.tag[0]}</li>
                                </ol>
                            </div>
                        </div>
                    </section>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-8">
                                <div class="entity_title header_purple">
                                    <h1>
                                        <a href="" target="_blank">
                                            {/* {category && category.name} */}
                                        </a>
                                    </h1>
                                </div>
                                <div class="row">
                                    {tag &&
                                        tag.news.map((news, index) => {
                                            return (
                                                <NewsCard news={news} index={index} tag={tag.tag} />
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
                                    most_commented_news={this.props.most_commented_news}
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
    console.log("sta", state.tagReducer),
    {
        tag: state.tagReducer.single_tag_data,
        isLoading: state.tagReducer.isLoading,
        most_commented_news: state.sidebarReducer.news.most_commented,
        popular_news: state.sidebarReducer.news.popular_news,
    }
);

export default connect(mapStateToProps, {
    GetSingleTagData,
    GetSidebarData,
})(Tag);
