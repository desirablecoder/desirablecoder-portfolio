import { Github, Linkedin, Twitter, Mail } from "lucide-react";
export default function Footer() {
  return (
    <footer className="px-4 py-12 border-t bg-background border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-8 mb-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
              desirablecoder
            </h3>
            <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
              Passionate full-stack developer creating innovative solutions and
              exceptional user experiences with modern technologies.
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com/desirablecoder"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-[#50C878]/10 dark:hover:bg-[#50C878]/20 transition-colors cursor-pointer"
              >
                <Github className="w-4 h-4 text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/desirablecoder/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-[#50C878]/10 dark:hover:bg-[#50C878]/20 transition-colors cursor-pointer"
              >
                <Linkedin className="w-4 h-4 text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="https://twitter.com/desirablecoder"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-[#50C878]/10 dark:hover:bg-[#50C878]/20 transition-colors cursor-pointer"
              >
                <Twitter className="w-4 h-4 text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="mailto:desirablecoder@gmail.com"
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-[#50C878]/10 dark:hover:bg-[#50C878]/20 transition-colors cursor-pointer"
              >
                <Mail className="w-4 h-4 text-gray-700 dark:text-gray-300" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-gray-900 dark:text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["About", "Projects", "Experience", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#50C878] transition-colors cursor-pointer"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-gray-900 dark:text-white">
              Services
            </h4>
            <ul className="space-y-2">
              {[
                "Web Development",
                "Desktop Development",
                "AI & Chatbot Integration",
                "Consulting",
              ].map((service) => (
                <li key={service}>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <a
              href="#home"
              className="text-sm text-[#50C878] hover:text-[#50C878]/80 transition-colors cursor-pointer flex items-center gap-2"
            >
              ↑ Back to top
            </a>
          </div>
        </div>
        <div className="pt-8 text-center border-t border-border/50">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © 2026 desirablecoder.
          </p>
        </div>
      </div>
    </footer>
  );
}
