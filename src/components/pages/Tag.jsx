import React, { Component } from 'react'

export default class Tag extends Component {
    render() {
        return (
            <div>
                <section className="breadcrumb_section">
                    <div className="container">
                        <div className="row">
                            <ol className="breadcrumb">
                                <li><a href="{% url 'newspaper:home'%}">Home</a></li>
                                <li><a href="#">News</a></li>
                                <li><a href="#">Tech</a></li> 
                                <li className="active"><a href="{% url 'newspaper:tag' tag %}"> tag </a></li>
                            </ol>
                        </div>
                    </div>
                </section>

                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="entity_title header_purple">
                                <h1><a href="{% url 'newspaper:tag' tag %}" target="_blank">title</a></h1>
                            </div>  
                        </div>
                    </div>
                    <nav aria-label="Page navigation" className="pagination_section">
                        <ul className="pagination">
                            <li>
                                <a href="#" aria-label="Previous"> <span aria-hidden="true">&laquo;</span> </a>
                            </li>
                            <li><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                            <li><a href="#">5</a></li>
                            <li>
                                <a href="#" aria-label="Next" className="active"> <span aria-hidden="true">&raquo;</span> </a>
                            </li>
                        </ul>
                    </nav>
            </div>
        </div>
        )
    }
}
