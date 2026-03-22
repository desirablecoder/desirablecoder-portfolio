import { motion } from "framer-motion";
import { Code, Brain, Users, Zap, Cloud, Heart } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Progress } from "./ui/progress";
const features = [
  {
    icon: Code,
    title: "Full-stack development expertise",
  },
  {
    icon: Brain,
    title: "AI & Chatbot Integration",
  },
  {
    icon: Users,
    title: "Agile development methodology",
  },
  {
    icon: Zap,
    title: "Performance optimization",
  },
  {
    icon: Cloud,
    title: "Cloud deployment & DevOps",
  },
  {
    icon: Heart,
    title: "Team collaboration",
  },
];
const skills = [
  { name: "JavaScript", category: "Frontend", level: 95 },
  { name: "React", category: "Frontend", level: 90 },
  { name: "Node.js", category: "Backend", level: 85 },
  { name: "TypeScript", category: "Frontend", level: 88 },
  { name: "Python", category: "Backend", level: 82 },
  { name: "AWS", category: "Cloud", level: 78 },
  { name: "UI/UX Design", category: "Design", level: 80 },
  { name: "GraphQL", category: "Backend", level: 75 },
];
const stats = [
  { value: "AWS & React", label: "Certified Professional" },
  { value: "25+", label: "Happy Clients" },
  { value: "1000+ cups", label: "Coffee Consumed" },
  { value: "3+", label: "Years Experience" },
];
export default function About() {
  return (
    <section
      id="about"
      className="px-4 py-24 bg-linear-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="text-sm text-[#50C878] font-semibold mb-2 uppercase tracking-wider">
            About Me
          </p>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
            Building Complete System Design
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            Passionate about creating reliable applications through clean code.
          </p>
        </motion.div>
        <div className="grid gap-12 mb-16 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
              My Journey
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                I'm Prabhu. I've been a seasoned software developer creating
                desktop and web applications for more than a decade. I create
                modern, scalable full-stack applications. My expertise spans the
                entire application development lifecycle, from the concept to
                deployment and maintenance.
              </p>
              <p>
                I specialize in Next.js, MERN (Mongodb, Express, React,
                Node.js), C#, ASP.NET, Blazor, Python, Django and cloud
                technologies, always staying current with industry best
                practices. I also build AI & Chatbot Integration.
              </p>
              <p>
                I believe in writing clean, S.O.L.I.D, maintainable code that
                stands the test of time.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="mb-6 text-xl font-semibold text-gray-900 dark:text-white">
              What I Bring
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="bg-white/50 dark:bg-gray-800/50 border-gray-200/50 dark:border-gray-700/50"
                >
                  <CardContent className="p-4">
                    <feature.icon className="w-6 h-6 text-[#50C878] mb-2" />
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      {feature.title}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h3 className="mb-8 text-2xl font-semibold text-center text-gray-900 dark:text-white">
            Skills & Technologies
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-900 dark:text-white">
                    {skill.name}
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {skill.category}
                  </span>
                </div>
                <div className="relative">
                  <Progress value={skill.level} className="h-2" />
                  <span className="absolute right-0 text-xs text-gray-500 top-4 dark:text-gray-400">
                    {skill.level}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div> */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 gap-6 md:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="text-center bg-linear-to-br from-[#50C878]/5 to-gray-50/5 border-[#50C878]/20"
            >
              <CardContent className="p-6">
                <p className="text-2xl font-bold text-[#50C878] mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </p>
              </CardContent>
            </Card>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
}
