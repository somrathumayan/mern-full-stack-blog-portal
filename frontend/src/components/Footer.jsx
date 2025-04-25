import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* About Blog */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            About My Blog
          </h3>
          <p className="text-sm leading-relaxed">
            Welcome to my personal blog where I share the latest updates,
            stories, and insights.
            <br />
            This blog is crafted with a passion for technology and storytelling.
            <br />
            Stay connected and explore a wide range of interesting topics.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-blue-400">
                About Website
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                About Admin
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Photo Gallery
              </a>
            </li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Policies</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-blue-400">
                Policies
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Copyright
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Comment Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Purposes */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Purposes</h3>
          <p className="text-sm leading-relaxed">
            This website aims to spread awareness and ideas.
            <br />
            It's designed to inform, educate, and inspire readers.
            <br />
            All posts are shared with honesty and passion.
          </p>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} MyBlog. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
