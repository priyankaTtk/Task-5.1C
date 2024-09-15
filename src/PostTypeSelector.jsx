import React from 'react';

const PostTypeSelector = ({ postType, setPostType }) => {
  return (
    <fieldset className="post-type-selector">
      <div className="radio-group">
      <legend>Select Post Type:</legend>
      
        <label>
          <input
            type="radio"
            value="question"
            checked={postType === 'question'}
            onChange={() => setPostType('question')}
          />
          Question
        </label>
        <label>
          <input
            type="radio"
            value="article"
            checked={postType === 'article'}
            onChange={() => setPostType('article')}
          />
          Article
        </label>
      </div>
    </fieldset>
  );
};

export default PostTypeSelector;