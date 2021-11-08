import "./App.css";
import Post from "./Post";
import React, { useState, useEffect } from "react";
import { db } from "./firebase";

function App() {
  const [posts, setPosts] = useState([
    /*{
      imageUrl:"https://source.unsplash.com/500x500/?instagram",
      userName:"pradipta-nag",
      caption:"Working Post"
    },
    {
      imageUrl:"https://source.unsplash.com/500x500/?instagram",
      userName:"keya-nag",
      caption:"Working Post"
    }*/
  ]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          post: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://source.unsplash.com/100x50/?instagram"
          alt=""
        />
      </div>
      {posts.map(({id, post}) => (
        <Post
          key={id}
          imageUrl={post.imageUrl}
          userName={post.userName}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default App;
