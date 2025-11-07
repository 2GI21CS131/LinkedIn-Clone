import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import api from '../utils/api';
import CreatePostForm from '../components/CreatePostForm';
import PostItem from '../components/PostItem';

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const addPostToFeed = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    } else {
      const fetchPosts = async () => {
        try {
          const res = await api.get('/api/posts');
          setPosts(res.data);
          setLoading(false);
        } catch (err) {
          console.error('Error fetching posts:', err);
        }
      };
      fetchPosts();
    }
  }, [isAuthenticated, navigate]);

  if (loading && isAuthenticated) {
    return <div>Loading feed...</div>;
  }

  if (!isAuthenticated) {
    return null; 
  }

  return (
    <div style={{ maxWidth: '700px', margin: 'auto' }}>
      <CreatePostForm onPostCreated={addPostToFeed} />
      <div className="posts-container">
        {posts.map(post => (
          <PostItem key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;