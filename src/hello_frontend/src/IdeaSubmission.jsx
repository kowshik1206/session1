import React, { useState } from 'react';

const IdeaSubmission = ({ onSubmit }) => {
  const [ideaText, setIdeaText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ideaText.trim()) {
      onSubmit(ideaText);
      setIdeaText(''); // Clear the input field after submission
    }
  };

  return (
    <div>
      <h2>Submit Your Idea</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={ideaText}
          onChange={(e) => setIdeaText(e.target.value)}
          placeholder="Share your idea..."
          rows="4"
        ></textarea>
        <br />
        <button type="submit">Submit Idea</button>
      </form>
    </div>
  );
};

export default IdeaSubmission;
