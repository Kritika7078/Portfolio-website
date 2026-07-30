import { motion } from 'framer-motion';
import { useState } from 'react';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'AI Ticket Automation Platform',
      status: 'Completed',
      description: 'Architected an event-driven backend using Node.js, Inngest and MongoDB with JWT authentication and role-based access control for asynchronous ticket classification, moderator assignment and multi-channel notifications. Built a Qdrant-powered retrieval pipeline with calibrated similarity thresholds (0.80 duplicate reuse and 0.76 RAG generation), reducing duplicate-response latency by 15.5 seconds through intelligent historical response reuse.',
      techStack: ['Node.js', 'MongoDB', 'JWT', 'Inngest', 'Qdrant', 'RAG', 'React'],
      link: 'https://github.com/customer-support-automation/Customer_Support_-Automation',
      linkText: 'GitHub →',
      liveDemo: 'https://customer-support-automation-six.vercel.app/'
    },
    {
      id: 2,
      title: 'Malicious PDF Detection',
      status: 'Completed',
      description: 'Developed a Flask-based malware detection backend with PyPDF2 feature extraction, Scikit-learn preprocessing pipelines and real-time inference. Optimized LightGBM, XGBoost and Random Forest models using feature engineering, SHAP analysis and five-fold cross-validation, achieving 99.45% Accuracy and 0.9993 AUC.',
      techStack: ['Flask', 'Python', 'LightGBM', 'XGBoost', 'Random Forest', 'SHAP', 'React'],
      link: 'https://github.com/Kritika7078/PDF_Malware_Detection_ML',
      linkText: 'GitHub →',
      liveDemo: 'https://pdf-malware-detection-ml.vercel.app/',
      results: [
        '• Accuracy: 99.45%',
        '• AUC: 0.9993'
      ]
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
                  <div className="flex items-center gap-2">
                    <a 
                      href={project.link}
                      className="text-sm font-semibold text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.linkText}
                    </a>
                    {project.liveDemo && (
                      <a 
                        href={project.liveDemo}
                        className="text-sm font-semibold text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo →
                      </a>
                    )}
                  </div>
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
