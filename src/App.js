import "./App.css";
import Post from "./Post";
import React, { useState } from 'react';

function App() {
  const [posts, setPosts] = useState([
    {
      imageUrl:"https://source.unsplash.com/500x500/?instagram",
      userName:"pradipta-nag",
      caption:"Working Post"
    },
    {
      imageUrl:"https://source.unsplash.com/500x500/?instagram",
      userName:"keya-nag",
      caption:"Working Post"
    }
  ]);

  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://source.unsplash.com/100x50/?instagram"
          alt=""
        />
      </div>
      {
        posts.map(post => (
          <Post imageUrl = {post.imageUrl} userName = {post.userName} caption = {post.caption}/>
        ))
      }
    </div>
  );
}

export default App;
