import React, { Fragment } from "react";

export default function Category() {
    return (
        <Fragment>
            <section class="breadcrumb_section">
    <div class="container">
        <div class="row">
            <ol class="breadcrumb">
                <li><a href="{% url 'newspaper:home'%}">Home</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Tech</a></li>
                <li class="active"><a href="{{ category.get_absolute_url }}">{{ category }}</a></li>
            </ol>
        </div>
    </div>
</section>

<div class="container">
    <div class="row">
        <div class="col-md-8">
            <div class="entity_title header_purple">
                <h1><a href="{{ category.get_absolute_url }}" target="_blank">{{ category }}</a></h1>
            </div>
            <!-- entity_title -->
            <div class="row">
                {% for news in object_list %}
                {% if forloop.first %}
                <div class="entity_wrapper" style="margin-left:17px">
                    <div class="entity_thumb">
                        <img class="img-responsive" style="width: 775px; max-height:450px;"
                            src="{{ news.thumbnail.url }}" alt="feature-top">
                    </div>
                    <!-- entity_thumb -->

                    <div class="entity_title">
                        <a href="{{ news.get_absolute_url }}" target="_blank">
                            <h3> {{ news.title }} </h3>
                        </a>
                    </div>
                    <!-- entity_title -->

                    <div class="entity_meta">
                        <a href="#">10Aug- 2015</a>, by: <a href="#">{{ news.author|title }}</a>
                    </div>
                    <!-- entity_meta -->

                    <div class="entity_content">
                        {{ news.description|truncatechars:255 }}
                    </div>
                    <!-- entity_content -->

                    <div class="entity_social">
                        <span><i class="fa fa-share-alt"></i>424 <a href="#">Shares</a> </span>
                        <span><i class="fa fa-comments-o"></i>{{ news.get_comment_count }} <a href="#">Comments</a> </span>
                    </div>
                    <!-- entity_social -->

                </div>
                <!-- entity_wrapper -->
                {% else %}
                <div class="col-md-6">
                    <div class="category_article_body  mb-5">
                        <div class="top_article_img">
                            <img class="img-fluid" style="width: 360px; height:250px;" src="{{ news.thumbnail.url }}"
                                alt="feature-top">
                        </div>
                        <!-- top_article_img -->

                        <div class="category_article_title">
                            <h5><a href="{{ news.get_absolute_url }}" target="_blank">{{ news.title }} </a></h5>
                        </div>
                        <!-- category_article_title -->

                        <div class="article_date">
                            <a href="#">10Aug- 2015</a>, by: <a href="#">Eric joan</a>
                        </div>
                        <!-- article_date -->

                        <div class="category_article_content">
                            {{ news.description|truncatechars:255 }}
                        </div>
                        <!-- category_article_content -->

                        <div class="article_social">
                            <span><a href="#"><i class="fa fa-share-alt"></i>424 </a> Shares</span>
                            <span><i class="fa fa-comments-o"></i><a href="#">{{ news.get_comment_count }}</a> Comments</span>
                        </div>
                        <!-- article_social -->

                    </div>
                    <!-- category_article_body -->
                </div>
                {% if forloop.counter0|divisibleby:2 %}
                <div class="col-md-12 mt-5 mb-5">
                    <div class="widget_advertisement">
                        <img class="img-responsive" src="{% static 'assets/img/category_advertisement.jpg' %}"
                            alt="feature-top">
                    </div>
                </div>
                {% endif %}
                {% endif %}

                {% endfor %}

                <!-- col-md-6 -->

            </div>
            <!-- row -->
            <!-- widget_advertisement -->
            {% if is_paginated %}
                {/* {% include 'site/includes/_paginator.html' %} */}
            {% endif %}
            <!-- navigation -->
        </div>
        <!-- col-md-8 -->
        <!-- sidebar -->
        {/* {% include 'site/includes/_sidebar.html' %} */}
        <!-- col-md-4 -->

    </div>
    <!-- row -->

</div>
        </Fragment>
    );
}
