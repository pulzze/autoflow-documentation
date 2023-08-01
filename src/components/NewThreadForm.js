import React, { useState } from 'react';

function NewThreadForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    // Here you would make a POST request to your API to create a new thread
    // For example:
    fetch('http://localhost:1337/api/threads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description })
    })
      .then(response => response.json())
      .then(data => console.log(data));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={event => setTitle(event.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={description}
        onChange={event => setDescription(event.target.value)}
        placeholder="Description"
        required
      />
      <button type="submit">Post</button>
    </form>
  );
}

export default NewThreadForm;
