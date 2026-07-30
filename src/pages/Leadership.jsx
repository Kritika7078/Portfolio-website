import { motion } from 'framer-motion';

const Leadership = () => {
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
    <>
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
              Leadership
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
          >
            {/* Single Unified Card */}
            <motion.div
              variants={itemVariants}
              className="bg-card-bg rounded-2xl p-8 shadow-card border border-transparent"
            >
              {/* VSIP Coordinator Header with Active Badge */}
              <div className="flex flex-col sm:flex-row items-start justify-between mb-4">
                <h2 className="text-2xl font-bold text-text-primary mb-2 sm:mb-0">Coordinator</h2>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-100">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-sm font-semibold text-green-800">Active</span>
                </div>
              </div>

              <p className="mb-3 text-base text-text-secondary">Visual and Signal Information Processing (VSIP) Group at Thapar Institute of Engineering and Technology</p>

              <p className="mb-6 text-base text-text-secondary">
                Coordinate technical activities, mentor students, organize workshops and collaborative research initiatives related to Computer Vision, Machine Learning and Image Processing.
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-sm rounded-full font-medium bg-primary/10 text-primary">Computer Vision</span>
                <span className="px-3 py-1 text-sm rounded-full font-medium bg-primary/10 text-primary">Machine Learning</span>
                <span className="px-3 py-1 text-sm rounded-full font-medium bg-primary/10 text-primary">Image Processing</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Leadership;
