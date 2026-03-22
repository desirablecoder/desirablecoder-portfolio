import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
const experiences = [
  {
    id: 1,
    title: "lorem ipsum",
    company: "lorem ipsum",
    location: "lorem ipsum",
    period: "08/2024 – Present",
    type: "Full-time",
    description:
      "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
    achievements: [
      "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
      "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
      "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
    ],
    skills: ["React", "Node.js", "Firebase", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "lorem ipsum",
    company: "lorem ipsum",
    location: "Pudukkottai, Tamilnadu",
    period: "Jan 2022 - Dec 2024",
    type: "Internship",
    description:
      "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
    achievements: [
      "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
      "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
      "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
    ],
    skills: ["React", "JavaScript"],
  },
];
export default function Experience() {
  return (
    <section
      id="experience"
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
            Career Journey
          </p>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
            Professional Experience
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            A timeline of my growth and contributions in the tech industry
          </p>
        </motion.div>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden transition-shadow duration-300 hover:shadow-xl">
                <CardHeader className="bg-linear-to-r from-[#50C878]/5 to-gray-50/5 dark:from-[#50C878]/10 dark:to-gray-800/50">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="mb-1 text-xl font-semibold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <p className="text-[#50C878] font-medium mb-2">
                        {exp.company}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {exp.type}
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600 dark:text-gray-400">
                    {exp.description}
                  </p>
                </CardHeader>
                <CardContent className="pt-6">
                  <h4 className="mb-3 font-semibold text-gray-900 dark:text-white">
                    Key Achievements
                  </h4>
                  <ul className="mb-6 space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="flex gap-2 text-sm text-gray-600 dark:text-gray-400"
                      >
                        <span className="text-[#50C878] mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
