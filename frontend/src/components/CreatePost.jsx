import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CreatePost() {
  const [formData, setFormData] = useState({
    title: "",
    description1: "",
    description2: "",
    image: null,
    keywords: "",
    category: "",
    summary: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image" && files.length > 0) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("title", formData.title);
    data.append("description1", formData.description1);
    data.append("description2", formData.description2);
    if (formData.image) data.append("image", formData.image);
    data.append("keywords", formData.keywords);
    data.append("category", formData.category);
    data.append("summary", formData.summary);

    try {
      const response = await fetch("http://localhost:5000/api/posts", {
        method: "POST",
        body: data,
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("✅ Post submitted successfully!");
        setFormData({
          title: "",
          description1: "",
          description2: "",
          image: null,
          keywords: "",
          category: "",
          summary: "",
        });
      } else {
        toast.error(`❌ Error: ${result.message}`);
      }
    } catch (error) {
      toast.error("❌ Something went wrong while submitting!");
      console.error(error);
    }
  };

  return (
    <div className="px-2 py-2">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4">Create New Post</h2>

      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 bg-white p-2 sm:p-6 rounded shadow"
      >
        {/* Title */}
        <div className="flex flex-col md:col-span-2">
          <label className="font-medium mb-1 text-sm sm:text-base">Title</label>
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="border p-2 rounded text-sm sm:text-base"
            required
          />
        </div>

        {/* Left Column */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="font-medium mb-1 text-sm sm:text-base">
              Upload Image
            </label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="border p-2 rounded text-sm sm:text-base"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium mb-1 text-sm sm:text-base">
              Description 1
            </label>
            <textarea
              name="description1"
              value={formData.description1}
              onChange={handleChange}
              rows="5"
              className="border p-2 rounded text-sm sm:text-base"
              required
            ></textarea>
          </div>

          <div className="flex flex-col">
            <label className="font-medium mb-1 text-sm sm:text-base">
              Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="border p-2 rounded text-sm sm:text-base"
              required
            >
              <option value="">Select Category</option>
              <option value="News">News</option>
              <option value="International">International</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Sports">Sports</option>
              <option value="Jobs">Jobs</option>
            </select>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="font-medium mb-1 text-sm sm:text-base">
              Description 2
            </label>
            <textarea
              name="description2"
              value={formData.description2}
              onChange={handleChange}
              rows="5"
              className="border p-2 rounded text-sm sm:text-base"
            ></textarea>
          </div>

          <div className="flex flex-col">
            <label className="font-medium mb-1 text-sm sm:text-base">
              Summary
            </label>
            <input
              name="summary"
              value={formData.summary}
              onChange={handleChange}
              className="border p-2 rounded text-sm sm:text-base"
            />
          </div>
        </div>

        {/* Keywords */}
        <div className="flex flex-col md:col-span-2">
          <label className="font-medium mb-1 text-sm sm:text-base">Keywords</label>
          <textarea
            name="keywords"
            value={formData.keywords}
            onChange={handleChange}
            rows="2"
            className="border p-2 rounded text-sm sm:text-base"
          ></textarea>
        </div>

        {/* Submit */}
        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded shadow text-sm sm:text-base"
          >
            Publish Post
          </button>
        </div>
      </form>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}
