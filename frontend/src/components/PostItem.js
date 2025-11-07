import React from 'react';

const PostItem = ({ post }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="post-item"> {/* APPLYING THIS CLASS */}
      <h4 style={{ margin: '0 0 10px 0' }}>{post.userName}</h4>
      <p style={{ margin: '0 0 15px 0' }}>{post.text}</p>
      <small style={{ color: '#555' }}>
        Posted on: {formatDate(post.createdAt)}
      </small>
    </div>
  );
};

export default PostItem;