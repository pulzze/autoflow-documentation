// displays a single thread and its posts

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ThreadPage() {
    const { id } = useParams();
    const [thread, setThread] = useState(null);
  
    useEffect(() => {
      fetch(`http://localhost:1337/api/threads/${id}`)
        .then(response => response.json())
        .then(data => setThread(data.data));
    }, [id]);
  
    return thread ? (
      <div>
        <h1>{thread.attributes.Title}</h1>
        <p>{thread.attributes.Description}</p>
        {/* Remove or comment out the following lines if there are no posts */}
        {thread.posts && thread.posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    ) : 'Loading...';
  }
  

export default ThreadPage;

