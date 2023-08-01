import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
`;

const Description = styled.p`
  color: #666;
  margin-bottom: 30px;
`;

function ThreadPage() {
  const { id } = useParams();
  const [thread, setThread] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:1337/api/threads/${id}`)
      .then(response => response.json())
      .then(data => setThread(data.data));
  }, [id]);

  return thread ? (
    <Container>
      <Title>{thread.attributes.Title}</Title>
      <Description>{thread.attributes.Description}</Description>
      {thread.posts && thread.posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </Container>
  ) : 'Loading...';
}

export default ThreadPage;
