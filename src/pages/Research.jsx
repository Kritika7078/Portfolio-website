import { motion } from 'framer-motion';

const Research = () => {
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
            Research
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
          {/* CVPR Publication */}
          <motion.div
            variants={itemVariants}
            className="bg-card-bg rounded-2xl p-6 shadow-card border border-transparent hover:border-primary/50 transition-all"
          >
            <div className="flex flex-col sm:flex-row items-start justify-between mb-4">
              <h2 className="text-xl font-bold text-text-primary mb-2 sm:mb-0">CVPR 2025 Workshop Publication</h2>
              <a
                href="https://openaccess.thecvf.com/content/CVPR2025W/NTIRE/html/Li_NTIRE_2025_Challenge_on_Day_and_Night_Raindrop_Removal_for_CVPRW_2025_paper.html"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm rounded-lg font-semibold text-primary bg-primary/10 hover:bg-primary/20 transition-colors"
              >
                View Publication
              </a>
            </div>
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              NTIRE 2025 Challenge on Day and Night Raindrop Removal for Dual-Focused Images: Methods and Results
            </h3>
            <p className="mb-4 text-base text-text-secondary">
              Published in the CVPR 2025 Workshop, part of the IEEE/CVF conference on Computer Vision and Pattern Recognition (CVPR 2025).
            </p>
            <div className="rounded-lg p-4 bg-background">
              <p className="text-base text-text-secondary">
                <span className="font-semibold text-text-primary">Achievement:</span> Selected as one of the Top 32 teams out of 361+ participants. 
                Achieved state-of-the-art results on the Raindrop Clarity dataset.
              </p>
            </div>
          </motion.div>

          {/* VSIP Recognition */}
          <motion.div
            variants={itemVariants}
            className="bg-card-bg rounded-2xl p-6 shadow-card border border-transparent hover:border-primary/50 transition-all"
          >
            <div className="flex flex-col sm:flex-row items-start justify-between mb-4">
              <h2 className="text-xl font-bold text-text-primary mb-2 sm:mb-0">VSIP Team Recognition</h2>
              <a
                href="https://drive.google.com/file/d/1t5l-jrJvaBEO1-B9tc28fzZg9tLuAzLv/view"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm rounded-lg font-semibold text-primary bg-primary/10 hover:bg-primary/20 transition-colors"
              >
                View Certificate
              </a>
            </div>
            <p className="text-base text-text-secondary">
              Formally recognized as a valued member for innovative contribution to the project "Designing of the Generalizable Vision Transformers" with officially commended technical acumen.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Research;
