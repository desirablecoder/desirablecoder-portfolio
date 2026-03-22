import { useState } from "react";
import { motion } from "framer-motion";
import {
  Home,
  User,
  Briefcase,
  Award,
  MessageSquare,
  Mail,
  Menu,
  X,
  Moon,
  Sun,
} from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback } from "./ui/avatar";
const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "technologies", label: "Technologies", icon: User },
  { id: "projects", label: "Projects", icon: Briefcase },
  // { id: "experience", label: "Experience", icon: Award },
  { id: "testimonials", label: "Testimonials", icon: MessageSquare },
  { id: "contact", label: "Contact", icon: Mail },
];
export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [isDark, setIsDark] = useState(false);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(true);
    }
  };
  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };
  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed z-50 cursor-pointer top-4 left-4 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </Button>
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        className={`fixed z-40 top-0 left-0 h-screen bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-r border-border/50 transition-all duration-300 ${
          isOpen ? "w-64" : "w-0 md:w-16 lg:w-20"
        }`}
      >
        <div className="flex flex-col h-full p-4">
          {/* Avatar and Name */}
          <div className="flex flex-col items-center mt-4 mb-8">
            <Avatar className="w-12 h-12 mb-2">
              <AvatarFallback className="bg-[#50C878] text-white font-semibold">
                D
              </AvatarFallback>
            </Avatar>
            {isOpen && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm font-semibold text-gray-900 dark:text-white"
              >
                desirablecoder
              </motion.span>
            )}
          </div>
          {/* Navigation */}
          <nav className="flex-1 mt-6 md:mt-4">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="flex items-center w-full gap-3 px-3 py-2 transition-colors rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 group"
                  >
                    <item.icon className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-[#50C878]" />
                    {isOpen && (
                      <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-[#50C878]">
                        {item.label}
                      </span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="cursor-pointer"
          >
            {isDark ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </Button>
        </div>
      </motion.aside>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
