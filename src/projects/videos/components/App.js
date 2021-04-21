import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from '../hooks/useVideos';

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [videos, search] = useVideos('power of collaboration');

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container" style={{ marginTop: '10px' }}>

      <SearchBar onFormSubmit={search} />

      <div className="ui stackable grid">

        <div className="eleven wide column">
          <VideoDetail video={selectedVideo} />
        </div>

        <div className="five wide column">
          <VideoList
            onVideoSelect={setSelectedVideo}
            videos={videos}
          />
        </div>

      </div>

    </div>
  );
}


export default App;