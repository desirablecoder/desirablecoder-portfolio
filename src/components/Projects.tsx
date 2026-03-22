import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
const projects = [
  {
    id: 1,
    title: "Project 1",
    year: "2025",
    description:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
    image: "/zerosandones.jpg",
    tags: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    status: "Active",
    category: ["fullstack", "web"],
    link: "#",
  },
  {
    id: 2,
    title: "Project 2",
    year: "2024",
    description:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
    image: "/zerosandones.jpg",
    tags: ["React", "Tailwind CSS", "GSAP", "Three.js"],
    status: "Live",
    category: ["web", "design"],
    link: "#",
  },
  {
    id: 3,
    title: "Project 3",
    year: "2024",
    description:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
    image: "/zerosandones.jpg",
    tags: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    status: "Active",
    category: ["web", "design"],
    link: "#",
  },
  {
    id: 4,
    title: "Project 4",
    year: "2024",
    description:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
    image: "/zerosandones.jpg",
    tags: ["React", "Firebase", "Tailwind CSS", "Three.js"],
    status: "Production",
    category: ["fullstack", "web"],
    link: "#",
  },
  {
    id: 5,
    title: "Project 5",
    year: "2024",
    description:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
    image: "/zerosandones.jpg",
    tags: ["React", "Node.js", "Render", "Performance Optimization"],
    status: "Production",
    category: ["fullstack", "web"],
    link: "#",
  },
  {
    id: 6,
    title: "Project 6",
    year: "2025",
    description:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
    image: "/zerosandones.jpg",
    tags: ["React", "Vite", "Tailwind CSS", "EmailJS"],
    status: "Active",
    category: ["web", "mobile"],
    link: "#",
  },
];
const categories = ["all", "web", "mobile", "fullstack", "design"];
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
                    Live Demo
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
