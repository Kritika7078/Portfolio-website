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
          {/* IIT Bhubaneswar Internship */}
          <motion.div
            variants={itemVariants}
            className="bg-card-bg rounded-2xl p-6 shadow-card border border-transparent hover:border-primary/50 transition-all"
          >
            <div className="flex flex-col sm:flex-row items-start justify-between mb-4">
              <div className="flex-1 mb-4 sm:mb-0">
                <h2 className="text-xl font-bold text-text-primary mb-1">Research Intern</h2>
                <p className="text-md text-text-secondary mb-1">IIT Bhubaneswar</p>
                <p className="text-sm text-text-secondary mb-2">School of Electrical and Computer Sciences</p>
                <p className="text-sm text-gray-500">Aug 2025 – Oct 2025 • REMOTE</p>
              </div>
              <a
                href="https://drive.google.com/file/d/13FOud-Ff2KKFrcMO-EEmQU5jJNOXgse7/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm rounded-lg font-semibold text-primary bg-primary/10 hover:bg-primary/20 transition-colors"
              >
                View Certificate
              </a>
            </div>
            <ul className="space-y-2 text-base text-text-secondary list-disc list-inside">
              <li>Designed and implemented a weak-attention preserving activation mechanism for Transformer-based vision tasks.</li>
              <li>Achieved state-of-the-art image restoration performance with a peak PSNR of 25.46 and an SSIM of 0.841.</li>
              <li>Co-authored a research paper submitted at a reputed venue.</li>
              <li>Conducted extensive experiments to evaluate architectural and loss-function variations.</li>
            </ul>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 text-sm rounded-full font-medium bg-secondary/10 text-secondary">Vision Transformers</span>
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
                <p className="text-sm text-text-secondary mb-2">School of Artificial Intelligence and Data Science (SAIDE)</p>
                <p className="text-sm text-gray-500">June 2025 – July 2025 • ONSITE</p>
              </div>
              <a
                href="https://drive.google.com/file/d/1WzqCR_Bt7Hkv3skeBPcF7TJVfDj0zNje/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm rounded-lg font-semibold text-primary bg-primary/10 hover:bg-primary/20 transition-colors"
              >
                View Certificate
              </a>
            </div>
            <ul className="space-y-2 text-base text-text-secondary list-disc list-inside">
              <li>Developed and evaluated Vision Transformer-based models for single-image de-raining and restoration.</li>
              <li>Executed 20+ controlled experiments across multiple transformer backbones and loss configurations.</li>
              <li>Gained hands-on experience in training, evaluation, and benchmarking of deep learning models.</li>
            </ul>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 text-sm rounded-full font-medium bg-secondary/10 text-secondary">Computer Vision</span>
              <span className="px-3 py-1 text-sm rounded-full font-medium bg-secondary/10 text-secondary">PyTorch</span>
              <span className="px-3 py-1 text-sm rounded-full font-medium bg-secondary/10 text-secondary">Research</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Experience;
