import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NewsBody from './../components/NewsBody';

const News = () => {
  return (
    <div>
      <Navbar />

      <NewsBody />

      <Footer />
    </div>
  );
};

export default News;
