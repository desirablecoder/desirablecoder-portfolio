import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
const projects = [
  {
    id: 1,
    title: "Modern Inventory and Billing Management System ",
    year: "",
    description:
      "A comprehensive, modern inventory and billing management system designed for small to medium-sized businesses. Built with a powerful tech stack including Next.js 15, Node.js, Express, and MongoDB, this system provides a complete solution for managing products, customers, vendors, transactions, and generating insightful reports.",
    image: "Dashboard-Blue-Theme.png",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Mongodb"],
    status: "Active",
    category: ["fullstack"],
    link: "https://github.com/desirablecoder/Modern-Inventory-and-Billing-Management-System",
  },
  {
    id: 2,
    title: "MERN Fullstack E-Commerce Platform for crackers shop",
    year: "",
    description:
      "A full-stack e-commerce platform for crackers and fireworks with modern web technologies, featuring real-time updates, secure payments, and comprehensive admin management.",
    image: "products-page.png",
    tags: ["React", "Express", "Node", "Bootstrap", "mongodb"],
    status: "Active",
    category: ["fullstack"],
    link: "https://github.com/desirablecoder/mern-ecommerce",
  },
  {
    id: 3,
    title: "desirablecoder-portfolio",
    year: "",
    description:
      "I'm a Full-stack developer with AI and this is my portfolio repo ",
    image: "desirablecoder-portfolio.png",
    tags: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    status: "Active",
    category: ["spa"],
    link: "I'm a Full-stack developer with AI and this is my portfolio repo ",
  },
  {
    id: 4,
    title: "Chat with your local LLM using Ollama ",
    year: "",
    description:
      "This repo shows how to use the Next.js, LangChain, and Ollama to create a ChatGPT-like AI-powered streaming chat bot.",
    image: "chat-with-your-local-models.png",
    tags: ["Next.js", "OLLAMA", "Langchain", "Tailwind CSS"],
    status: "Active",
    category: ["spa", "ai-chatbot"],
    link: "https://github.com/desirablecoder/chat-with-your-local-models",
  },
  {
    id: 5,
    title: "Talk to your SQL tables using Ollama (SQL Query RAG)",
    year: "",
    description:
      "This repo showcasing Query RAG (Retrieval-Augmented Generation) capabilities with AI-powered SQL query generation. automatically analyze their contents, and use natural language to query the data through an AI workflow.",
    image: "sql-query-rag2.png",
    tags: ["React", "Express", "Ollama"],
    status: "Active",
    category: ["fullstack", "ai-chatbot"],
    link: "https://github.com/desirablecoder/sql-query-rag/tree/main",
  },
  {
    id: 6,
    title: "Game Presenter Signage",
    year: "",
    description: "Game Presenter Signage",
    image: "Game-Presenter-Signage.png",
    tags: ["WPF", "SQL Server"],
    status: "",
    category: ["desktop"],
    link: "#",
  },
  {
    id: 7,
    title: "Digital Scoreboard Signage",
    year: "",
    description: "Digital Scoreboard Signage",
    image: "Digital-Scoreboard-Signage.png",
    tags: ["WPF", "SQL Server"],
    status: "",
    category: ["desktop"],
    link: "#",
  },
  {
    id: 8,
    title: "Online Accounting and Inventory Management System",
    year: "",
    description: "Online Accounting and Inventory Management System",
    image: "Online-Accounting-and-Inventory-Management.png",
    tags: ["ASP.NET", "SQL Server"],
    status: "",
    category: ["web"],
    link: "#",
  },
  {
    id: 9,
    title: "Inventory and Lead Managment System for Pre Owned Car Sales",
    year: "",
    description: "Inventory and Lead Managment System for Pre Owned Car Sales",
    image: "Pre-Owned-Car-Sales.png",
    tags: ["WPF", "SQL Server"],
    status: "",
    category: ["desktop"],
    link: "#",
  },
  {
    id: 10,
    title: "7min scientific workout mobile app",
    year: "",
    description: "7min scientific workout mobile app",
    image: "7min-workout-mobile-app.png",
    tags: [""],
    status: "",
    category: ["mobile"],
    link: "#",
  },
  {
    id: 11,
    title: "Quilt Pattern Designer Application",
    year: "",
    description: "Quilt Pattern Designer Application",
    image: "Quilt-Pattern-Designer.png",
    tags: ["wpf"],
    status: "",
    category: ["desktop"],
    link: "#",
  },
  {
    id: 12,
    title: "Temperature Sensor Monitoring System",
    year: "",
    description: "Temperature Sensor Monitoring System",
    image: "Temperature-Sensor-Monitoring-System.png",
    tags: ["wpf"],
    status: "",
    category: ["desktop"],
    link: "#",
  },
];
const categories = [
  "all",
  "fullstack",
  "spa",
  "ai-chatbot",
  "desktop",
  "web",
  "mobile",
];
export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category.includes(activeCategory));
  return (
    <section id="projects" className="px-4 py-24 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="text-sm text-[#50C878] font-semibold mb-2 uppercase tracking-wider">
            Featured Work
          </p>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
            Projects & Case Studies
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            A showcase of my recent work, from concept to deployment
          </p>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={`cursor-pointer ${
                activeCategory === category
                  ? "bg-[#50C878] text-white hover:bg-[#50C878]/90"
                  : ""
              }`}
            >
              {category}
            </Button>
          ))}
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="flex flex-col h-full overflow-hidden transition-shadow duration-300 hover:shadow-xl">
                <div className="relative overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-[#50C878] text-white">
                      {project.status}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {project.year}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-4">
                    {project.description}
                  </p>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    className="w-full cursor-pointer group"
                    onClick={() => window.open(project.link, "_blank")}
                  >
                    Repo
                    <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            Interested in working together?
          </p>
          <Button
            size="lg"
            className="bg-[#50C878] hover:bg-[#50C878]/90 text-white cursor-pointer"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Start a Project
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
