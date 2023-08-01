import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #333;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  padding: 10px 20px;
  background-color: #28a745;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #218838;
  }
`;

const List = styled.ul`
  list-style: none;
`;

const ListItem = styled.li`
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const ThreadLink = styled(Link)`
  font-size: 18px;
  color: #333;
  text-decoration: none;

  &:hover {
    color: #007bff;
  }
`;

const ThreadStats = styled.p`
  color: #888;
  margin-top: 10px;
`;

function ThreadList() {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    fetch('http://localhost:1337/api/threads')
      .then(response => response.json())
      .then(data => setThreads(data.data));
  }, []);

  return (
    <Container>
      <Header>
        <Title>Forum</Title>
        <StyledLink to="/apiautoflow/Forum/new">Add Post</StyledLink>
      </Header>
      <List>
        {threads.map(thread => (
          <ListItem key={thread.id}>
            <ThreadLink to={`/apiautoflow/Forum/thread/${thread.id}`}>{thread.attributes.Title}</ThreadLink>
            <ThreadStats>{thread.attributes.CommentCount} Comments • {thread.attributes.LikeCount} Likes • {thread.attributes.DislikeCount} Dislikes</ThreadStats>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default ThreadList;
