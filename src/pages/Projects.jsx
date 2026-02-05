import { motion } from 'framer-motion';
import { useState } from 'react';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'Agentic AI Driven Automated Customer Support System',
      status: 'Ongoing',
      description: 'An agentic AI-based customer support system in which autonomous agents perform intent analysis, decision-making, and workflow execution to resolve user queries. Designed to automate multi-step support actions while minimizing response latency and manual intervention.',
      techStack: ['Python', 'OpenAI API (LLMs)', 'Machine Learning', 'Agentic AI Architecture'],
      link: 'https://github.com/Kritika7078/Customer_Suppor_-Automation',
      linkText: 'GitHub →'
    },
    {
      id: 2,
      title: 'Malicious PDF Detector',
      status: 'Completed',
      description: 'Built an end-to-end machine learning pipeline to detect malicious PDF files using structural features. Applied LDA for dimensionality reduction and trained a Random Forest classifier, achieving 92% accuracy and a 0.93 F1-score on benchmark datasets. Developed a web interface for real-time PDF classification.',
      techStack: ['Machine Learning', 'LDA', 'Random Forest', 'Python'],
      link: 'https://github.com/Kritika7078/PDF_Malware_Detection_ML',
      linkText: 'GitHub →',
      results: [
        '• Accuracy: 92%',
        '• F1-Score: 0.93',
        '• ROC AUC: 0.96'
      ]
    },
    {
      id: 3,
      title: 'Election Voting System',
      status: 'Completed',
      description: 'Designed and implemented a secure, database-backed voting system using SQL. Ensured data integrity for voters, candidates, and election results through efficient schema design and optimized queries.',
      techStack: ['SQL', 'Database Design', 'Query Optimization'],
      link: 'https://github.com/Kritika7078/Election_Voting_System',
      linkText: 'GitHub →'
    },
    {
      id: 4,
      title: 'Food App',
      status: 'Completed',
      description: 'Developed a full-stack food ordering application featuring user authentication, dynamic cart management, and integrated payment processing. Built with React frontend for scalable performance.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Full-Stack'],
      link: 'https://github.com/Kritika7078/Nodejs_RegisterAndLogin',
      linkText: 'Github →'
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.status === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen py-12"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-12"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-text-primary mb-3"
          >
            Projects
          </motion.h1>
          <motion.div
            variants={itemVariants}
            className="h-1 w-20 mx-auto bg-gradient-to-r from-primary to-secondary rounded-full"
          />
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="flex justify-center gap-2 mb-8"
        >
          {['All', 'Completed', 'Ongoing'].map((filterOption) => (
            <button
              key={filterOption}
              onClick={() => setFilter(filterOption)}
              className={`px-4 py-2 text-sm rounded-lg font-semibold transition-all duration-200 ${
                filter === filterOption
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-card-bg text-text-secondary hover:bg-primary/10 hover:text-primary'
              }`}
            >
              {filterOption}
            </button>
          ))}
        </motion.div>

        <motion.div
          key={filter}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="bg-card-bg rounded-2xl p-6 shadow-card border border-transparent hover:border-primary/50 transition-all"
            >
              <div className="flex flex-col sm:flex-row items-start justify-between mb-3">
                <h2 className="text-xl font-bold text-text-primary mb-2 sm:mb-0">{project.title}</h2>
                <div className="flex items-center gap-4">
                  <span 
                    className={`px-3 py-1 text-xs rounded-full font-semibold ${ 
                      project.status === 'Completed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-amber-100 text-amber-800' 
                    }`}
                  >
                    {project.status}
                  </span>
                  <a 
                    href={project.link}
                    className="text-sm font-semibold text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.linkText}
                  </a>
                </div>
              </div>
              <p className="mb-4 text-base text-text-secondary">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="px-3 py-1 text-sm rounded-full font-medium bg-primary/10 text-primary">
                    {tech}
                  </span>
                ))}
              </div>
              {project.results && (
                <div className="rounded-lg p-4 bg-background">
                  <p className="text-md font-semibold text-text-primary mb-2">
                    Results:
                  </p>
                  <ul className="text-base text-text-secondary space-y-1 list-disc list-inside">
                    {project.results.map((result, index) => (
                      <li key={index}>{result.replace('•', '').trim()}</li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
