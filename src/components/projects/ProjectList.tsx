'use client'
import { Box, Grow } from '@mui/material'
import Grid from '@mui/material/Grid2'
import ProjectCard from './ProjectCard/ProjectCard'

export default function ProjectList () {
  return (
    <Box
      sx={{
        maxWidth: '820px',
        alignItems: 'center',
        margin: 2,
        padding: 3
      }}
    >
      <Grid
        container
        spacing={3}
        sx={{
          maxWidth: '800px',
          alignItems: 'center',
          padding: 1
        }}
      >
        <Grow in={true}>
          <Grid size={6}>
            <ProjectCard
              title='Chat-Search'
              link='/projects/chat-search'
              image='/images/project/chat-search.png'
              github='https://github.com/ergouHZ/chat_search_front'
            />
          </Grid>
        </Grow>

        {/* grow transition, fade in 1 by 1 */}
        <Grow
          in={true}
          style={{ transformOrigin: '0 0 0' }}
          timeout={1000}
        >
          <Grid size={6}>
            <ProjectCard
              title='Aura'
              image='/images/project/aura.png'
              link='https://www.auraxplorers.com/'
              github='https://github.com/ergouHZ/chatE'
            />
          </Grid>
        </Grow>
      </Grid>

      <Grid
        container
        spacing={2}
        sx={{
          maxWidth: '800px',
          alignItems: 'center',
          padding: 1.5
        }}
      >
        <Grow
          in={true}

          timeout={1200}
        >
          <Grid size={6}>
            <ProjectCard
              title='WDC'
              image='/images/project/wdc.png'
              link='https://wdc.dendi.top/'
              github='https://github.com/ergouHZ/Web_H5_Project'
            />
          </Grid>
        </Grow>
        <Grow
          in={true}
          timeout={1500}
        >
          <Grid size={6}>
            <ProjectCard
              title='WattUp'
              image='/images/project/wattup.png'
              link='https://github.com/ergouHZ/WattUp_Electric_Calculator'
              github='https://github.com/ergouHZ/WattUp_Electric_Calculator'
            />
          </Grid>
        </Grow>
      </Grid>
    </Box>
  )
}
