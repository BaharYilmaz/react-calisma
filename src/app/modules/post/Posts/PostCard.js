import React, { useEffect, useState } from 'react';
import { dateFormatter } from "../../../_helpers/dateFormatter";

const PostCard = ({ post, goToUser }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className={`card h-100 ${loading && "cardLoader"}`}>
      <div className="card-header">
        <div className="d-flex align-items-center mt-10">
          <img src={post.owner.picture}
               alt="owner"
               width="auto"
               height={30}
               className="rounded"
          />
          <div className="mx-2 d-flex flex-column">
            <button className="btn btn-link p-0"
                    onClick={() => goToUser(post.owner.id)}
            >
              <small>
                {post.owner?.firstName}{" "}{post.owner?.lastName}
              </small>
            </button>
            <small className="text-muted">Owner</small>
          </div>
        </div>
      </div>
      <div className="card-body">
        <img src={post.image}
             alt="post"
             className="card-img"
        />
        {post.tags?.map((tag, index) =>
          <span key={index} className="badge badge-pill badge-info mx-1">{tag}</span>
        )}
        <div className="my-2">{post.text}</div>
      </div>
      <div className="card-footer bg-white border-0">
        <div className="d-flex justify-content-between align-items-center">
          <span className="icon-heart-filled">
            <small>{post.likes} likes</small>
          </span>
          <small>{dateFormatter(post.publishDate)}</small>
        </div>
      </div>
    </div>
  );
};

export default PostCard;

