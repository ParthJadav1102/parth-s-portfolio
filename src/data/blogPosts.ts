export type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  slug: string;
  content: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "A Complete Guide to Google Summer of Code (GSoC) for Beginners",
    excerpt:
      "Learn everything you need to know about GSoC, from understanding the program to successfully getting selected.",
    date: "March 14, 2024",
    readTime: "8 min read",
    category: "Open Source",
    image: "/images/blog/gsoc.jpg",
    slug: "complete-guide-to-gsoc-for-beginners",
    content: `
      <h1>A Complete Guide to Google Summer of Code (GSoC) for Beginners</h1>

      <h2>Introduction</h2>
      <p>Google Summer of Code (GSoC) is a global, online program focused on bringing new contributors into open-source software development. It provides students and beginner developers the opportunity to work with open-source organizations on real-world projects while receiving mentorship and a stipend.</p>
      <p>In this blog, we will cover everything you need to know about GSoC, from understanding the program to successfully getting selected.</p>

      <h2>What is GSoC?</h2>
      <p>GSoC is an annual program organized by Google to promote open-source development. Participants work remotely with an open-source organization on a coding project for 10-22 weeks. The key benefits include:</p>
      <ul>
        <li>Hands-on experience in software development</li>
        <li>Mentorship from industry experts</li>
        <li>Stipend based on location</li>
        <li>Opportunity to contribute to global open-source projects</li>
      </ul>

      <h2>Who Can Apply?</h2>
      <p>Unlike previous years when only students were eligible, GSoC is now open to anyone above 18 years old who is new to open-source development. Whether you're a student, a working professional, or someone looking to enhance their skills, you can participate.</p>
      
      <h3>Eligibility Criteria:</h3>
      <ul>
        <li>Must be at least 18 years old</li>
        <li>Must be a newcomer to open-source development</li>
        <li>Must be eligible to work in their country</li>
        <li>Must be willing to commit time to complete the project</li>
      </ul>

      <h2>How to Get Selected for GSoC?</h2>
      <p>Here's a step-by-step guide to improving your chances of getting selected:</p>

      <h3>1. Understand the GSoC Timeline</h3>
      <p>GSoC follows a well-defined timeline, which includes:</p>
      <ul>
        <li>Organizations Announced: Open-source organizations list their available projects.</li>
        <li>Application Period: Participants submit proposals for the projects they want to work on.</li>
        <li>Community Bonding Period: Selected candidates familiarize themselves with the community.</li>
        <li>Coding Phases: Work on the project under mentorship.</li>
      </ul>

      <h3>2. Choose the Right Organization</h3>
      <ul>
        <li>Browse the list of participating organizations on the official GSoC website.</li>
        <li>Select organizations that match your skills (e.g., Java, Python, ML, etc.).</li>
        <li>Join their communication channels (Slack, Discord, mailing lists, etc.).</li>
      </ul>

      <h3>3. Contribute Before Applying</h3>
      <ul>
        <li>Start contributing early by solving issues, improving documentation, or fixing bugs.</li>
        <li>Engage with the community and ask meaningful questions.</li>
        <li>Follow coding guidelines and understand the project structure.</li>
      </ul>

      <h3>4. Write a Strong Proposal</h3>
      <ul>
        <li>Follow the proposal template provided by the organization.</li>
        <li>Clearly define your project goals, deliverables, and timeline.</li>
        <li>Demonstrate understanding of the project and why you are a good fit.</li>
        <li>Get feedback from mentors before submitting.</li>
      </ul>

      <h2>Tips to Improve Your Chances</h2>
      <ul>
        <li>Start early: Begin exploring organizations months before applications open.</li>
        <li>Engage with the community: Ask questions, contribute, and show enthusiasm.</li>
        <li>Improve your coding skills: Learn Git, version control, and the required tech stack.</li>
        <li>Write clean, efficient code: Quality matters more than quantity in contributions.</li>
      </ul>

      <h2>Conclusion</h2>
      <p>GSoC is a fantastic opportunity for anyone looking to break into open-source development. With proper preparation, contributions, and a well-crafted proposal, you can maximize your chances of selection. Whether you are a student or a professional, participating in GSoC can significantly boost your skills, resume, and networking opportunities.</p>
      <p>Are you planning to apply for GSoC? Let us know your thoughts and questions in the comments!</p>
    `
  },
  {
    id: 2,
    title: "Building Responsive UIs with Tailwind CSS",
    excerpt:
      "Learn how to create beautiful, responsive user interfaces using Tailwind CSS utility classes.",
    date: "June 15, 2023",
    readTime: "8 min read",
    category: "Frontend",
    image: "/images/blog/blog-1.jpg",
    slug: "building-responsive-uis-with-tailwind",
    content: `
      <h1>Building Responsive UIs with Tailwind CSS</h1>
      <p>This is a placeholder for the full blog content about Tailwind CSS.</p>
    `
  },
  {
    id: 3,
    title: "Getting Started with Next.js 13 App Router",
    excerpt:
      "Explore the new App Router in Next.js 13 and learn how to build modern web applications.",
    date: "July 22, 2023",
    readTime: "10 min read",
    category: "React",
    image: "/images/blog/blog-2.jpg",
    slug: "getting-started-with-nextjs-13-app-router",
    content: `
      <h1>Getting Started with Next.js 13 App Router</h1>
      <p>This is a placeholder for the full blog content about Next.js 13 App Router.</p>
    `
  },
  {
    id: 4,
    title: "Optimizing Performance in React Applications",
    excerpt:
      "Discover techniques and best practices for improving the performance of your React applications.",
    date: "August 10, 2023",
    readTime: "12 min read",
    category: "Performance",
    image: "/images/blog/blog-3.jpg",
    slug: "optimizing-performance-in-react-applications",
    content: `
      <h1>Optimizing Performance in React Applications</h1>
      <p>This is a placeholder for the full blog content about optimizing React performance.</p>
    `
  },
  {
    id: 5,
    title: "Introduction to TypeScript for JavaScript Developers",
    excerpt:
      "Learn how TypeScript can enhance your JavaScript development experience with static typing.",
    date: "September 5, 2023",
    readTime: "9 min read",
    category: "TypeScript",
    image: "/images/blog/blog-4.jpg",
    slug: "introduction-to-typescript-for-javascript-developers",
    content: `
      <h1>Introduction to TypeScript for JavaScript Developers</h1>
      <p>This is a placeholder for the full blog content about TypeScript.</p>
    `
  }
]; 