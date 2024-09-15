import React, { useState } from 'react';

const QuestionForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { title, description, tags };
    console.log('Question submitted:', JSON.stringify(formData, null, 2));
  };

  return (
    <form onSubmit={handleSubmit}>
      <p className="info-text" id="form-description">
        What do you want to ask or share?
      </p>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Start your question with how, what, why, etc."
          required
          aria-describedby="title-help"
        />
        <small id="title-help" className="help-text">Start your question with how, what, why, etc.</small>
      </div>
      <div className="form-group">
        <label htmlFor="description">Describe your problem</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="tags">Tags</label>
        <input
          type="text"
          id="tags"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          className="tags-input"
          placeholder="Please add up to 3 tags to describe what your question is about e.g., Java"
          aria-describedby="tags-help"
        />
        <small id="tags-help" className="help-text">Please add up to 3 tags to describe what your question is about e.g., Java</small>
      </div>
      <button type="submit" className="submit-button">Post</button>
    </form>
  );
};

export default QuestionForm;