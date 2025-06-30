'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, ExternalLink, Code, Palette, Zap, Heart, Star, GitFork } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const particles = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 4 + 1,
  duration: Math.random() * 20 + 10,
}));

const skills = [
  { name: 'JavaScript', level: 95, color: 'from-yellow-500 to-yellow-300' },
  { name: 'Python', level: 90, color: 'from-blue-600 to-blue-400' },
  { name: 'React', level: 88, color: 'from-cyan-500 to-blue-500' },
  { name: 'TypeScript', level: 85, color: 'from-blue-600 to-blue-400' },
  { name: 'Next.js', level: 82, color: 'from-gray-800 to-gray-600' },
  { name: 'Node.js', level: 80, color: 'from-green-600 to-green-400' },
  { name: 'Flutter', level: 75, color: 'from-blue-400 to-cyan-400' },
  { name: 'Firebase', level: 78, color: 'from-orange-500 to-yellow-500' },
];

const projects = [
  {
    title: 'Expense Tracker App',
    description: 'A comprehensive expense tracking application built with modern web technologies for personal finance management',
    tech: ['React', 'JavaScript', 'CSS', 'Local Storage'],
    image: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: 'https://github.com/Baga6312/Expense-Tracker-App',
    github: 'https://github.com/Baga6312/Expense-Tracker-App',
    stars: 2,
    language: 'JavaScript'
  },
  {
    title: 'Portfolio Website',
    description: 'A responsive and modern portfolio website showcasing projects and skills with clean design',
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: 'https://github.com/Baga6312/Portfolio',
    github: 'https://github.com/Baga6312/Portfolio',
    stars: 1,
    language: 'HTML'
  },
  {
    title: 'Web Development Projects',
    description: 'Collection of various web development projects demonstrating different technologies and approaches',
    tech: ['HTML', 'CSS', 'JavaScript', 'Various Frameworks'],
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: 'https://github.com/Baga6312/Web-Development',
    github: 'https://github.com/Baga6312/Web-Development',
    stars: 0,
    language: 'HTML'
  },
  {
    title: 'Python Projects Collection',
    description: 'Various Python projects showcasing different aspects of the language and its applications',
    tech: ['Python', 'Data Structures', 'Algorithms', 'Automation'],
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: 'https://github.com/Baga6312/Python-Projects',
    github: 'https://github.com/Baga6312/Python-Projects',
    stars: 1,
    language: 'Python'
  },
  {
    title: 'Mobile App Development',
    description: 'Mobile application projects focusing on cross-platform development and user experience',
    tech: ['Flutter', 'Dart', 'Mobile UI', 'Cross-platform'],
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: 'https://github.com/Baga6312',
    github: 'https://github.com/Baga6312',
    stars: 0,
    language: 'Dart'
  },
  {
    title: 'Data Science & Analytics',
    description: 'Data analysis and visualization projects using Python and modern data science libraries',
    tech: ['Python', 'Pandas', 'NumPy', 'Data Visualization'],
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: 'https://github.com/Baga6312',
    github: 'https://github.com/Baga6312',
    stars: 0,
    language: 'Python'
  },
];

function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function Hero() {
  const [text, setText] = useState('');
  const fullText = "Full-Stack Developer & Software Engineer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <FloatingParticles />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Baga
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 min-h-[2rem]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {text}
            <span className="animate-pulse">|</span>
          </motion.p>
          
          <motion.p 
            className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Passionate about creating innovative solutions through code. Specializing in web development, 
            mobile applications, and modern software engineering practices.
          </motion.p>
          
          <motion.div 
            className="flex gap-4 justify-center flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Button 
              size="lg" 
              onClick={scrollToProjects}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToContact}
              className="border-gray-400 text-gray-300 hover:bg-gray-800 transform hover:scale-105 transition-all duration-200"
            >
              Get In Touch
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-6 h-6 text-gray-400" />
      </motion.div>
    </section>
  );
}

function About() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A dedicated software engineer with a passion for building scalable applications 
            and exploring cutting-edge technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              I&apos;m a full-stack developer who loves turning complex problems into elegant, 
              user-friendly solutions. My journey in software development spans across web 
              technologies, mobile app development, and data science.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With expertise in JavaScript, Python, and modern frameworks like React and Flutter, 
              I enjoy building applications that make a real impact. I&apos;m always eager to learn 
              new technologies and contribute to open-source projects.
            </p>
            
            <div className="flex gap-4 pt-4">
              <Button 
                variant="outline" 
                size="sm" 
                className="flex items-center gap-2"
                onClick={() => window.open('https://github.com/Baga6312', '_blank')}
              >
                <Github className="w-4 h-4" />
                GitHub
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-800">{skill.name}</span>
                  <span className="text-sm text-gray-600">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work, from web applications to mobile development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 group overflow-hidden h-full">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    <div className="flex items-center gap-1 bg-black/50 rounded-full px-2 py-1">
                      <Star className="w-3 h-3 text-yellow-400" />
                      <span className="text-xs text-white">{project.stars}</span>
                    </div>
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"></div>
                  </div>
                </div>
                <CardContent className="p-6 space-y-4 flex-1 flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex items-center gap-2 text-xs flex-1"
                      onClick={() => window.open(project.link, '_blank')}
                    >
                      <ExternalLink className="w-3 h-3" />
                      View Project
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex items-center gap-2 text-xs flex-1"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-3 h-3" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button 
            variant="outline" 
            size="lg"
            className="border-gray-400 text-gray-300 hover:bg-gray-800"
            onClick={() => window.open('https://github.com/Baga6312', '_blank')}
          >
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a project in mind? I&apos;d love to hear about it and discuss how we can bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">baga.dev@email.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Response Time</h3>
                  <p className="text-gray-600">Usually within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Availability</h3>
                  <p className="text-gray-600">Open for new projects</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="p-6">
              <CardContent className="space-y-4 p-0">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      First Name
                    </label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Last Name
                    </label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Email
                  </label>
                  <Input type="email" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell me about your project..."
                    className="min-h-[120px]"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Baga
            </h3>
            <p className="text-gray-400 mt-2">Full-Stack Developer & Software Engineer</p>
          </div>
          
          <div className="flex gap-4">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-gray-400 hover:text-white"
              onClick={() => window.open('https://github.com/Baga6312', '_blank')}
            >
              <Github className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
              <Mail className="w-5 h-5" />
            </Button>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Baga. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}