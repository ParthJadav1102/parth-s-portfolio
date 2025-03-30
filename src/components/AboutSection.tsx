"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 px-4 md:px-6 bg-light-200 dark:bg-dark-300"
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-primary-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto lg:ml-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-2xl transform -rotate-3"></div>
              <div className="absolute inset-0 bg-light-100 dark:bg-dark-200 rounded-2xl overflow-hidden border border-border shadow-xl">
                <div className="w-full h-full relative">
                  {/* Profile image */}
                  <img
                    src="/profile-direct.jpg"
                    alt="Profile Photo"
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    className="rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Software Engineer & Web Developer
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm a passionate software engineer with over 5 years of experience
              in building web applications. I specialize in frontend development
              with React, Next.js, and TypeScript, but I'm also proficient in
              backend technologies like Node.js and Python.
            </p>
            <p className="text-muted-foreground mb-6">
              My journey in software development began during my computer
              science studies, where I discovered my passion for creating
              intuitive and efficient user interfaces. Since then, I've worked
              with startups and established companies to deliver high-quality
              software solutions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div>
                <p className="mb-2">
                  <span className="font-semibold">Name:</span> Parth Jadav
                </p>
                <p className="mb-2">
                  <span className="font-semibold">Email:</span>{" "}
                  jadavp419@gmail.com
                </p>
                <p>
                  <span className="font-semibold">Location:</span> Gujarat, India
                </p>
              </div>
              <div>
                <p className="mb-2">
                  <span className="font-semibold">Experience:</span> 3+ Years
                </p>
                <p className="mb-2">
                  <span className="font-semibold">Degree:</span> B.Tech Computer Science and Engineering
                </p>
                <p>
                  <span className="font-semibold">Freelance:</span> Available
                </p>
              </div>
            </div>
            <a
              href="/resume.pdf"
              className="inline-flex items-center bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
              download="Parth_Jadav_Resume.pdf"
              rel="noopener noreferrer"
            >
              Download Resume
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 