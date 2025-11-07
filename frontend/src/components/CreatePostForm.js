import React, { useState } from 'react';
import api from '../utils/api';

const CreatePostForm = ({ onPostCreated }) => {
  const [text, setText] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!text) return;
    try {
      const res = await api.post('/api/posts', { text });
      onPostCreated(res.data);
      setText('');
    } catch (err) {
      console.error('Error creating post:', err);
    }
  };

  return (
    <div className="post-form-card"> {/* APPLYING THIS CLASS */}
      <form onSubmit={onSubmit}>
        <h3 style={{ marginTop: 0 }}>Create a new post</h3>
        <textarea
          placeholder="What's on your mind?"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default CreatePostForm;