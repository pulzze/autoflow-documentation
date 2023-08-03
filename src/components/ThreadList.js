import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #333;
`;

const StyledLink = styled.a`
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

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableRow = styled.tr`
`;

const TableHeader = styled.th`
  text-align: left;
  padding: 10px;
  border-bottom: 2px solid #ddd;
  border-right: none;
  color: #666;
  font-size: 16px;
  font-weight: bold;
  &:first-child {
    width: 50%;
  }
`;

const TableCell = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd;
  border-right: none;
  &:first-child {
    font-size: 18px;
    color: #333;
  }
  &:not(:first-child) {
    text-align: center;
  }
`;

const ThreadLink = styled(Link)`
  text-decoration: none;
  color: #333;
  &:hover {
    color: #007bff;
  }
`;

const ThreadContent = styled.p`
  font-size: 16px;
  color: #666;
  margin-top: 10px;
`;

function ThreadList() {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    fetch('http://localhost:1337/api/threads')
      .then(response => response.json())
      .then(data => {
        const threadsData = data.data;
        const promises = threadsData.map(thread =>
          fetch(`http://localhost:1337/api/comments?thread=${thread.id}`)
            .then(response => response.json())
            .then(commentsData => {
              // Add the comments count to the thread data
              thread.commentsCount = commentsData.data.length;
              return thread;
            })
        );
        Promise.all(promises).then(setThreads);
      });
  }, []);
  

  const handleAddPostClick = (event) => {
    event.preventDefault();
    window.location.href = `https://interactor.com/login?redirect_uri=${encodeURIComponent('http://localhost:3001/apiautoflow/Forum/new')}`;
  };

  return (
    <Container>
      <Header>
        <Title>Forum</Title>
        <StyledLink href="#" onClick={handleAddPostClick}>Add Post</StyledLink>
      </Header>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>Forum</TableHeader>
            <TableHeader>Votes</TableHeader>
            <TableHeader>Comments</TableHeader>
            <TableHeader>Views</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {threads.map((thread, index) => (
            <TableRow key={thread.id}>
              <TableCell>
                <ThreadLink to={`/apiautoflow/Forum/thread/${thread.id}`}>{thread.attributes.Title}</ThreadLink>
                <ThreadContent>{thread.attributes.Description}</ThreadContent>
              </TableCell>
              <TableCell>0</TableCell> {/* Replace with actual Votes count when available */}
              <TableCell>{thread.commentsCount}</TableCell>
              <TableCell>0</TableCell> {/* Replace with actual Views count when available */}
            </TableRow>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default ThreadList;
