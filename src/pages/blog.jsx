import React from "react";
import BlogMain from "../components/blog/BlogMain";
import Footer from "../components/Footer";
import HeaderGeneral from "../components/HeaderGeneral";

function Blog() {
  return (
    <div>
      <HeaderGeneral
        title="Blog"
        before="Home"
        after="Community"
        after2="Blog"
      />
      <main>
        <BlogMain />
      </main>
      <Footer />
    </div>
  );
}

export default Blog;
