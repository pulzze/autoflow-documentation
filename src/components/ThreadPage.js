import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
`;


const Title = styled.h1`
  color: #333;
  font-size: 36px;  // Increase the font size
  margin-bottom: 20px;
`;


const Description = styled.p`
  color: #666;
  margin-bottom: 30px;
`;

// Add new styled components for the date and content
const PostDate = styled.p`
  color: #999;
  font-size: 14px;
`;

const Content = styled.p`
  color: #333;
  font-size: 18px;
`;


const CommentForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
`;

const CommentInput = styled.textarea`
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
`;

const SubmitButton = styled.button`
align-self: center;
background-color: #007bff;
color: #fff;
padding: 10px 20px;
border-radius: 5px;
border: none;
cursor: pointer;
`;

function ThreadPage() {
  const { id } = useParams();
  const [thread, setThread] = useState(null);
  const [comment, setComment] = useState('');

  useEffect(() => {
    fetch(`http://localhost:1337/api/threads/${id}`)
      .then(response => response.json())
      .then(data => setThread(data.data));
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`http://localhost:1337/api/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: comment,
        thread: id,
        // Add any other fields required by your Strapi setup
      }),
    })
      .then(response => response.json())
      .then(data => {
        setThread(prevThread => ({
          ...prevThread,
          comments: [...prevThread.comments, data],
        }));
        setComment('');
      });
  };

  return thread ? (
    <Container>
      <Title>{thread.attributes.Title}</Title>
      <PostDate>Posted on {new Date(thread.attributes.createdAt).toLocaleDateString()}</PostDate>
      <Description>{thread.attributes.Description}</Description>
      <Content>{thread.attributes.Content}</Content>
      {thread.posts && thread.posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
      <CommentForm onSubmit={handleSubmit}>
        <CommentInput
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          placeholder="Add a comment"
        />
        <SubmitButton type="submit">Submit</SubmitButton>
      </CommentForm>
    </Container>
  ) : 'Loading...';
}

export default ThreadPage;

