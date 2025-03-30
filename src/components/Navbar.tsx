"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-dark-300/80 backdrop-blur-md py-3 shadow-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent"
        >
          DevPortfolio
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
    </header>
  );
} 