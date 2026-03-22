import React from "react";
import { motion } from "framer-motion";

const techGroups = [
  {
    label: "Languages",
    items: [
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        docs: "https://developer.mozilla.org/docs/Web/JavaScript",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        docs: "https://www.typescriptlang.org/docs/",
      },
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        docs: "https://docs.python.org/3/",
      },
      {
        name: "VB.NET",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualbasic/visualbasic-original.svg",
        docs: "https://learn.microsoft.com/en-us/dotnet/visual-basic/",
      },
      {
        name: "C#",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
        docs: "https://docs.microsoft.com/en-us/dotnet/csharp/",
      },
      {
        name: "HTML5",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        docs: "https://developer.mozilla.org/docs/Web/HTML",
      },
    ],
  },
  {
    label: "Frontend",
    items: [
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        docs: "https://react.dev/",
      },
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        docs: "https://nextjs.org/docs",
      },
      {
        name: "Tailwind CSS",
        icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
        docs: "https://tailwindcss.com/docs",
      },
      {
        name: "shadcn/ui",
        icon: "/shadcnui.svg",
        docs: "https://ui.shadcn.com/",
      },
      {
        name: "Bootstrap",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        docs: "https://getbootstrap.com/",
      },
      {
        name: "Material UI",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
        docs: "https://mui.com/",
      },
      {
        name: "jQuery",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
        docs: "https://api.jquery.com/",
      },
      {
        name: "CSS3",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        docs: "https://developer.mozilla.org/docs/Web/CSS",
      },
    ],
  },
  {
    label: "Backend",
    items: [
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        docs: "https://nodejs.org/en/docs",
      },
      {
        name: "Express.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        docs: "https://expressjs.com/",
      },
      {
        name: "Django",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
        docs: "https://docs.djangoproject.com/",
      },
      {
        name: "TensorFlow",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
        docs: "https://www.tensorflow.org/learn",
      },
      {
        name: "FastAPI",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
        docs: "https://fastapi.tiangolo.com/",
      },
      {
        name: "GraphQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
        docs: "https://graphql.org/learn/",
      },
      {
        name: "Supabase",
        icon: "https://avatars.githubusercontent.com/u/54469796?s=200&v=4",
        docs: "https://supabase.com/docs",
      },
    ],
  },
  {
    label: "Database",
    items: [
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        docs: "https://www.mongodb.com/docs/",
      },
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        docs: "https://www.postgresql.org/docs/",
      },
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        docs: "https://dev.mysql.com/doc/",
      },
      {
        name: "SQLite",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
        docs: "https://www.sqlite.org/docs.html",
      },
      {
        name: "Redis",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
        docs: "https://redis.io/docs/",
      },
      {
        name: "Supabase",
        icon: "https://avatars.githubusercontent.com/u/54469796?s=200&v=4",
        docs: "https://supabase.com/docs",
      },
      {
        name: "Firebase",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        docs: "https://firebase.google.com/docs",
      },
      {
        name: "SQL Server",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-original.svg",
        docs: "https://learn.microsoft.com/en-us/sql/sql-server/",
      },
    ],
  },
  {
    label: "DevOps & Cloud",
    items: [
      {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        docs: "https://docs.docker.com/",
      },
      {
        name: "AWS",
        icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
        docs: "https://docs.aws.amazon.com/",
      },
      {
        name: "Azure",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
        docs: "https://docs.microsoft.com/en-us/azure/",
      },
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        docs: "https://git-scm.com/doc",
      },
      {
        name: "Vercel",
        icon: "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png",
        docs: "https://vercel.com/docs",
      },
      {
        name: "Netlify",
        icon: "https://www.netlify.com/v3/img/components/logomark.png",
        docs: "https://docs.netlify.com/",
      },
      {
        name: "Github",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        docs: "https://docs.github.com/en",
      },
      {
        name: "Linux",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
        docs: "https://www.kernel.org/doc/html/latest/",
      },
    ],
  },
  {
    label: "AI",
    items: [
      {
        name: "Chatbot",
        icon: "/chatbot.svg",
        docs: "https://en.wikipedia.org/wiki/Chatbot",
      },
      {
        name: "Ollama",
        icon: "/ollama.svg",
        docs: "https://https://ollama.com//",
      },
      {
        name: "Langchain",
        icon: "/langchain.svg",
        docs: "https://www.langchain.com/",
      },
      {
        name: "Langgraph",
        icon: "/langgraph.svg",
        docs: "https://www.langchain.com/langgraph",
      },
      {
        name: "Cline",
        icon: "/cline.svg",
        docs: "https://cline.bot/",
      },
      {
        name: "Github Copilot",
        icon: "/githubcopilot.svg",
        docs: "https://github.com/features/copilot",
      },
      {
        name: "cusror",
        icon: "/cursor.svg",
        docs: "https://cursor.com",
      },
      {
        name: "replit",
        icon: "/replit.svg",
        docs: "https://replit.com/",
      },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 50,
    },
  },
};

const Technologies = () => {
  const [imageErrors, setImageErrors] = React.useState<Record<string, boolean>>(
    {},
  );

  const handleImageError = (techName: string) => {
    setImageErrors((prev) => ({ ...prev, [techName]: true }));
  };

  return (
    <section
      id="technologies"
      className="section-container bg-linear-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="section-title">Technologies I Work With</h2>
        <p className="max-w-2xl mx-auto text-xl text-gray-400">
          Cutting-edge tools and frameworks for building the future
        </p>
      </motion.div> */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center"
      >
        <p className="text-sm text-[#50C878] font-semibold mb-2 uppercase tracking-wider">
          TECHONOLOGIES
        </p>
        <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
          Technologies I Work With
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
          Cutting-edge tools and frameworks i use to build your future
          applications.
        </p>
      </motion.div>
      <div className="grid w-full grid-cols-1 mx-auto max-w-7xl md:grid-cols-2 lg:grid-cols-6 gap-y-16 gap-x-12">
        {techGroups.map((group) => (
          <div key={group.label} className="flex flex-col items-center h-full">
            <h3 className="mb-6 text-xl font-bold text-center text-[#50C878] tracking-wider bg-clip-text">
              {group.label}
            </h3>
            <motion.div
              className="grid grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {group.items.map((tech) => (
                <motion.a
                  key={tech.name}
                  href={tech.docs}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center no-underline group"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.08,
                    rotateY: 5,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                  whileTap={{ scale: 0.96 }}
                >
                  <div className="relative p-2 rounded-xl bg-black/400 backdrop-blur-sm border border-green-500/20 shadow-[0_0_10px_rgba(80,200,120,0.08)] group-hover:shadow-[0_0_30px_rgba(80,200,120,0.4)] transition-all duration-300 w-16 h-16 flex items-center justify-center">
                    <div className="absolute inset-0 transition-all duration-500 scale-150 opacity-0 bg-linear-to-r from-green-600/0 via-green-600/20 to-purple-600/0 rounded-xl blur-3xl group-hover:opacity-100 group-hover:scale-100"></div>
                    {!imageErrors[tech.name] ? (
                      <motion.img
                        src={tech.icon}
                        alt={tech.name}
                        className="relative z-10 object-contain w-10 h-10 transition-all duration-300 filter"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400 }}
                        onError={() => handleImageError(tech.name)}
                      />
                    ) : (
                      <div className="w-10 h-10 flex items-center justify-center border-2 border-green-500/40 rounded-lg bg-black/30 text-green-400 font-bold text-lg z-10 filter drop-shadow-[0_0_8px_rgba(59,130,246,0.3)] group-hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.6)] transition-all duration-300">
                        {tech.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <motion.span
                    className="mt-1 text-xs text-center transition-colors duration-300 text-black-400 group-hover:text-green-400"
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech.name}
                  </motion.span>
                </motion.a>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
