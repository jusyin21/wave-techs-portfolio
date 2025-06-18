
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Email',
      href: 'mailto:justinositu0@gmail.com',
      icon: Mail,
    },
    {
      name: 'GitHub',
      href: 'https://github.com/justin',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/justin',
      icon: Linkedin,
    },
  ];

  return (
    <footer className="bg-secondary text-soft-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">W</span>
              </div>
              <span className="text-xl font-bold">Wave Techs</span>
            </div>
            <p className="text-gray-300">
              Building digital experiences that make waves
            </p>
          </div>

          <div className="flex items-center space-x-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 bg-white/10 rounded-full hover:bg-accent/20 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <link.icon className="w-5 h-5" />
                <span className="sr-only">{link.name}</span>
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400">
            © {currentYear} Wave Techs. Built with ❤️ by Justin
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
