import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import "./Components.css";

function PostCard({ $id, title, featuredImage, author, content }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="post-card">
        <div className="featured-img-container">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="featured-img"
          />
        </div>
        <div className="featured-content">
          <h2 className="featured-title">{title}</h2>
          <p children="featured-paragraph">{parse(content.slice(0, 200))}</p>
        </div>

        <p className="author">{author}</p>
      </div>
    </Link>
  );
}

export default PostCard;
