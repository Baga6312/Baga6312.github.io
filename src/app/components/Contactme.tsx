import { Mail, Linkedin, Github, Twitter } from "lucide-react";

export default function Contactme() {
  return (
    <section className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="bg-gray-800 rounded-lg shadow-xl p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Get In Touch
          </h1>
          <p className="text-gray-400 text-center mb-12">
            Feel free to reach out. I'm always open to new opportunities and interesting projects.
          </p>

          {/* Contact Methods */}
          <div className="space-y-6 mb-12">
            {/* Email */}
            <a
              href="mailto:oussema.benayech@gmail.com"
              className="flex items-center space-x-4 p-4 bg-gray-700 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              <Mail className="h-6 w-6 text-blue-400" />
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-gray-300">oussema.benayech@gmail.com</p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/oussema-benayech"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-4 bg-gray-700 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              <Linkedin className="h-6 w-6 text-blue-400" />
              <div>
                <p className="font-semibold">LinkedIn</p>
                <p className="text-gray-300">linkedin.com/in/oussema-benayech</p>
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/oussemabenayech"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition duration-200"
            >
              <Github className="h-6 w-6 text-gray-300" />
              <div>
                <p className="font-semibold">GitHub</p>
                <p className="text-gray-300">github.com/oussemabenayech</p>
              </div>
            </a>

            {/* Twitter */}
            <a
              href="https://twitter.com/oussemabenayech"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-4 bg-gray-700 rounded-lg hover:bg-blue-400 transition duration-200"
            >
              <Twitter className="h-6 w-6 text-blue-300" />
              <div>
                <p className="font-semibold">Twitter</p>
                <p className="text-gray-300">twitter.com/oussemabenayech</p>
              </div>
            </a>
          </div>

          {/* Contact Form */}
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Your Message"
              className="w-full px-4 py-3 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}