// app/blog/post.tsx
import React from 'react';
import Navbar from "../../../components/navbar";

const Post = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-brand-brown-400">
    <Navbar />
      <h1 className="text-4xl font-bold mb-4 text-brand-lightPink-400">Blog Post Title</h1>
      <p className="text-brand-beige-300 mb-6">Author Name • Date</p>
      <div className="prose">
        <p>
          This is the main content of the blog post. Tailwind CSS makes it easy to style your blog with utilities.
        </p>
        <p>
          Add more paragraphs, headings, images, or any other content as needed. Tailwind's `prose` class is great for
          text-heavy content.
        </p>
      </div>
    </div>
  );
};

export default Post;