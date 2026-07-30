import { motion } from 'framer-motion';

const Experience = () => {
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
            Experience
          </motion.h1>
          <motion.div
            variants={itemVariants}
            className="h-1 w-20 mx-auto bg-gradient-to-r from-primary to-secondary rounded-full"
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Codsai Internship */}
          <motion.div
            variants={itemVariants}
            className="bg-card-bg rounded-2xl p-6 shadow-card border border-transparent hover:border-primary/50 transition-all"
          >
            <div className="flex flex-col sm:flex-row items-start justify-between mb-4">
              <div className="flex-1 mb-4 sm:mb-0">
                <h2 className="text-xl font-bold text-text-primary mb-1">Summer Software Engineering Intern</h2>
                <p className="text-md text-text-secondary mb-1">Codsai (Centre of Excellence in Data Science and AI)</p>
                <p className="text-sm text-gray-500">June 2026 – July 2026</p>
              </div>
            </div>
            <ul className="space-y-2 text-base text-text-secondary list-disc list-inside">
              <li>Developed an AI-generated counselor avatar pipeline using LivePortrait and MuseTalk with realistic lip-synced facial animation.</li>
              <li>Architected a FastAPI backend with WebSocket-based real-time video/audio streaming and a four-state session manager (Idle, Listening, Processing, Speaking) to coordinate ASR, NLU and avatar generation.</li>
            </ul>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 text-sm rounded-full font-medium bg-secondary/10 text-secondary">FastAPI</span>
              <span className="px-3 py-1 text-sm rounded-full font-medium bg-secondary/10 text-secondary">Python</span>
              <span className="px-3 py-1 text-sm rounded-full font-medium bg-secondary/10 text-secondary">WebSockets</span>
              <span className="px-3 py-1 text-sm rounded-full font-medium bg-secondary/10 text-secondary">LivePortrait</span>
              <span className="px-3 py-1 text-sm rounded-full font-medium bg-secondary/10 text-secondary">MuseTalk</span>
              <span className="px-3 py-1 text-sm rounded-full font-medium bg-secondary/10 text-secondary">Computer Vision</span>
              <span className="px-3 py-1 text-sm rounded-full font-medium bg-secondary/10 text-secondary">AI Systems</span>
            </div>
          </motion.div>

          {/* IIT Bhubaneswar Internship */}
          <motion.div
            variants={itemVariants}
            className="bg-card-bg rounded-2xl p-6 shadow-card border border-transparent hover:border-primary/50 transition-all"
          >
            <div className="flex flex-col sm:flex-row items-start justify-between mb-4">
              <div className="flex-1 mb-4 sm:mb-0">
                <h2 className="text-xl font-bold text-text-primary mb-1">Intern (AI Systems)</h2>
                <p className="text-md text-text-secondary mb-1">IIT Bhubaneswar</p>
                <p className="text-sm text-text-secondary mb-2">School of Electrical and Computer Sciences</p>
                <p className="text-sm text-gray-500">Aug 2025 – Oct 2025</p>
              </div>
            </div>
            <ul className="space-y-2 text-base text-text-secondary list-disc list-inside">
              <li>Designed WAP-Block, a lightweight Transformer attention module for image de-raining.</li>
              <li>Improved baseline performance by 2.3 dB to achieve 25.46 PSNR and 0.841 SSIM.</li>
              <li>Published paper: "Weak Attention Preservation Block in Vision Transformer for Single Image De-raining" accepted at NCVPRIG 2026.</li>
            </ul>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 text-sm rounded-full font-medium bg-secondary/10 text-secondary">Vision Transformer</span>
              <span className="px-3 py-1 text-sm rounded-full font-medium bg-secondary/10 text-secondary">Computer Vision</span>
              <span className="px-3 py-1 text-sm rounded-full font-medium bg-secondary/10 text-secondary">PyTorch</span>
              <span className="px-3 py-1 text-sm rounded-full font-medium bg-secondary/10 text-secondary">Deep Learning</span>
              <span className="px-3 py-1 text-sm rounded-full font-medium bg-secondary/10 text-secondary">Image Restoration</span>
            </div>
          </motion.div>

          {/* IIT Jodhpur Internship */}
          <motion.div
            variants={itemVariants}
            className="bg-card-bg rounded-2xl p-6 shadow-card border border-transparent hover:border-primary/50 transition-all"
          >
            <div className="flex flex-col sm:flex-row items-start justify-between mb-4">
              <div className="flex-1 mb-4 sm:mb-0">
                <h2 className="text-xl font-bold text-text-primary mb-1">Summer Intern</h2>
                <p className="text-md text-text-secondary mb-1">IIT Jodhpur</p>
                <p className="text-sm text-text-secondary mb-2">School of Artificial Intelligence and Data Science</p>
                <p className="text-sm text-gray-500">June 2025 – July 2025</p>
              </div>
            </div>
            <ul className="space-y-2 text-base text-text-secondary list-disc list-inside">
              <li>Investigated polarization-based image de-raining using Stokes vectors and Mueller matrix formalism.</li>
              <li>Concluded that polarization-loss training requires multi-angle polarization-camera datasets.</li>
            </ul>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 text-sm rounded-full font-medium bg-secondary/10 text-secondary">Computer Vision</span>
              <span className="px-3 py-1 text-sm rounded-full font-medium bg-secondary/10 text-secondary">Image Processing</span>
              <span className="px-3 py-1 text-sm rounded-full font-medium bg-secondary/10 text-secondary">Deep Learning</span>
              <span className="px-3 py-1 text-sm rounded-full font-medium bg-secondary/10 text-secondary">Research</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Experience;
