import React from 'react';

// The posts on the webpages
const Post = ({ data }) => {
  return (
    <div className="post">
      <div className="post-header">
        <h4>{data.username}</h4>
        <span>{data.location}</span>
      </div>
      <img src={data.imgSrc} alt="Post" className="post-image" />
      <div className="post-icons">
        <i className="fas fa-heart"></i>
        <i className="fas fa-comment"></i>
      </div>
      <div className="post-caption">
        <p>{data.caption}</p>
      </div>
    </div>
  );
};

export default Post;
