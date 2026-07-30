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
                Computer Engineering undergraduate at Thapar Institute of Engineering and Technology with interests in Software Engineering, Machine Learning, Deep Learning, Computer Vision and AI Systems. I build scalable software systems, ML pipelines and AI-powered applications, and I am actively seeking Software Engineering internships.
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
                  href="https://drive.google.com/file/d/1IeK6St6D1ex9SA-p_K7CPJPMM79JYg86/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg font-semibold text-white bg-primary hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
                >
                  Resume (SDE)
                </a>
                <a
                  href="https://drive.google.com/file/d/18qpsaxaXCw_az5cckyPhgjj3mK0VFeey/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg font-semibold text-white bg-primary hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
                >
                  Resume (AI)
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
                I am a Computer Engineering undergraduate at Thapar Institute of Engineering and Technology (CGPA 9.77) with a strong interest in Software Engineering and Artificial Intelligence.
              </p>
              <p>
                My experience spans full-stack backend systems, event-driven architectures, computer vision research, deep learning, and machine learning deployment. I enjoy building scalable software systems that combine modern backend engineering with practical AI solutions.
              </p>
              <p>
                I have worked as a Software Engineering Intern at Codsai, an AI Systems Intern at IIT Bhubaneswar, and a Summer Intern at IIT Jodhpur. My work includes AI-powered counselor avatars, transformer-based image restoration, and intelligent automation platforms.
              </p>
              <p>
                Currently, I am looking for Software Engineering internships while continuing to build production-ready AI systems and scalable backend applications.
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
            className="bg-card-bg rounded-2xl p-8 shadow-card"
          >
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-text-primary mb-3">Skills</h2>
              <div className="h-1 w-16 bg-gradient-to-r from-primary to-secondary rounded-full" />
            </div>
            <div className="flex flex-wrap gap-3">
              {
                ['C++', 'Python', 'SQL', 'PyTorch', 'Node.js', 'React', 'Git/GitHub', 'VS Code', 'Colab Workspace', 'Cursor', 'Data Structures and Algorithms', 'Object-Oriented Programming', 'Operating Systems', 'Database Management Systems', 'Machine Learning', 'Deep Learning', 'Computer Vision', 'Conversational AI', 'NumPy', 'Pandas', 'Scikit-Learn', 'Keras', 'Matplotlib', 'Seaborn', 'NLTK', 'OpenCV', 'joblib'].map(skill => (
                  <span key={skill} className="px-4 py-2 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20">{skill}</span>
                ))
              }
            </div>
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
                <span className="mr-4 mt-1 text-primary font-bold">•</span>
                <span>Top 32 team worldwide in the <span className="font-semibold text-primary">CVPR NTIRE 2025 Challenge</span> out of 361+ participating teams.</span>
              </li>
              <li className="flex items-start p-3 rounded-lg transition-colors hover:bg-background">
                <span className="mr-4 mt-1 text-primary font-bold">•</span>
                <span><span className="font-semibold text-primary">Merit-1 and Merit-2 Scholarships</span> totaling ₹8.8L+ for academic excellence (Top 10% of the Computer Engineering department).</span>
              </li>
              <li className="flex items-start p-3 rounded-lg transition-colors hover:bg-background">
                <span className="mr-4 mt-1 text-primary font-bold">•</span>
                <span><span className="font-semibold text-primary">Coordinator</span> of the Visual and Signal Information Processing (VSIP) Group at TIET.</span>
              </li>
              <li className="flex items-start p-3 rounded-lg transition-colors hover:bg-background">
                <span className="mr-4 mt-1 text-primary font-bold">•</span>
                <span>Solved <span className="font-semibold text-primary">290+ LeetCode problems</span> with 600+ submissions and maintained over 200 active coding days.</span>
              </li>
              <li className="flex items-start p-3 rounded-lg bg-primary/5">
                <span className="mr-4 mt-1 font-bold text-secondary">•</span>
                <span>Completed <span className="font-semibold text-primary">Andrew Ng's Machine Learning Specialization</span> (Coursera): Supervised Machine Learning, Advanced Learning Algorithms, Unsupervised Learning, Recommenders & Reinforcement Learning.</span>
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
