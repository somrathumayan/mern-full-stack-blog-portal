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
        <div className="bg-white rounded-lg shadow-md border p-4">
          {/* Post Cover Image */}
          <div className="overflow-hidden rounded-lg mb-4">
            <img
              src={`http://localhost:5000/${post.image.replace("\\", "/")}`}
              alt={post.title}
              className="w-full h-[400px] object-cover rounded-md"
            />
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

          {/* Meta Info */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <UserCog size={18} className="text-blue-600" />
              <span className="font-medium">Admin</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-gray-600" />
              <span>
                {new Date(post.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="text-gray-800 text-lg leading-relaxed space-y-6">
            <p>{post.description1}</p>
            <p>{post.description2}</p>

            {/* Additional image */}
            <div className="rounded-lg overflow-hidden">
              <img
                src={`http://localhost:5000/${post.image.replace("\\", "/")}`}
                alt="Additional"
                className="w-full h-[300px] object-cover rounded-md"
              />
            </div>

            {/* Keywords */}
            <div>
              <h3 className="text-xl font-semibold mt-6">Keywords</h3>
              <p className="mt-2 text-gray-600">{post.keywords}</p>
            </div>

            {/* Summary */}
            <div>
              <h3 className="text-xl font-semibold mt-6">Summary</h3>
              <p className="mt-2 text-gray-600">{post.summary}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PostDetails;
