import React from 'react';

function Comment({ comment }) {
  return (
    <div>
      <h3>{comment.author}</h3>
      <p>{comment.content}</p>
    </div>
  );
}

export default Comment;
