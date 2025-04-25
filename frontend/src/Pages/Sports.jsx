import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Sports = () => {
  const [newsPosts, setNewsPosts] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/posts");
        const data = await response.json();
        const filtered = data.filter((post) => post.category === "Sports");
        setNewsPosts(filtered);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div>
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-6">
        <h2 className="text-2xl font-semibold mb-6">Latest News</h2>

        {newsPosts.length === 0 ? (
          <p>No news posts available</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsPosts.map((post) => (
              <Link key={post._id} to={`/post/${post._id}`} className="block">
                <div className="bg-white border rounded-lg overflow-hidden shadow hover:shadow-lg transition-all duration-300">
                  <img
                    src={`http://localhost:5000/${post.image}`}
                    alt={post.title}
                    className="w-full h-[200px] object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-2">
                      {new Date(post.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Sports;
