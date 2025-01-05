import ProjectList from '@/components/projects/ProjectList'
import { Box, Typography } from '@mui/material'

export default function page () {
  return (
    <Box>
      <Typography
        variant='h5'
        sx={{ fontFamily: 'monospace', justifyContent: 'center',paddingLeft:4, }}
      >
        Projects
      </Typography>
      <ProjectList />
    </Box>
  )
}
