// displays single post and its comments

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../components/Comment';

function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:1337/api/posts/${id}`)
      .then(response => response.json())
      .then(data => setPost(data));
  }, [id]);

  return post ? (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      {post.comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  ) : 'Loading...';
}

export default PostPage;




