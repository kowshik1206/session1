import React from 'react';

const IdeaList = ({ ideas, onUpvote }) => {
  return (
    <div>
      <h2>Ideas</h2>
      <ul>
        {ideas.map((idea, index) => (
          <li key={index}>
            <p>{idea.text}</p>
            <p>Upvotes: {idea.upvotes}</p>
            <button onClick={() => onUpvote(index)}>Upvote</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IdeaList;
