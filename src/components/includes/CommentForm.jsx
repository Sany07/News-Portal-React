import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
    getNewsComments,
    createtNewsComment,
} from "../../redux/actions/NewsComment";
import { Loading } from "./Loading";
import { NEW_COMMENT_RESET } from "../../redux/actions/actionTypes";
import { toast } from "react-toastify";
export const CommentForm = (props) => {
    const { newsId } = props;
    console.log(newsId);
    const [data, setData] = useState({
        User: 1,
        post: "",
        comment: "",
    });
    const dispatch = useDispatch();
    const { comments, isLoading } = useSelector(
        (state) => state.commentReducer
    );

    const { isCreated, success } = useSelector((state) => state.commentReducer);

    const onChangeComment = (e) => {
        setData({ post: newsId, comment: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createtNewsComment(data));
        setData({ comment: "" });
    };
    return (
        <Fragment>
            <div className="entity_comments">
                <div className="entity_inner__title header_black">
                    <h2>Add a Comment</h2>
                </div>
                {/*Entity Title */}
                <div className="entity_comment_from">
                    <form onSubmit={handleSubmit} method="post">
                        <div className="form-group comment">
                            <textarea
                                onChange={onChangeComment}
                                className="form-control"
                                id="comment"
                                name="comment"
                                placeholder="Comment"
                                value={data.comment}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-submit red">
                            Submit
                        </button>
                    </form>
                </div>
                {/*Entity Comments From */}
            </div>
        </Fragment>
    );
};
