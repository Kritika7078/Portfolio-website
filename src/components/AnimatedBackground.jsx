import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const AnimatedBackground = () => {
  const reduce = useReducedMotion()

  const commonProps = {
    style: { transform: 'translate3d(0,0,0)', willChange: 'transform', pointerEvents: 'none' },
    'aria-hidden': true,
  }

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none animated-bg">
      <motion.div
        {...commonProps}
        className="absolute inset-0"
        style={{
          filter: 'blur(100px)',
          background:
            'radial-gradient(circle at 20% 30%, rgba(79, 70, 229, 0.1), transparent 30%), radial-gradient(circle at 80% 70%, rgba(124, 58, 237, 0.1), transparent 30%)',
        }}
        animate={
          reduce
            ? undefined
            : { x: [0, -120, 0], y: [0, -40, 0], rotate: [0, 8, 0] }
        }
        transition={reduce ? { duration: 0 } : { duration: 40, repeat: Infinity, ease: 'linear' }}
      />

      <motion.div
        {...commonProps}
        className="absolute -right-16 -bottom-16 rounded-full"
        style={{
          width: '150%',
          height: '150%',
          transform: 'translate3d(0,0,0)',
          willChange: 'transform',
          pointerEvents: 'none',
          filter: 'blur(120px)',
          background: 'linear-gradient(135deg, rgba(99,102,241,0.12), rgba(20,184,166,0.08))',
        }}
        animate={reduce ? undefined : { x: [0, 100, 0], y: [0, 30, 0], rotate: [0, -6, 0] }}
        transition={reduce ? { duration: 0 } : { duration: 50, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  )
}

export default AnimatedBackground
