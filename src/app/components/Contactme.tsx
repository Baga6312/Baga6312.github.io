import { Mail, Linkedin, Github, Twitter } from "lucide-react";

export default function Contactme() {
  return (
    <>
      {/* Contact Section */}
      <section className="h-screen bg-gray-900 text-white flex items-center justify-center snap-start">
        <div className="max-w-md w-full px-4">
          <h1 className="text-3xl font-bold text-center mb-4">Get In Touch</h1>
          <p className="text-gray-400 text-center mb-6 text-sm">
            Send me a message and I&apos;ll get back to you soon.
          </p>

          {/* Contact Form */}
          <form className="space-y-3 mb-8">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-3 py-2.5 bg-gray-800 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-3 py-2.5 bg-gray-800 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-3 py-2.5 bg-gray-800 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            ></textarea>
            <button
              type="submit"
              className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-sm transition duration-200"
            >
              Send Message
            </button>
          </form>

          {/* Social Icons */}
          <div className="flex justify-center gap-6">
            <a
              href="mailto:oussema.benayech@gmail.com"
              className="text-gray-400 hover:text-blue-400 transition duration-200"
              title="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/oussema-benayech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition duration-200"
              title="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/oussemabenayech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300 transition duration-200"
              title="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://twitter.com/oussemabenayech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition duration-200"
              title="Twitter"
            >
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 text-center py-4 text-xs border-t border-gray-800">
        <p>&copy; 2025 Oussema Ben Ayech. All rights reserved.</p>
        <p className="text-gray-600 text-xs mt-1">Designed & Built with React & Next.js</p>
      </footer>
    </>
  );
}