import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import "./Pages.css";
function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  // latestFourPosts
  const latestFourPosts = posts.slice(-4).reverse();
  return (
    <div className="post-container">
      <h2 className="text-gray-700 text-xl font-bold ml-5 mb-5">
        Latest Posts:
      </h2>
      <Container>
        <div className="post-list">
          {latestFourPosts.map((post) => (
            <div key={post.$id} className="post-prev">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
