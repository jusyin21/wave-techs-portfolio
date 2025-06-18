
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import ProjectCard from '@/components/ProjectCard';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Apps' },
    { id: 'mobile', name: 'Mobile' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'fullstack', name: 'Full Stack' },
  ];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      githubUrl: 'https://github.com/justin/ecommerce-platform',
      liveUrl: 'https://ecommerce-demo.vercel.app',
      category: 'fullstack',
      featured: true,
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A productivity app built with React and Firebase. Users can create, organize, and track their tasks with real-time updates.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      technologies: ['React', 'Firebase', 'Material-UI', 'TypeScript'],
      githubUrl: 'https://github.com/justin/task-manager',
      liveUrl: 'https://task-manager-demo.vercel.app',
      category: 'web',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather application that provides current conditions and forecasts using OpenWeather API.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'OpenWeather API'],
      githubUrl: 'https://github.com/justin/weather-dashboard',
      liveUrl: 'https://weather-dashboard-demo.vercel.app',
      category: 'frontend',
    },
    {
      id: 4,
      title: 'Social Media Dashboard',
      description: 'A comprehensive dashboard for managing multiple social media accounts with analytics and scheduling features.',
      image: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?w=600&h=400&fit=crop',
      technologies: ['React', 'Express.js', 'PostgreSQL', 'Chart.js'],
      githubUrl: 'https://github.com/justin/social-dashboard',
      liveUrl: 'https://social-dashboard-demo.vercel.app',
      category: 'fullstack',
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and Framer Motion for smooth animations.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'Vercel'],
      githubUrl: 'https://github.com/justin/portfolio',
      liveUrl: 'https://justin-portfolio.vercel.app',
      category: 'frontend',
    },
    {
      id: 6,
      title: 'Chat Application',
      description: 'Real-time chat application with user authentication, group chats, and file sharing capabilities.',
      image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&h=400&fit=crop',
      technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
      githubUrl: 'https://github.com/justin/chat-app',
      liveUrl: 'https://chat-app-demo.vercel.app',
      category: 'fullstack',
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen pt-20">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of projects I've worked on, showcasing different technologies and approaches
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          variants={itemVariants} 
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setFilter(category.id)}
              variant={filter === category.id ? "default" : "outline"}
              className={filter === category.id ? "bg-primary hover:bg-primary/90" : ""}
            >
              {category.name}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          key={filter} // Force re-render on filter change
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              custom={index}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div 
            variants={itemVariants}
            className="text-center py-12"
          >
            <p className="text-muted-foreground text-lg">
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Projects;
