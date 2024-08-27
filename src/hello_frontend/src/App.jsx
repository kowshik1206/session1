import React, { useState } from 'react';
import IdeaSubmission from './IdeaSubmission.jsx';
import IdeaList from './IdeaList.jsx';

const App = () => {
  const [ideas, setIdeas] = useState([]);

  const handleIdeaSubmission = (text) => {
    const newIdea = { text, upvotes: 0 };
    setIdeas([...ideas, newIdea]);
  };

  const handleUpvote = (index) => {
    const updatedIdeas = ideas.map((idea, i) => {
      if (i === index) {
        return { ...idea, upvotes: idea.upvotes + 1 };
      }
      return idea;
    });
    setIdeas(updatedIdeas);
  };

  return (
    <div>
      <h1>Idea Sharing Platform</h1>
      <IdeaSubmission onSubmit={handleIdeaSubmission} />
      <IdeaList ideas={ideas} onUpvote={handleUpvote} />
    </div>
  );
};

export default App;
