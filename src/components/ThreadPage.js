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


const CommentInput = styled.textarea`
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
`;
const SubmitButton = styled.button`
  align-self: flex-end;
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0056b3;
  }
`;
const Comment = styled.p`
  color: #333;
  font-size: 16px;
  border-top: 1px solid #ccc;
  padding-top: 10px;
`;



const CommentSection = styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
`;

const CommentHeader = styled.h2`
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
`;

const CommentBody = styled.p`
  color: #666;
  margin-bottom: 10px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
`;

const CommentContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;
const CommentAuthor = styled.p`
  color: #333;
  font-weight: bold;
`;

const CommentDate = styled.p`
  color: #999;
  font-size: 14px;
`;

const CommentContent = styled.p`
  color: #666;
`;

const CommentForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;




function ThreadPage() {
  const { id } = useParams();
  const [thread, setThread] = useState(null);
  const [comment, setComment] = useState('');



  useEffect(() => {
    fetch(`http://localhost:1337/api/threads/${id}`)
      .then(response => response.json())
      .then(data => {
        const threadData = data.data;
        if (!Array.isArray(threadData.comments)) {
          threadData.comments = [];
        }
        console.log('Fetched thread data:', threadData);  // Log the fetched thread data
        setThread(threadData);
      });
  }, [id]);
  
  const handleSubmit = (event) => {
    event.preventDefault();
  
    if(!comment.trim()){
        return;
    }
  
    fetch(`http://localhost:1337/api/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: {
          Content: comment,
          thread: id,
        }
      }),
    })
    .then(response => response.json())
    .then(data => {
      const newComment = {
        ...data.data,
        thread: id,
      };
      setThread(prevThread => ({
        ...prevThread,
        comments: [...prevThread.comments, newComment],
      }));
      setComment('');
    });
    
  };



  useEffect(() => {
    fetch(`http://localhost:1337/api/comments?thread=${id}`)
      .then(response => response.json())
      .then(data => {
        const commentsData = data.data;
        setThread(prevThread => ({
          ...prevThread,
          comments: commentsData,
        }));
      })
      .catch(error => {
        console.error('Error fetching comments:', error);
      });
  }, [id]);
  
  

  console.log(thread); // logging thread to console for debugging purposes


  return thread ? (
    <Container>
      {/* <Title>{thread.attributes.Title}</Title> */}
      <PostDate>Posted on {new Date(thread.attributes.createdAt).toLocaleDateString()}</PostDate>
      <Description>{thread.attributes.Description}</Description>
      <Content>{thread.attributes.Content}</Content>
      {thread.posts && thread.posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
      <CommentSection>
        <CommentHeader>{thread.comments.length} Comments</CommentHeader>
        {thread.comments && thread.comments.slice().reverse().map((comment, index) => (
          <CommentContainer key={index}>
            <Avatar src="https://www.interactor.com:1337/uploads/interactor_98d59ff456.png" alt="User avatar" />
            <CommentBody>
              <CommentAuthor>Unknown user</CommentAuthor>
              <CommentDate>{new Date(comment.attributes.createdAt).toLocaleDateString()}</CommentDate>
              <CommentContent>{comment.attributes.Content}</CommentContent>
            </CommentBody>
          </CommentContainer>
        ))}
      </CommentSection>
      <CommentForm onSubmit={handleSubmit}>
    <CommentInput
        value={comment}
        onChange={(event) => setComment(event.target.value)}
        placeholder="Your Comment"
    />
    <SubmitButton type="submit">Post Comment</SubmitButton>
    </CommentForm>
    </Container>
  ) : 'Loading...';
}
export default ThreadPage;

