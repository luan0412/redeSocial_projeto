import React from 'react';
import './Feed.css';


function PostHeader({ author, date }) {
  return (
    <div className="post-header">
      <img className="avatar" src={ author.avatar } />
      <div className="details">
        <span>{ author.name }</span>
        <span>{ date }</span>
      </div>
    </div>
  );
}



function PostComments({ comments }) {
  return (
    <div className="post-comments">
      <div className="divider" />
      {}
      { comments.map(comment => (
        <div key={ comment.id } className="comment">
          <img className="avatar" src={ comment.author.avatar } />
          <p>
            <span>{ comment.author.name }:</span>
            { comment.content }
          </p>
        </div>
      ))}
    </div>
  );
}

function PostItem({ author, date, content, comments, img_post }) {
  return (
    <div className="post">
      <PostHeader author={ author } date={ date } />
      <p className="post-content">{ content }</p>
      <p className="post-img">{ img_post }</p>
      <PostComments comments={ comments } />
    </div>
  );
}

export default PostItem;