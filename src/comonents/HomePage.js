import React, { useState } from "react";
import AboutMe from "./AboutMe";
import BlogPosts from "./BlogPosts";
import Resume from "./Resume";

const HomePage = () => {
  const [showAbout, setShowAbout] = useState(false);
  const [showBlog, setShowBlog] = useState(false);
  const [showResume, setShowResume] = useState(false);

  return (
    <div>
      <h1>Your Name</h1>
      <img src="path_to_your_image" alt="Your Name" />
      <button onClick={() => setShowAbout(!showAbout)}>About Me</button>
      {showAbout && <AboutMe />}
      <button onClick={() => setShowBlog(!showBlog)}>Blog Posts</button>
      {showBlog && <BlogPosts />}
      <button onClick={() => setShowResume(!showResume)}>Resume</button>
      {showResume && <Resume />}
    </div>
  );
};

export default HomePage;
