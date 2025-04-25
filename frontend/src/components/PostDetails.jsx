import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserCog, Clock } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/api/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch post:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="text-center p-10 text-xl font-medium">Loading...</div>
    );
  }

  if (!post) {
    return (
      <div className="text-center p-10 text-red-500 font-semibold">
        Post not found.
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="max-w-5xl mx-auto p-4">
        {/* Post Container */}
        <div className="bg-white rounded-lg shadow-md border p-4">
          {/* Image */}
          <div className="overflow-hidden rounded-lg mb-4">
            <img
              src={`http://localhost:5000/${post.image}`} // Use image1 from the database
              alt={post.title}
              className="w-full h-[400px] object-cover rounded-md"
            />
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold mb-2">{post.title}</h1>

          {/* Meta Info */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-gray-600 mb-4">
            <div className="flex items-center gap-2">
              <UserCog size={18} className="text-blue-600" />
              <span className="font-medium">{post.author || "Admin"}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-gray-600" />
              <span>{post.date || "Date not available"}</span>
            </div>
          </div>

          {/* Content */}
          <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
            {post.content}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PostDetails;
