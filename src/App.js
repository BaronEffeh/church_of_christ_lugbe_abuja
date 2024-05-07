import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/global/NavBar";
import Footer from "./components/global/Footer";
import HomePage from "./components/home/HomePage";
import AboutUs from "./components/aboutUs/AboutUs";
import Sermons from "./components/sermons/Sermons";
import Blog from "./components/blog/Blog";
import BlogPost from "./components/blogPost/BlogPost";
import SermonEvent from "./components/sermonEvent/SermonEvent";
import Contact from "./components/contact/Contact";
import Error404 from "./components/global/Error404";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about_us" element={<AboutUs />} />
          <Route path="sermons" element={<Sermons />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog_post" element={<BlogPost />} />
          <Route path="sermon_event" element={<SermonEvent />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
