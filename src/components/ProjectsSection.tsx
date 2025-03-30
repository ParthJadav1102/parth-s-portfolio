"use client";

import { useState } from "react";
import Image from "next/image";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform built with Next.js, TypeScript, and Stripe integration. Features include product search, filtering, cart functionality, user authentication, and payment processing.",
    image: "/projects/ecommerce.jpg",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    liveUrl: "https://example.com/ecommerce",
    githubUrl: "https://github.com/johndoe/ecommerce",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates. Users can create projects, assign tasks, set deadlines, and track progress. Built with React, Firebase, and Material UI.",
    image: "/projects/taskmanager.jpg",
    tags: ["React", "Firebase", "Material UI", "Redux"],
    liveUrl: "https://example.com/taskmanager",
    githubUrl: "https://github.com/johndoe/taskmanager",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "A weather dashboard that displays current weather conditions and forecasts for multiple locations. Features include interactive maps, charts for historical data, and severe weather alerts.",
    image: "/projects/weather.jpg",
    tags: ["React", "Chart.js", "OpenWeather API", "Mapbox"],
    liveUrl: "https://example.com/weather",
    githubUrl: "https://github.com/johndoe/weather",
  },
  {
    id: 4,
    title: "Social Media Analytics",
    description:
      "A social media analytics tool that helps businesses track their performance across multiple platforms. Provides insights on engagement, reach, and audience demographics.",
    image: "/projects/analytics.jpg",
    tags: ["Vue.js", "D3.js", "Node.js", "MongoDB"],
    liveUrl: "https://example.com/analytics",
    githubUrl: "https://github.com/johndoe/analytics",
  },
  {
    id: 5,
    title: "Fitness Tracking App",
    description:
      "A mobile-first fitness tracking application that allows users to log workouts, track progress, and set goals. Features include custom workout plans, progress visualization, and social sharing.",
    image: "/projects/fitness.jpg",
    tags: ["React Native", "GraphQL", "AWS Amplify", "Expo"],
    liveUrl: "https://example.com/fitness",
    githubUrl: "https://github.com/johndoe/fitness",
  },
  {
    id: 6,
    title: "Recipe Sharing Platform",
    description:
      "A community-driven recipe sharing platform where users can discover, save, and share recipes. Features include ingredient search, dietary filters, and user ratings.",
    image: "/projects/recipes.jpg",
    tags: ["Angular", "Firebase", "NgRx", "Bootstrap"],
    liveUrl: "https://example.com/recipes",
    githubUrl: "https://github.com/johndoe/recipes",
  },
];

export default function ProjectsSection() {
  const [filter, setFilter] = useState<string>("all");

  // Get unique tags from all projects
  const allTags = Array.from(
    new Set(projects.flatMap((project) => project.tags))
  );

  // Filter projects based on selected tag
  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.tags.includes(filter));

  return (
    <section
      id="projects"
      className="py-20 px-4 md:px-6"
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary-500">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects. Each project is built with a
            focus on performance, user experience, and clean code.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === "all"
                ? "bg-primary-500 text-white"
                : "bg-light-300 dark:bg-dark-200 hover:bg-light-400 dark:hover:bg-dark-100"
            }`}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === tag
                  ? "bg-primary-500 text-white"
                  : "bg-light-300 dark:bg-dark-200 hover:bg-light-400 dark:hover:bg-dark-100"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-light-100 dark:bg-dark-300 rounded-xl overflow-hidden shadow-lg border border-border hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary-500/30 to-secondary-500/30 flex items-center justify-center text-2xl font-bold text-white">
                  {project.title.split(" ")[0]}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full bg-light-300 dark:bg-dark-200 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-500 hover:text-primary-600 font-medium flex items-center"
                  >
                    Live Demo
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 ml-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary-500 font-medium flex items-center"
                  >
                    GitHub
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4 ml-1"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 