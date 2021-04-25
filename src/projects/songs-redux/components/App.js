import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row" style={{ marginTop: '20px', minHeight: '40vh' }}>
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
          <SongDetail />
        </div>
        <i>*with Redux</i>
      </div>
    </div>
  );
};

export default App;
