import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
    getNewsComments,
    createtNewsComment,
} from "../../redux/actions/NewsComment";
import { Loading } from "./Loading";
import { LOADING_REQUEST } from "../../redux/actions/actionTypes";
import { Comments } from "./Comments";

export const CommentForm = (props) => {
    const { news, slug } = props;
    const [data, setData] = useState({
        User: 1,
        post: "",
        comment: "",
    });

    const dispatch = useDispatch();
    let history = useHistory();
    const { isCreated } = useSelector((state) => state.newCommentReducer);

    useEffect(() => {
        if (isCreated !== undefined) {
            history.push(`/post/${slug}`);
        }
    }, [isCreated]);

    const onChangeComment = (e) => {
        setData({ post: news, comment: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createtNewsComment(data));
        setData({ post: "", comment: "" });
    };
    return (
        <Fragment>
            {/*Entity Title */}
            <div className="readers_comment">
                {/* entity_title */}

                <Fragment>
                    <div className="entity_inner__title header_purple">
                        <h2>Readers Comment</h2>
                    </div>

                    {/* <Comments comments={comments} /> */}
                </Fragment>
            </div>
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
        </Fragment>
    );
};
