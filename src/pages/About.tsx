
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const skills = [
    'React', 'TypeScript', 'Node.js', 'Python', 'JavaScript',
    'Tailwind CSS', 'MongoDB', 'PostgreSQL', 'Express.js', 'Next.js',
    'GraphQL', 'Docker', 'AWS', 'Git', 'Figma'
  ];

  const experience = [
    {
      title: 'Full Stack Developer',
      company: 'Wave Techs',
      period: '2022 - Present',
      description: 'Building modern web applications with React, Node.js, and cloud technologies.',
    },
    {
      title: 'Frontend Developer',
      company: 'Tech Solutions',
      period: '2021 - 2022',
      description: 'Developed responsive user interfaces and improved user experience.',
    },
    {
      title: 'Junior Developer',
      company: 'StartupXYZ',
      period: '2020 - 2021',
      description: 'Learned modern web development practices and contributed to team projects.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        {/* Hero Section */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate developer with a love for creating digital solutions that make a difference
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Bio Section */}
          <motion.div variants={itemVariants}>
            <Card className="p-8 h-full">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold mb-6">My Story</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Hi! I'm Justin, a passionate full-stack developer based in Kenya. 
                    I founded Wave Techs with a mission to create digital experiences 
                    that not only look great but also solve real-world problems.
                  </p>
                  <p>
                    With over 3 years of experience in web development, I specialize 
                    in building modern, scalable applications using cutting-edge 
                    technologies. I believe in writing clean, maintainable code and 
                    creating intuitive user experiences.
                  </p>
                  <p>
                    When I'm not coding, you can find me exploring new technologies, 
                    contributing to open-source projects, or mentoring aspiring developers 
                    in my community.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Profile Image Placeholder */}
          <motion.div variants={itemVariants}>
            <Card className="p-8 h-full">
              <CardContent className="p-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                  <div className="w-48 h-48 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">J</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Badge 
                  variant="secondary" 
                  className="px-4 py-2 text-sm font-medium bg-accent/10 text-accent hover:bg-accent/20 transition-colors"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl font-bold text-center mb-8">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <Badge variant="outline" className="self-start md:self-center mt-2 md:mt-0">
                        {exp.period}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
