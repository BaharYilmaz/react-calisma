import React, { useEffect } from 'react';
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "./PostCard";
import { fetchPosts } from "../_redux/postActions";

const PostList = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => ({
    posts: state.posts.entities,
  }));

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const goToUser = (id) => {
    navigate(`/users/${id}/detail`);
  };

  return (
    <div className="row">
      {posts.map(post =>
        <div className="col-sm-1 col-md-4 col-lg-3 my-2" key={post.id}>
          <PostCard post={post} goToUser={goToUser} />
        </div>
      )}
    </div>
  );
};

export default PostList;