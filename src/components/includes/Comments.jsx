import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export const Comments = (props) => {
    const { comments } = props;
    return (
        <Fragment>
            {comments &&
                comments.map((comment) => {
                    return (
                        <div className="media">
                            <div className="media-left">
                                <Link to="#">
                                    <div
                                        data-initials={
                                            comment.user &&
                                            comment.user.username.substring(0, 2).toUpperCase()
                                        }
                                    ></div>
                                    {/* <img
                                        alt="64x64"
                                        className="media-object"
                                        data-src="assets/img/reader_img3.jpg"
                                        src="assets/img/reader_img3.jpg"
                                        data-holder-rendered="true"
                                    /> */}
                                </Link>
                            </div>
                            <div className="media-body">
                                <h2 className="media-heading">
                                    <Link to="#">{comment.user && comment.user.username}</Link>
                                </h2>
                                {comment.comment}
                                <div className="entity_vote">
                                    <Link to="#">
                                        <i className="fa fa-thumbs-o-up" aria-hidden="true" />
                                    </Link>
                                    <Link to="#">
                                        <i className="fa fa-thumbs-o-down" aria-hidden="true" />
                                    </Link>
                                    <Link to="#">
                                        <span className="reply_ic">Reply </span>
                                    </Link>
                                </div>
                                {comment.replies &&
                                    comment.replies.map((reply) => {
                                        return (
                                            <div className="media" key={reply.id}>
                                                <div className="media-left">
                                                    <Link to="#">
                                                        {/* <img
                                                            alt="64x64"
                                                            className="media-object"
                                                            data-src="/static/assets/img/reader_img2.jpg"
                                                            src="/static/assets/img/reader_img2.jpg"
                                                            data-holder-rendered="true"
                                                        /> */}
                                                        <i class="fa fa-user"></i>
                                                    </Link>
                                                </div>
                                                <div className="media-body">
                                                    <h2 className="media-heading">
                                                        <Link to="#">{reply.user.username}</Link>
                                                    </h2>

                                                    <div className="entity_vote">
                                                        <Link to="#">
                                                            <i
                                                                className="fa fa-thumbs-o-up"
                                                                aria-hidden="true"
                                                            />
                                                        </Link>
                                                        <Link to="#">
                                                            <i
                                                                className="fa fa-thumbs-o-down"
                                                                aria-hidden="true"
                                                            />
                                                        </Link>
                                                        <span className="reply_ic">Reply </span>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                            </div>
                        </div>
                    );
                })}
        </Fragment>
    );
};
