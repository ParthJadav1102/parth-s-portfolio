"use client";

type Experience = {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string[];
  technologies: string[];
};

const experiences: Experience[] = [
  {
    id: 1,
    company: "Tech Innovations Inc.",
    position: "Senior Frontend Developer",
    duration: "Jan 2022 - Present",
    description: [
      "Led a team of 5 developers in building a new customer portal using Next.js and TypeScript",
      "Implemented CI/CD pipelines that reduced deployment time by 40%",
      "Optimized application performance, improving load times by 60%",
      "Collaborated with UX designers to implement responsive designs and improve accessibility",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Redux",
      "Tailwind CSS",
      "Jest",
      "GitHub Actions",
    ],
  },
  {
    id: 2,
    company: "Digital Solutions LLC",
    position: "Frontend Developer",
    duration: "Mar 2020 - Dec 2021",
    description: [
      "Developed and maintained multiple React applications for enterprise clients",
      "Built reusable component libraries that improved development efficiency by 30%",
      "Integrated RESTful APIs and GraphQL endpoints for data fetching",
      "Participated in code reviews and mentored junior developers",
    ],
    technologies: [
      "React",
      "JavaScript",
      "GraphQL",
      "Styled Components",
      "Cypress",
      "GitLab CI",
    ],
  },
  {
    id: 3,
    company: "WebCraft Studios",
    position: "Web Developer",
    duration: "Jun 2018 - Feb 2020",
    description: [
      "Developed responsive websites for clients across various industries",
      "Created custom WordPress themes and plugins",
      "Implemented e-commerce solutions using WooCommerce and Shopify",
      "Optimized website performance and SEO",
    ],
    technologies: [
      "HTML/CSS",
      "JavaScript",
      "WordPress",
      "PHP",
      "jQuery",
      "SASS",
    ],
  },
  {
    id: 4,
    company: "Startup Ventures",
    position: "Junior Developer (Internship)",
    duration: "Jan 2018 - May 2018",
    description: [
      "Assisted in developing frontend features for a SaaS product",
      "Fixed bugs and improved existing codebase",
      "Participated in daily stand-ups and sprint planning",
      "Learned modern development workflows and best practices",
    ],
    technologies: ["HTML/CSS", "JavaScript", "Bootstrap", "Git"],
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-20 px-4 md:px-6 bg-light-200 dark:bg-dark-300"
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="text-primary-500">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey in software development, showcasing my roles
            and responsibilities at various companies.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:-translate-x-px"></div>

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="relative mb-12 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div
                className={`flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-5 h-5 rounded-full bg-primary-500 border-4 border-light-100 dark:border-dark-300 transform -translate-x-1/2 z-10"></div>

                {/* Content */}
                <div
                  className={`ml-8 md:ml-0 md:w-1/2 ${
                    index % 2 === 0
                      ? "md:pl-12 md:pr-16"
                      : "md:pr-12 md:pl-16"
                  }`}
                >
                  <div className="bg-light-100 dark:bg-dark-200 p-6 rounded-lg shadow-md border border-border hover:shadow-lg transition-shadow duration-300">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                      <h3 className="text-xl font-bold">{exp.position}</h3>
                      <span className="text-primary-500 font-medium mt-1 sm:mt-0">
                        {exp.duration}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold mb-4 text-muted-foreground">
                      {exp.company}
                    </h4>
                    <ul className="list-disc list-inside space-y-2 mb-4 text-muted-foreground">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 rounded-full bg-light-300 dark:bg-dark-300 text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 