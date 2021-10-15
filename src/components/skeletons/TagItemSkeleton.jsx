import React from "react";
import { Link } from "react-router-dom";

export const TagItemSkeleton = (props) => {
    console.log(props.tags);
    return (
        <>
            {props.tag.map((tag) => {
                return (
                    <span className={props.css} style={{ marginRight: 5 }}>
                        <Link to={`/tag/${tag}`}>{tag}</Link>
                    </span>
                );
            })}
        </>
    );
};
