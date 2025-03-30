"use client";

import Link from "next/link";
import Image from "next/image";
import { blogPosts, BlogPost } from "@/data/blogPosts";

export default function BlogSection() {
  return (
    <section
      id="blog"
      className="py-20 px-4 md:px-6 bg-light-200 dark:bg-dark-300"
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Latest <span className="text-primary-500">Articles</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on web development, design, and
            technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(0, 3).map((post, index) => (
            <div
              key={post.id}
              className="bg-light-100 dark:bg-dark-200 rounded-lg overflow-hidden shadow-md border border-border hover:shadow-lg transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-48 w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300">
                    {post.category}
                  </span>
                  <div className="text-xs text-muted-foreground">
                    {post.date} · {post.readTime}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 hover:text-primary-500 transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-medium"
                >
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary-500 text-white font-medium hover:bg-primary-600 transition-colors"
          >
            View All Articles
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
} 