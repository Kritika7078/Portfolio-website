import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBriefcase, FaFlask, FaUsers, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { GoProject } from 'react-icons/go';

const Home = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const bentoItems = [
    {
      title: "Projects",
      link: "/projects",
      icon: <GoProject className="text-2xl text-indigo-400" />,
      description: "End-to-end deep learning and machine learning pipelines, relational database systems, and full-stack web applications with a focus on scalability and clean architecture.",
      tags: ["Machine Learning", "Deep Learning", "SQL", "React"],
      colSpan: "md:col-span-1",
      bgColor: "bg-gradient-to-br from-indigo-50 via-white to-blue-50",
    },
    {
      title: "Experience",
      link: "/experience",
      icon: <FaBriefcase className="text-2xl text-purple-400" />,
      description: "Research internships at premier institutions, working on Vision Transformer architectures and deep learning systems.",
      tags: ["IIT Bhubaneswar", "IIT Jodhpur"],
      colSpan: "md:col-span-1",
      bgColor: "bg-gradient-to-br from-purple-50 via-white to-fuchsia-50",
    },
    {
      title: "Research & Publications",
      link: "/research",
      icon: <FaFlask className="text-2xl text-sky-400" />,
      description: "Co-author of a paper published at the CVPR 2025 Workshop as part of the NTIRE Challenge on Day and Night Raindrop Removal. Contributed to the design and evaluation of Transformer-based image restoration models, achieving top-tier performance among international teams.",
      tags: ["CVPR 2025 Workshop"],
      colSpan: "md:col-span-2",
      bgColor: "bg-gradient-to-br from-sky-50 via-white to-cyan-50",
      isPublication: true,
    },
    {
      title: "Leadership",
      link: "/leadership",
      icon: <FaUsers className="text-2xl text-rose-400" />,
      description: "Leadership roles in VSIP, contributing to coordination and technical initiatives.",
      tags: ["VSIP"],
      colSpan: "md:col-span-1",
      bgColor: "bg-gradient-to-br from-rose-50 via-white to-pink-50",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen py-12"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <motion.div variants={itemVariants}>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6 leading-tight">
                  Computer Engineering Undergraduate<br />
                  Aspiring Software Engineer 
                </h1>
              </motion.div>
              
              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl text-text-secondary mb-8"
              >
                My work focuses on building scalable ML pipelines and Transformer-based deep learning models. I am actively seeking internship opportunities in software engineering roles.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap items-center gap-6 mb-10"
              >
                <a href="https://github.com/Kritika7078" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-text-secondary hover:text-primary transition-colors">
                  <FaGithub className="text-2xl" />
                  <span className="font-medium group-hover:underline">GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/kritika7078/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-text-secondary hover:text-primary transition-colors">
                  <FaLinkedin className="text-2xl" />
                  <span className="font-medium group-hover:underline">LinkedIn</span>
                </a>
                <a href="mailto:kkritika_be23@thapar.edu" className="group flex items-center gap-2 text-text-secondary hover:text-primary transition-colors">
                  <FaEnvelope className="text-2xl" />
                  <span className="font-medium group-hover:underline">Email</span>
                </a>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="https://drive.google.com/file/d/1RTS361tSZ4hJmCPUhw39dmoPYAwUcZA0/view?usp=sharing"
                  download
                  className="px-6 py-3 rounded-lg font-semibold text-white bg-primary hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
                >
                  Download Resume (PDF)
                </a>
                <Link
                  to="/projects"
                  className="px-6 py-3 rounded-lg font-semibold text-primary bg-transparent border border-primary hover:bg-primary hover:text-white transition-all"
                >
                  View Projects
                </Link>
              </motion.div>
            </div>

            {/* Right Column - Profile Photo */}
            <div className="lg:col-span-5 order-1 lg:order-2 flex items-center justify-center lg:justify-end">
              <motion.div 
                variants={itemVariants}
                className="relative"
              >
                <div className="relative w-72 h-72 md:w-80 md:h-80">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary to-secondary p-1">
                    <div className="w-full h-full rounded-3xl overflow-hidden bg-background">
                      <img 
                        src="/profile.jpg" 
                        alt="Arsh Garg - Portfolio" 
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  </div>
                  <div 
                    className="absolute inset-0 rounded-3xl -z-10 bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* About Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16 max-w-4xl mx-auto text-center"
        >
          <motion.div
            variants={itemVariants}
            className="bg-card-bg rounded-2xl p-8 shadow-card"
          >
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-text-primary tracking-wide mb-3">About Me</h2>
              <div className="h-1 w-16 mx-auto bg-gradient-to-r from-primary to-secondary rounded-full" />
            </div>
            <div className="space-y-4 text-base text-text-secondary leading-relaxed text-left">
              <p>
                I am a Computer Engineering undergraduate with a strong foundation in full-stack development and applied machine learning. My work focuses on building scalable web systems and developing deep learning models for real-world computer vision problems.
              </p>
              <p>
                I have research experience working with Vision Transformer architectures for image restoration, co-authoring a paper published at the CVPR 2025 Workshop. Through internships at IIT Bhubaneswar and IIT Jodhpur, I have gained hands-on experience designing and evaluating AI models at scale.
              </p>
              <p>
                I am currently seeking internship or early-career opportunities where I can contribute to impactful projects in software engineering, machine learning, or applied AI.
              </p>
            </div>
          </motion.div>
        </motion.div>


        {/* Sections Wrapper */}
        <div className="space-y-16">
          {/* Bento Grid Layout */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {bentoItems.map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className={`${item.colSpan}`}
              >
                <Link
                  to={item.link}
                  className="group block w-full h-full"
                >
                  <div className={`relative w-full h-full p-8 bg-white/40 backdrop-blur-xl border border-white/20 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 ${item.bgColor}`}>
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <div className="flex items-center gap-4 mb-3">
                          <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center shadow-inner">
                            {item.icon}
                          </div>
                          <h2 className="text-2xl font-bold text-text-primary">{item.title}</h2>
                        </div>
                        <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full" />
                      </div>
                      <span className="text-3xl text-gray-400 transition-transform duration-300 group-hover:translate-x-2 group-hover:text-primary">→</span>
                    </div>

                    {item.isPublication ? (
                      <div className="p-4 rounded-lg bg-white/50">
                        <h3 className="font-semibold text-text-primary mb-1">{item.tags[0]}</h3>
                        <p className="text-base text-text-secondary leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    ) : (
                      <>
                        <p className="text-base text-text-secondary mb-6 leading-relaxed">
                          {item.description}
                        </p>
                        <div className="flex flex-wrap gap-3">
                          {item.tags.map((tag, i) => (
                            <span key={i} className="px-4 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-indigo-800 shadow-sm">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-text-primary mb-3">Skills</h2>
              <div className="h-1 w-16 mx-auto bg-gradient-to-r from-primary to-secondary rounded-full" />
            </div>
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {
                [
                  {
                    category: 'Languages',
                    skills: ['C', 'C++', 'Python', 'SQL', 'React.js', 'HTML', 'CSS']
                  },
                  {
                    category: 'Frontend',
                    skills: ['React', 'Tailwind CSS']
                  },
                  {
                    category: 'Backend & DB',
                    skills: ['Node.js', 'MySQL']
                  },
                  {
                    category: 'ML & DL',
                    skills: ['Machine Learning', 'Deep Learning', 'Transformers', 'Image Restoration']
                  },
                  {
                    category: 'Libraries',
                    skills: ['NumPy', 'Pandas', 'OpenCV', 'Matplotlib', 'Tensorflow']
                  },
                  {
                    category: 'Tools',
                    skills: ['Git/GitHub', 'Linux', 'Google Colab', 'Anaconda', 'VS Code', 'MATLAB', 'RStudio']
                  }
                ].map(skillGroup => (
                  <motion.div
                    key={skillGroup.category}
                    variants={cardVariants}
                    className="bg-card-bg rounded-2xl p-6 shadow-card border border-border-color hover:shadow-card-hover transition-shadow duration-300"
                  >
                    <h3 className="font-bold text-lg text-text-primary mb-4">{skillGroup.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.skills.map(skill => (
                        <span key={skill} className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20">{skill}</span>
                      ))}
                    </div>
                  </motion.div>
                ))
              }
            </motion.div>
          </motion.div>

          {/* Achievements Card */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-card-bg rounded-2xl p-8 shadow-card"
          >
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-text-primary mb-3">Achievements</h2>
              <div className="h-1 w-16 bg-gradient-to-r from-primary to-secondary rounded-full" />
            </div>
            <ul className="space-y-4 text-base text-text-secondary">
              <li className="flex items-start p-3 rounded-lg transition-colors hover:bg-background">
                <span className="mr-4 mt-1 text-primary font-bold">✓</span>
                <span>Selected among the <span className="font-semibold text-primary">Top 32</span> teams out of <span className="font-semibold text-primary">361+</span> participants in the <span className="font-semibold text-primary">CVPR NTIRE 2025</span> Challenge.</span>
              </li>
              <li className="flex items-start p-3 rounded-lg transition-colors hover:bg-background">
                <span className="mr-4 mt-1 text-primary font-bold">✓</span>
                <span>Co-author of a paper published at the <span className="font-semibold text-primary">CVPR 2025 Workshop</span>.</span>
              </li>
              <li className="flex items-start p-3 rounded-lg transition-colors hover:bg-background">
                <span className="mr-4 mt-1 text-primary font-bold">✓</span>
                <span>Recognized as a National Semi-Finalist in <span className="font-semibold text-primary">Flipkart GRiD 4.0</span> (2025).</span>
              </li>
              <li className="flex items-start p-3 rounded-lg transition-colors hover:bg-background">
                <span className="mr-4 mt-1 text-primary font-bold">✓</span>
                <span>Awarded merit-based scholarship at Thapar Institute of Engineering and Technology for academic excellence.</span>
              </li>
              <li className="flex items-start p-3 rounded-lg bg-primary/5">
                <span className="mr-4 mt-1 font-bold text-secondary">✓</span>
                <span>Formally recognized for technical contributions to Vision Science and Image Processing (VSIP) initiatives.</span>
              </li>
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.div
              variants={itemVariants}
              className="relative bg-card-bg rounded-3xl p-8 shadow-lg max-w-2xl mx-auto border border-border-color"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <FaEnvelope className="text-2xl text-primary" />
                <h2 className="text-3xl font-bold text-text-primary tracking-wide">Get in Touch</h2>
              </div>
              <p className="text-md text-text-secondary mb-6 max-w-md mx-auto">
                I'm currently looking for new opportunities. Feel free to reach out if you have any questions or just want to connect!
              </p>
              <div className="flex justify-center items-center gap-6">
                <a href="mailto:kkritika_be23@thapar.edu" className="group flex items-center gap-2 text-text-secondary hover:text-primary transition-colors">
                  <FaEnvelope className="text-2xl" />
                  <span className="font-medium group-hover:underline">Email</span>
                </a>
                <a href="https://www.linkedin.com/in/kritika7078/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-text-secondary hover:text-primary transition-colors">
                  <FaLinkedin className="text-2xl" />
                  <span className="font-medium group-hover:underline">LinkedIn</span>
                </a>
                <a href="https://github.com/Kritika7078" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-text-secondary hover:text-primary transition-colors">
                  <FaGithub className="text-2xl" />
                  <span className="font-medium group-hover:underline">GitHub</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
