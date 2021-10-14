import React from "react";
import { Link } from "react-router-dom";
export const MoreNewsSkeleton = (props) => {
    const { news, index, slug } = props;
    return (
        <div>
            {index === news.length - 1 ? (
                <p className="divider">
                    <Link to={`/category/${slug}`}>More News&nbsp;&raquo;</Link>
                </p>
            ) : (
                console.log(index, news.length)
            )}
        </div>
    );
};
