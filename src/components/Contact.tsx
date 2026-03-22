import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Send,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };
  return (
    <section
      id="contact"
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
            Get In Touch
          </p>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
            Let's Work Together
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            Ready to bring your ideas to life? I'm here to help you build
            something amazing.
          </p>
        </motion.div>
        <div className="grid gap-8 mb-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <h3 className="mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                Contact Information
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:desirablecoder@gmail.com"
                  className="flex items-start gap-4 p-4 transition-colors bg-white rounded-lg cursor-pointer dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 group"
                >
                  <div className="p-2 rounded-full bg-[#50C878]/10 group-hover:bg-[#50C878]/20 transition-colors">
                    <Mail className="w-5 h-5 text-[#50C878]" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      Email
                    </p>
                    <p className="text-sm font-bold text-gray-600 dark:text-gray-400">
                      desirablecoder@gmail.com
                    </p>
                    <p className="mt-1 text-xs text-gray-500 text dark:text-gray-500">
                      Send me an email anytime
                    </p>
                  </div>
                </a>
                <a
                  href="tel:86052347##"
                  className="flex items-start gap-4 p-4 transition-colors bg-white rounded-lg cursor-pointer dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 group"
                >
                  <div className="p-2 rounded-full bg-[#50C878]/10 group-hover:bg-[#50C878]/20 transition-colors">
                    <Phone className="w-5 h-5 text-[#50C878]" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      Phone
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      91-xxxxx-xxxxx
                    </p>
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">
                      Not Available for calls
                    </p>
                  </div>
                </a>
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg dark:bg-gray-800">
                  <div className="p-2 rounded-full bg-[#50C878]/10">
                    <MapPin className="w-5 h-5 text-[#50C878]" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      Location
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Pudukkottai, Tamilnadu
                    </p>
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">
                      Open to remote opportunities
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="mb-3 font-semibold text-gray-900 dark:text-white">
                Follow Me
              </h4>
              <div className="flex gap-3">
                <a
                  href="https://github.com/desirablecoder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white dark:bg-gray-800 hover:bg-[#50C878]/10 dark:hover:bg-[#50C878]/20 transition-colors cursor-pointer"
                >
                  <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </a>
                <a
                  href="https://www.linkedin.com/in/desirablecoder/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white dark:bg-gray-800 hover:bg-[#50C878]/10 dark:hover:bg-[#50C878]/20 transition-colors cursor-pointer"
                >
                  <Linkedin className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </a>
                <a
                  href="https://twitter.com/desirablecoder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white dark:bg-gray-800 hover:bg-[#50C878]/10 dark:hover:bg-[#50C878]/20 transition-colors cursor-pointer"
                >
                  <Twitter className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </a>
                <a
                  href="mailto:desirablecoder@gmail.com"
                  className="p-3 rounded-full bg-white dark:bg-gray-800 hover:bg-[#50C878]/10 dark:hover:bg-[#50C878]/20 transition-colors cursor-pointer"
                >
                  <Mail className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </a>
              </div>
            </div>
            <Card className="bg-linear-to-br from-[#50C878]/5 to-gray-50/5 border-[#50C878]/20">
              <CardContent className="p-6">
                <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">
                  Available for work
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  I'm currently accepting new projects and would love to hear
                  about yours.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Send me a message
                </h3>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" placeholder="John Doe" required />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Project Inquiry" />
                  </div>
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project..."
                      rows={5}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-[#50C878] hover:bg-[#50C878]/90 text-white cursor-pointer"
                  >
                    Send Message
                    <Send className="w-4 h-4 ml-2" />
                  </Button>
                  <p className="text-xs text-center text-gray-500 dark:text-gray-400">
                    Usually responds within 24 hours • Free consultation
                    available
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
