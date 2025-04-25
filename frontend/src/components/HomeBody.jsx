import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserCog, Clock } from "lucide-react";

const HomeBody = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/posts");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col lg:flex-row gap-4 p-4">
        <div className="w-full lg:w-[70%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post) => (
            <Link to={`/post/${post._id}`} key={post._id} className="block">
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
            Cras vehicula, mi eget laoreet fermentum, tortor erat commodo risus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeBody;
