import React, { useState } from 'react';
import PostTypeSelector from './PostTypeSelector';
import QuestionForm from './QuestionForm';
import ArticleForm from './ArticleForm';
import './new-post-styles.css';


const App = () => {
  const [postType, setPostType] = useState('question');

  return (
    <main className="container">
      <header className="app-header">
        <h1>New Post</h1>
      </header>
      <section className="post-type-section">
        <PostTypeSelector postType={postType} setPostType={setPostType} />
      </section>
      <section className="form-section">
        {postType === 'question' ? <QuestionForm /> : <ArticleForm />}
      </section>
      <footer className="app-footer">
        <p>&copy; 2024 MyApp. All rights reserved.</p>
      </footer>
    </main>
  );
};

export default App;
