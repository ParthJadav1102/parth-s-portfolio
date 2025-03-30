"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

// Import the blog posts data
import { blogPosts } from "@/data/blogPosts";

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the blog post with the matching slug
    const foundPost = blogPosts.find((p) => p.slug === slug);
    setPost(foundPost);
    setLoading(false);
  }, [slug]);

  if (loading) {
    return (
      <>
        <Header />
        <main className="pt-24 pb-16 px-4 md:px-6 min-h-screen">
          <div className="container mx-auto">
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (!post) {
    return (
      <>
        <Header />
        <main className="pt-24 pb-16 px-4 md:px-6 min-h-screen">
          <div className="container mx-auto">
            <div className="text-center">
              <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
              <p className="text-muted-foreground mb-8">
                The blog post you are looking for does not exist.
              </p>
              <Link
                href="/blog"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-primary-500 text-white font-medium hover:bg-primary-600 transition-colors"
              >
                Back to Blog
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="pt-24 pb-16 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Blog
            </Link>
          </div>

          <article className="bg-light-100 dark:bg-dark-200 rounded-lg overflow-hidden shadow-md border border-border">
            {post.image && (
              <div className="relative h-64 md:h-96 w-full">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300">
                  {post.category}
                </span>
                <span className="text-xs font-medium px-2 py-1 rounded-full bg-light-300 dark:bg-dark-400 text-muted-foreground">
                  {post.date}
                </span>
                <span className="text-xs font-medium px-2 py-1 rounded-full bg-light-300 dark:bg-dark-400 text-muted-foreground">
                  {post.readTime}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-6">{post.title}</h1>

              <div className="prose prose-lg dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
} 