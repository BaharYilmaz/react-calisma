import React from 'react';
import PostList from "./Posts/PostList";

const PostPage = ({history}) => {
  console.log("history",history)
  return (
    <PostList history={history}/>
  );
};

export default PostPage;