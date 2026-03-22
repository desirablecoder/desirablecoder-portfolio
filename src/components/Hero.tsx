import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen px-4 py-16 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-[#50C878]/5 via-gray-50/5 to-gray-50/10 dark:from-[#50C878]/10 dark:via-gray-900/50 dark:to-gray-900/80" />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge className="mb-4 bg-[#DBEAFE] text-[#1E3A8A] border-[#BFDBFE] hover:bg-[#BFDBFE]">
            Available for opportunities
          </Badge>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 text-5xl font-medium text-gray-900 md:text-7xl lg:text-8xl dark:text-white"
          >
            desirablecoder
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 text-2xl text-gray-700 md:text-3xl dark:text-gray-300"
          >
            I build complete, production-ready systems from the ground up.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-2xl mx-auto mb-12 text-base text-gray-600 md:text-lg dark:text-gray-400"
          >
            I'm a Full-stack developer with AI Engineering. I help building
            modern, scalable web applications with exceptional user experiences
            to grow your business.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <Button
              size="lg"
              className="bg-[#50C878] hover:bg-[#50C878]/90 text-white cursor-pointer"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View My Work
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="cursor-pointer"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get In Touch
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center justify-center gap-4"
          >
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Connect with me:
            </span>
            <div className="flex gap-3">
              <a
                href="https://github.com/desirablecoder"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-[#50C878]/10 dark:hover:bg-[#50C878]/20 transition-colors cursor-pointer"
              >
                <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/desirablecoder/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-[#50C878]/10 dark:hover:bg-[#50C878]/20 transition-colors cursor-pointer"
              >
                <Linkedin className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
