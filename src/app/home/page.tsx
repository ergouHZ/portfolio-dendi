"use client"

import SelfStatement from '@/components/selfStatement/SelfStatement'
import TitleHi from '@/components/TitleHi/TitleHi'
import { Box } from '@mui/material'

export default function page () {
  return (
    <Box>
      <TitleHi />
      <SelfStatement/>
    </Box>
  )
}
