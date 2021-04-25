import React from 'react';
import PostList from './PostList';

const App = () => {
  return (
    <div className="ui container">
      <PostList />
      <br />
      <i>*with Redux</i>
    </div>
  );
};

export default App;
