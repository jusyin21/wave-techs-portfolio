
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Smartphone, 
  Palette, 
  Server, 
  Search, 
  Headphones,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies like React, Next.js, and Node.js.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Cross-browser Compatible'],
      price: 'From $200',
      popular: false,
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps for iOS and Android using React Native.',
      features: ['Cross-platform', 'Native Performance', 'App Store Ready', 'Push Notifications'],
      price: 'From $300',
      popular: true,
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered design solutions that create engaging and intuitive digital experiences.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      price: 'From $150',
      popular: false,
    },
    {
      icon: Server,
      title: 'Backend Development',
      description: 'Scalable server-side solutions with databases, APIs, and cloud infrastructure.',
      features: ['RESTful APIs', 'Database Design', 'Cloud Deployment', 'Security Implementation'],
      price: 'From $250',
      popular: false,
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Improve your website\'s visibility and ranking on search engines.',
      features: ['Technical SEO', 'Content Optimization', 'Performance Tuning', 'Analytics Setup'],
      price: 'From $100',
      popular: false,
    },
    {
      icon: Headphones,
      title: 'Consulting & Support',
      description: 'Technical consulting, code reviews, and ongoing maintenance for your projects.',
      features: ['Code Review', 'Performance Audit', 'Technical Consulting', '24/7 Support'],
      price: 'From $20/hr',
      popular: false,
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We discuss your project requirements and goals in detail.',
    },
    {
      number: '02',
      title: 'Planning',
      description: 'I create a detailed project plan with timelines and milestones.',
    },
    {
      number: '03',
      title: 'Development',
      description: 'Building your solution with regular updates and feedback.',
    },
    {
      number: '04',
      title: 'Launch',
      description: 'Testing, deployment, and ongoing support for your project.',
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
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional web development services to bring your ideas to life
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="relative"
            >
              <Card className={`h-full p-6 transition-all duration-300 hover:shadow-xl ${
                service.popular ? 'ring-2 ring-accent' : ''
              }`}>
                {service.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground">
                    Most Popular
                  </Badge>
                )}
                
                <CardHeader className="p-0 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="p-0">
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">
                      {service.price}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Process Section */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How I <span className="gradient-text">Work</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              My proven process ensures your project's success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={itemVariants}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-white">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          variants={itemVariants}
          className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your ideas and turn them into reality. 
            Get in touch for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8"
            >
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"          
              className="px-8"
              asChild
            >
              <a href="https://wa.me/254114035013" target="_blank" rel="noopener noreferrer">
                WhatsApp Chat
              </a>
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;
