"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "Software Engineer";
  const typingSpeed = 100;
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, typingSpeed);

      return () => clearTimeout(timeout);
    }
  }, [typedText]);

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="relative">
      {/* Navigation Bar */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-dark-300/80 backdrop-blur-md py-3 shadow-md"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold text-white"
          >
            Parth Jadav
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/about"
              className={`transition-colors ${
                isActive("/about")
                  ? "text-primary-500"
                  : "text-foreground hover:text-primary-500"
              }`}
            >
              About
            </Link>
            <Link
              href="/projects"
              className={`transition-colors ${
                isActive("/projects")
                  ? "text-primary-500"
                  : "text-foreground hover:text-primary-500"
              }`}
            >
              Projects
            </Link>
            <Link
              href="/experience"
              className={`transition-colors ${
                isActive("/experience")
                  ? "text-primary-500"
                  : "text-foreground hover:text-primary-500"
              }`}
            >
              Experience
            </Link>
            <Link
              href="/skills"
              className={`transition-colors ${
                isActive("/skills")
                  ? "text-primary-500"
                  : "text-foreground hover:text-primary-500"
              }`}
            >
              Skills
            </Link>
            <Link
              href="/blog"
              className={`transition-colors ${
                isActive("/blog")
                  ? "text-primary-500"
                  : "text-foreground hover:text-primary-500"
              }`}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className={`transition-colors ${
                isActive("/contact")
                  ? "text-primary-500"
                  : "text-foreground hover:text-primary-500"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden bg-dark-300 py-4 px-4 shadow-lg">
            <div className="flex flex-col space-y-4">
              <Link
                href="/about"
                className={`py-2 transition-colors ${
                  isActive("/about")
                    ? "text-primary-500"
                    : "text-foreground hover:text-primary-500"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/projects"
                className={`py-2 transition-colors ${
                  isActive("/projects")
                    ? "text-primary-500"
                    : "text-foreground hover:text-primary-500"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/experience"
                className={`py-2 transition-colors ${
                  isActive("/experience")
                    ? "text-primary-500"
                    : "text-foreground hover:text-primary-500"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Experience
              </Link>
              <Link
                href="/skills"
                className={`py-2 transition-colors ${
                  isActive("/skills")
                    ? "text-primary-500"
                    : "text-foreground hover:text-primary-500"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Skills
              </Link>
              <Link
                href="/blog"
                className={`py-2 transition-colors ${
                  isActive("/blog")
                    ? "text-primary-500"
                    : "text-foreground hover:text-primary-500"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className={`py-2 transition-colors ${
                  isActive("/contact")
                    ? "text-primary-500"
                    : "text-foreground hover:text-primary-500"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>

      {/* Hero Section */}
      {pathname === "/" && (
        <section
          id="hero"
          className="min-h-screen flex items-center pt-20 pb-16 px-4 md:px-6 relative overflow-hidden"
        >
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-secondary-500/10 animate-gradient-xy"></div>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary-500/50 to-transparent"></div>
          </div>

          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                  Parth Jadav
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 flex items-center">
                <span>{typedText}</span>
                <span className="ml-1 h-8 w-1 bg-primary-500 animate-pulse"></span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                I build modern, responsive web applications with a focus on
                performance, accessibility, and user experience. Passionate about
                creating elegant solutions to complex problems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/projects"
                  className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 text-center border border-white"
                >
                  View My Work
                </Link>
                <Link
                  href="/contact"
                  className="border border-border hover:bg-dark-200 font-medium py-3 px-6 rounded-lg transition-colors duration-300 text-center"
                >
                  Contact Me
                </Link>
              </div>
              <div className="flex items-center space-x-4 mt-8">
                <a
                  href="https://github.com/ParthJadav1102"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary-500 transition-colors"
                  aria-label="GitHub"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/parth-jadav1102/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary-500 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
            <div className="relative animate-fade-in animate-delay-300 hidden lg:block">
              <div className="relative w-full h-[500px]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-2xl transform rotate-3"></div>
                <div className="absolute inset-0 bg-dark-300 rounded-2xl border border-border shadow-xl backdrop-blur-sm">
                  <div className="p-4">
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-4 bg-dark-200 rounded w-3/4"></div>
                      <div className="h-4 bg-dark-200 rounded w-1/2"></div>
                      <div className="h-4 bg-dark-200 rounded w-5/6"></div>
                      <div className="h-4 bg-dark-200 rounded w-2/3"></div>
                      <div className="h-4 bg-primary-500/30 rounded w-1/4"></div>
                    </div>
                    <div className="mt-6 space-y-3">
                      <div className="h-32 bg-dark-200 rounded"></div>
                      <div className="h-4 bg-dark-200 rounded w-3/4"></div>
                      <div className="h-4 bg-dark-200 rounded w-1/2"></div>
                    </div>
                    <div className="mt-6 space-y-3">
                      <div className="h-4 bg-dark-200 rounded w-5/6"></div>
                      <div className="h-4 bg-dark-200 rounded w-2/3"></div>
                      <div className="h-4 bg-secondary-500/30 rounded w-1/3"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </header>
  );
} 