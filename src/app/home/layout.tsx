'use client'
import MarioAnimation from '@/components/ThreeAnimation/MarioAnimation'
import { Box } from '@mui/material'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import './layout.css'


export default function HomeLayout ({
  children
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  //change the state when the route is changed
  const [isTransitioning, setIsTransitioning] = useState(true)
  const [boxClass,setBoxClass] = useState('fade-up-enter')

  useEffect(() => {


    setIsTransitioning(!isTransitioning)

    setBoxClass('fade-up-enter')

    setTimeout(() => {
      setIsTransitioning(true)
      setBoxClass('fade-up-enter fade-up-enter-active')
    }, 400)
  }, [pathname])


  return (
    <Box>
      <MarioAnimation />

      <Box className = {boxClass}
      >{children}</Box>
    </Box>
  )
}
