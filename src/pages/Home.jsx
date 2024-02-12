import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import { Link } from "react-router-dom";
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

  if (posts.length === 0) {
    return (
      <Container>
        <div className="container">
          <p className="text-red-500 ml-10">
            <Link to="/login" className="text-blue-500">
              Login
            </Link>{" "}
            to Read and Write Blogs! New here?{" "}
            <Link to="/signup" className="text-blue-500">
              Signup
            </Link>{" "}
            Now..
          </p>
          <div className="secton-1">
            <img src="Hive.png" alt="Hive" className="section-1-img" />
            <div className="section-1-content">
              <h2 className="section-1-title">
                Empowering Voices, Unleashing Stories: Your Platform for Shared
                Wisdom, where you can Read and Write Blogs
              </h2>
              <p>
                Hive Blogs is your digital haven for expression, connection, and
                knowledge sharing. Dive into a vibrant community where you can
                effortlessly log in, explore a myriad of captivating posts, and
                seamlessly contribute your thoughts through personalized blog
                entries. With the power to edit and delete, you're in control of
                your narrative. Join us in fostering a dynamic space where every
                voice finds its resonance, and every story becomes a chapter in
                our collective journey.
              </p>
            </div>
          </div>
        </div>
      </Container>
    );
  }
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
