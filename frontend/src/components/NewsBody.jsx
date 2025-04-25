import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { UserCog, Clock } from "react-feather"; 

const NewsBody = () => {
  const [newsPosts, setNewsPosts] = useState([]);

  useEffect(() => {
    const fetchNewsPosts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/posts/news"); // Make sure you are fetching from the correct endpoint
        const data = await response.json();
        setNewsPosts(data);
      } catch (error) {
        console.error("Error fetching news posts:", error);
      }
    };

    fetchNewsPosts();
  }, []);

  return (
    <div>
      <h2>News</h2>
      <div className="news-posts">
        {newsPosts.length === 0 ? (
          <p>No news posts available</p>
        ) : (
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-4 p-4">
              {/* Posts Grid */}
              <div className="w-full lg:w-[70%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {newsPosts.map((post) => (
                  <Link
                    to={`/post/${post._id}`}
                    key={post._id}
                    className="block"
                  >
                    <div className="bg-white shadow-md rounded-lg border hover:shadow-lg transition-all duration-300 overflow-hidden">
                      {/* Image with zoom on hover */}
                      <div className="overflow-hidden">
                        <img
                          src={`http://localhost:5000/${post.image}`} // Ensure correct field name for image
                          alt={post.title}
                          className="w-full h-[200px] object-cover rounded-t-lg transform hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      {/* Content */}
                      <div className="px-4">
                        <p
                          className="text-gray-600 text-[18px] text-start mt-2"
                          style={{ height: "60px", overflow: "hidden" }}
                        >
                          {post.title}
                        </p>

                        {/* Footer Info */}
                        <div className="flex justify-between py-3">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mx-auto">
                            {/* Admin */}
                            <div className="flex items-center gap-2">
                              <UserCog size={20} className="text-blue-600" />
                              <span className="text-gray-800 font-semibold text-sm">
                                Admin
                              </span>
                            </div>

                            {/* Date */}
                            <div className="flex items-center gap-2">
                              <Clock size={20} className="text-gray-600" />
                              <span className="text-gray-700 text-sm">
                                {new Date(post.createdAt).toLocaleDateString()}{" "}
                                {/* Format date */}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Sidebar */}
              <div className="w-full lg:w-[30%] bg-gray-100 p-6 rounded-lg shadow">
                <h2 className="text-2xl font-semibold mb-4">About</h2>
                <p className="text-gray-700 mb-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p className="text-gray-700 mb-2">
                  Vivamus lacinia odio vitae vestibulum.
                </p>
                <p className="text-gray-700">
                  Cras vehicula, mi eget laoreet fermentum, tortor erat commodo
                  risus.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsBody;
