'use client'
import MarioAnimation from '@/components/ThreeAnimation/MarioAnimation'
import { Box } from '@mui/material'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import React from 'react'
import './layout.css'

// fade in and slide animation
const pageVariants = {
  initial: {
    opacity: 0.2,
    y: 80
  },
  animate: {
    opacity: 1,
    y: 0
    
  },
  exit: {
    opacity: 0,
    y: 120
  }
}

export default function HomeLayout ({
  children
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  //change the state when the route is changed

  return (
    <Box>
      <MarioAnimation />
      <AnimatePresence mode='wait' initial={false}>
        <motion.div
          key={pathname}
          variants={pageVariants}
          initial='initial'
          animate='animate'
          transition={{ duration: 0.50 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </Box>
  )
}
