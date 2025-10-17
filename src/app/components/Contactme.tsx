import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import { useState } from "react";

export default function Contactme() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
      {/* Contact Section */}
        <section className="h-screen bg-background text-white flex items-center justify-center snap-start m-8 pt-8">
        <div className="max-w-2xl w-full px-4">
          <h1 className="text-5xl font-bold text-center mb-6">Get In Touch</h1>
          <p className="text-gray-400 text-center mb-8 text-lg">
            Send me a message and I&apos;ll get back to you soon.
          </p>
          {/* Contact Form */}
          <div className="space-y-5 mb-12">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            className="w-full px-5 py-4 bg-secondary rounded-lg text-white placeholder-gray-500 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-5 py-4 bg-gray-800 rounded-lg text-white placeholder-gray-500 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-5 py-4 bg-gray-800 rounded-lg text-white placeholder-gray-500 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            ></textarea>
            <button
              onClick={handleSubmit}
              className="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-lg transition duration-200"
            >
              Send Message
            </button>
          </div>
          {/* Social Icons */}
          <div className="flex justify-center gap-5 mt-[-20px]">
            <a
              href="mailto:oussema.benayech@gmail.com"
              className="text-gray-400 hover:text-blue-400 transition duration-200"
              title="Email"
            >
              <Mail className="h-8 w-8" />
            </a>
            <a
              href="https://linkedin.com/in/oussema-benayech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition duration-200"
              title="LinkedIn"
            >
              <Linkedin className="h-8 w-8" />
            </a>
            <a
              href="https://github.com/oussemabenayech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300 transition duration-200"
              title="GitHub"
            >
              <Github className="h-8 w-8" />
            </a>
            <a
              href="https://twitter.com/oussemabenayech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition duration-200"
              title="Twitter"
            >
              <Twitter className="h-8 w-8" />
            </a>
          </div>
        </div>
      </section>
      {/* Footer */}
        <footer className="bg-secondary text-gray-400 text-center py-6 text-sm border-t border-gray-800">
        <p>&copy; 2025 Oussema Ben Ayech. All rights reserved.</p>
        <p className="text-gray-600 text-sm mt-2">Designed & Built with React & Next.js</p>
      </footer>
    </>
  );
}