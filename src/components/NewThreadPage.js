import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Heading = styled.h2`
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
`;

const Label = styled.label`
  color: #333;
  font-size: 18px;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  height: 150px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #218838;
  }
`;

function NewThreadPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('file', file);

    // here is where you need to include the authorization data
    const response = await fetch('http://localhost:1337/api/threads', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Heading>Write a new post</Heading>
      <Label>Title</Label>
      <Input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <Label>Content</Label>
      <TextArea
        value={content}
        onChange={e => setContent(e.target.value)}
        required
      />
      <Label>File</Label>
      <Input
        type="file"
        onChange={e => setFile(e.target.files[0])}
        required
      />
      <Button type="submit">Add post</Button>
    </Form>
  );
}

export default NewThreadPage;
