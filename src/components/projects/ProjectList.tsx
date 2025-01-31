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
        padding: 3,
        '@media (max-width:768px)': {
          padding: 0,
          margin: 1,
        },
      }}
    >
      <Grid
        container
        spacing={3}
        sx={{
          maxWidth: '800px',
          alignItems: 'top',
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
              description="A frontend application that can display literature search results in a text chat mode, integrating ChatGPT's API to assist the application, built with React and MUI components."
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
              description="Integrates the interfaces of multiple AI platforms (such as OpenAI, Claude, DeepSeek), providing real-time chat and streaming transmission capabilities."
            />
          </Grid>
        </Grow>
      </Grid>

      <Grid
        container
        spacing={2}
        sx={{
          maxWidth: '800px',
          alignItems: 'top',
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
              description="An early website project that uses the simplest H5 framework to simulate online consultation service functions and incorporates real-time exchange rate interfaces."
            />
          </Grid>
        </Grow>
        <Grow
          in={true}
          timeout={1500}
        >
          <Grid size={6}>
            <ProjectCard
              title='ESB-Project'
              image='/images/project/wattup.png'
              link='https://github.com/ergouHZ/WattUp_Electric_Calculator'
              github='https://github.com/ergouHZ/WattUp_Electric_Calculator'
              description="WattUp -- A graduation project in collaboration with ESB, ultimately presented as an Android application. It provides social media features and uses AI interfaces for camera-based electricity consumption estimation."
            />
          </Grid>
        </Grow>
      </Grid>
    </Box>
  )
}
