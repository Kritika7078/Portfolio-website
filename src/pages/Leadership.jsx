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
                <h2 className="text-2xl font-bold text-text-primary mb-2 sm:mb-0">VSIP Coordinator</h2>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-100">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-sm font-semibold text-green-800">Active</span>
                </div>
              </div>

              <p className="mb-6 text-base text-text-secondary">
                Coordinated project activities and contributed to the VSIP (Visual and Signal Information Processing) group, focusing on Vision Transformer-based research and computer vision systems.
              </p>

              <div className="rounded-lg p-4 mb-6 bg-background">
                <p className="text-md font-semibold text-text-primary mb-1">Recognition:</p>
                <p className="text-base text-text-secondary">
                  Formally recognized for innovative technical contributions and effective project coordination.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 text-sm rounded-full font-medium bg-primary/10 text-primary">Project Coordination</span>
                <span className="px-3 py-1 text-sm rounded-full font-medium bg-primary/10 text-primary">Vision Transformers</span>
                <span className="px-3 py-1 text-sm rounded-full font-medium bg-primary/10 text-primary">Research</span>
              </div>

              <hr className="border-border-color my-6" />

              {/* Impact Section */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-text-primary mb-3">Impact</h3>
                <ul className="space-y-2 text-base text-text-secondary list-disc list-inside">
                  <li>
                    Focused on bridging academic research with practical implementation through coordination, mentorship, and technical collaboration.
                  </li>
                  <li>
                    Contributed to advancing Vision Transformer–based research while supporting peer learning and project execution.
                  </li>
                </ul>
              </div>

              <hr className="border-border-color my-6" />

              {/* Certifications & Recognition */}
              <div>
                <h3 className="text-xl font-bold text-text-primary mb-4">Certifications & Recognition</h3>
                <div className="space-y-4">
                  
                  {/* VSIP Technical Contribution Certificate */}
                  <a
                    href="https://drive.google.com/file/d/1OZShmb4cGFul16grTQ6Ie2vHR2WMc5Rq/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <div 
                      className="flex items-center justify-between gap-4 p-4 rounded-lg bg-background border border-border-color hover:border-primary/50 hover:bg-primary/5 transition-all"
                    >
                      <div className="flex-1">
                        <h4 className="text-md font-semibold text-text-primary">
                          Academic Event Coordination
                        </h4>
                        <p className="text-sm text-text-secondary">
                          Visual and Signal Information Processing (VSIP) Group · 2025
                        </p>
                      </div>
                      <div className="flex-shrink-0 text-primary transition-transform group-hover:translate-x-1">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </div>
                  </a>

                  {/* VSIP Coordinator Appointment Letter */}
                  <a
                    href="https://drive.google.com/file/d/1nVabuMFSiM2sMxQaUc2uG1oKDYf7G5dj/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <div 
                      className="flex items-center justify-between gap-4 p-4 rounded-lg bg-background border border-border-color hover:border-primary/50 hover:bg-primary/5 transition-all"
                    >
                      <div className="flex-1">
                        <h4 className="text-md font-semibold text-text-primary">
                          VSIP Certificate of Appreciation
                        </h4>
                        <p className="text-sm text-text-secondary">
                          VSIP Program Committee · 2025
                        </p>
                      </div>
                      <div className="flex-shrink-0 text-primary transition-transform group-hover:translate-x-1">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Leadership;
