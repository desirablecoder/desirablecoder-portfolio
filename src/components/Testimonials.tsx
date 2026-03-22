import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Star, Play, Pause } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { useState } from "react";
const testimonials = [
  {
    id: 1,
    name: "Client form Upwork.com",
    role: "Client",
    date: "Apr 2024",
    image: "https://picsum.photos/200/200?random=192",
    content:
      "Prabhu is not only an excellent coder, but goes way beyond the normal to make sure everything is working perfectly. I've worked with him before and will do so in the future.",
    rating: 5,
    link: "https://www.upwork.com/freelancers/~015520d9f6cf890eaf",
  },
  {
    id: 2,
    name: "Client form Upwork.com",
    role: "Client",
    date: "Dec 2023",
    image: "https://picsum.photos/200/200?random=182",
    content: "Quick learner. Does more than expected from others.",
    rating: 5,
    link: "https://www.upwork.com/freelancers/~015520d9f6cf890eaf",
  },
  {
    id: 3,
    name: "Client form Upwork.com",
    role: "Client",
    date: "Dec 2023",
    image: "https://picsum.photos/200/200?random=172",
    content: "Prabhu is very knowledgeable and get the work done. Thank you",
    rating: 5,
    link: "https://www.upwork.com/freelancers/~015520d9f6cf890eaf",
  },
  {
    id: 4,
    name: "Client form Upwork.com",
    role: "Client",
    date: "Dec 2022",
    image: "https://picsum.photos/200/200?random=162",
    content:
      "Prabhu writes nice clean easy to follow code.  He adheres to the project guidelines and makes suggestions as needed for things that we might not have thought about.  Will definitely hire again.",
    rating: 5,
    link: "https://www.upwork.com/freelancers/~015520d9f6cf890eaf",
  },
  {
    id: 5,
    name: "Client form Upwork.com",
    role: "Client",
    date: "Oct 2021",
    image: "https://picsum.photos/200/200?random=152",
    content:
      "Prabhu tries to do what it takes to solve a problem and very receptive to ideas and different approaches to solve it.",
    rating: 5,
    link: "https://www.upwork.com/freelancers/~015520d9f6cf890eaf",
  },
  {
    id: 6,
    name: "Client form Upwork.com",
    role: "Client",
    date: "Aug 2020",
    image: "https://picsum.photos/200/200?random=142",
    content: "Prabhu is great to work with and completes work very fast. A++",
    rating: 5,
    link: "https://www.upwork.com/freelancers/~015520d9f6cf890eaf",
  },
  {
    id: 7,
    name: "Client form freelancer.com",
    role: "Client",
    date: "",
    image: "https://picsum.photos/200/200?random=132",
    content:
      "Very responsive and thorough. Excellent work. Good communication. Will use again.",
    rating: 5,
    link: "https://www.freelancer.com/u/desirablecoder",
  },
  {
    id: 8,
    name: "Client form freelancer.com",
    role: "Client",
    date: "",
    image: "https://picsum.photos/200/200?random=122",
    content:
      "Excellent Programmer! HE is very proficient in C# and VB.net as well as hardware interfacing and USB standard, He was able to write a complete DLL for reading my USB hardware in both C# and VB.net I will keep working him on an ongoing basis . A++ programmer.",
    rating: 5,
    link: "https://www.freelancer.com/u/desirablecoder",
  },
];
const stats = [
  { value: "10+", label: "Happy Clients" },
  { value: "25+", label: "Projects Done" },
  { value: "5★", label: "Average Rating" },
  { value: "24/7", label: "Support" },
];
export default function Testimonials() {
  const [isPlaying, setIsPlaying] = useState(true);
  return (
    <section id="testimonials" className="px-4 py-24 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="text-sm text-[#50C878] font-semibold mb-2 uppercase tracking-wider">
            Client Love
          </p>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
            What People Say
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            Don't just take my word for it. Here's what previous clients have to
            say about working with me.
          </p>
        </motion.div>
        <div className="mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="max-w-3xl mx-auto">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage
                        src={testimonial.image}
                        alt={testimonial.name}
                      />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {testimonial.role}
                          </p>
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {testimonial.date}
                        </span>
                      </div>
                      <div className="flex gap-1 mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-[#50C878] text-[#50C878]"
                          />
                        ))}
                      </div>
                      <blockquote className="italic text-gray-700 dark:text-gray-300">
                        "{testimonial.content}"
                      </blockquote>
                      <Button
                        variant="outline"
                        className="w-auto cursor-pointer group"
                        onClick={() => window.open(testimonial.link, "_blank")}
                      >
                        Link
                        <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        {/* <div className="flex items-center justify-center gap-4 mb-12">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsPlaying(!isPlaying)}
            className="cursor-pointer"
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 mr-2" />
            ) : (
              <Play className="w-4 h-4 mr-2" />
            )}
            {isPlaying ? "Pause" : "Play"} Auto-play
          </Button>
          <Button variant="link" className="text-[#50C878] cursor-pointer">
            Add Your Testimonial
          </Button>
        </div> */}
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
                <p className="text-3xl font-bold text-[#50C878] mb-1">
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
