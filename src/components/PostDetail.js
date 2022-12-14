import React from "react";
import PropTypes from "prop-types";
import { formatDistanceToNow } from 'date-fns';

function PostDetail(props){
  const { post, onClickingDelete, onClickingEdit } = props; 
 
  return (
    <React.Fragment>
      <h1>Post Detail</h1>
      <h3>{post.comment} - @{post.user}</h3>
      <p><em>{post.description}</em></p>
      <em>Vote Count: {post.voteCount}</em>
      <p>Posted {post.relativeTimeDistance} ago</p>
      <p>Upload Date: {post.dateTime.split(" ").splice(0, 5, "").join(" ")}</p>
      <button onClick={onClickingEdit}>Update Post</button>
      <button onClick={()=> onClickingDelete(post.id)}>Delete Post</button>
      <hr/>
    </React.Fragment>
  );
}

PostDetail.propTypes = {
  post: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func 
};

export default PostDetail;