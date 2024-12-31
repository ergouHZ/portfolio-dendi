"use client"

import EducationList from '@/components/EducationList/EducationList'
import ProjectList from '@/components/projects/ProjectList'
import { Box } from '@mui/material'

export default function page () {
  return (
    <Box>
    
      <EducationList />
      <ProjectList />
    </Box>
  )
}
