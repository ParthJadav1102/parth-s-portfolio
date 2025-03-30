"use client";

import { useState } from "react";

type Skill = {
  name: string;
  level: number;
  category: string;
};

const skills: Skill[] = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "Next.js", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Redux", level: 80, category: "frontend" },
  { name: "Framer Motion", level: 75, category: "frontend" },
  
  // Backend
  { name: "Node.js", level: 85, category: "backend" },
  { name: "Express", level: 80, category: "backend" },
  { name: "Python", level: 75, category: "backend" },
  { name: "Django", level: 70, category: "backend" },
  { name: "GraphQL", level: 75, category: "backend" },
  { name: "RESTful APIs", level: 90, category: "backend" },
  
  // Database
  { name: "MongoDB", level: 85, category: "database" },
  { name: "PostgreSQL", level: 80, category: "database" },
  { name: "Firebase", level: 75, category: "database" },
  { name: "Redis", level: 65, category: "database" },
  
  // DevOps & Tools
  { name: "Git", level: 90, category: "devops" },
  { name: "Docker", level: 75, category: "devops" },
  { name: "CI/CD", level: 80, category: "devops" },
  { name: "AWS", level: 70, category: "devops" },
  { name: "Jest", level: 80, category: "devops" },
  { name: "Cypress", level: 75, category: "devops" },
];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  
  const categories = [
    { id: "all", name: "All Skills" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "database", name: "Database" },
    { id: "devops", name: "DevOps & Tools" },
  ];
  
  const filteredSkills = activeCategory === "all" 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section
      id="skills"
      className="py-20 px-4 md:px-6 bg-light-100 dark:bg-dark-200"
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="text-primary-500">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels across different domains.
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? "bg-primary-500 text-white"
                  : "bg-light-300 dark:bg-dark-300 text-muted-foreground hover:bg-primary-100 dark:hover:bg-primary-900"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-light-200 dark:bg-dark-300 p-6 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold">{skill.name}</h3>
                <span className="text-sm text-primary-500">{skill.level}%</span>
              </div>
              <div className="w-full bg-light-300 dark:bg-dark-400 rounded-full h-2.5">
                <div
                  className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 