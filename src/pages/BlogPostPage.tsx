import React from "react";
import { useParams } from "react-router-dom";
import { BLOG_POSTS } from "../data/blogPosts";

export default function BlogPostPage() {
  const { id } = useParams<{ id: string }>();
  const post = BLOG_POSTS.find((p) => p.id === id);

  if (!post) {
    return <div className="text-center py-10 text-gray-500">Post not found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-gray-900">{post.title}</h1>
      <p className="text-sm text-gray-500">{post.date} • {post.author}</p>
      <img src={post.imageUrl} alt={post.title} className="w-full h-auto my-6 rounded-lg shadow-lg" />
      <div className="prose" dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
}
