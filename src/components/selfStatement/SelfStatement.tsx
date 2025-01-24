'use client'
import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { Box, Button, Grow, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'
import Image from 'next/image'
import './SelfStatement.css'
export default function SelfStatement () {
  return (
    <Box
      sx={{
        padding: 3,
        margin: 2,
        marginTop: 0
      }}
    >
      <Box
        sx={{
          justifySelf: 'center',
          backgroundColor: 'var(--titleBar)',
          width: '100%',
          padding: 1.5,
          borderRadius: 2,
          marginBottom: 3.5,
          fontSize: '20px'
        }}
      >
        <Typography
          sx={{
            justifySelf: 'center',
            fontFamily: 'monospace'
          }}
        >
          Hey, I am a software developer based in Dublin
        </Typography>
      </Box>

      <Grow in={true} timeout={500}>
        <Grid container>
          <Grid
            size={{ xs: 5, md: 9.5, sm: 7 }}
            sx={{
              boxSizing: 'border-box',
              fontSize: 16
            }}
          >
            <Typography
              sx={{
                textAlign: 'left',
                fontSize: '30px',
                fontWeight: 'bolder',
                marginBottom: 0.5,
                fontFamily: 'monospace',
                letterSpacing: '0.4rem'
              }}
            >
              Dendi Zhan
            </Typography>

            <Typography
              sx={{
                textAlign: 'left',
                fontSize: '20px',
                marginBottom: 0.5
              }}
            >
              Digital Developer | Artist | Sound Designer
            </Typography>
            <br />
          </Grid>
          <Grid size={{ xs: 5, md: 2.5, sm: 3 }}>
            <Image
              src='/images/profile.jpeg'
              alt='MYSELF'
              width={100}
              height={100}
              className='profile-image'
            />
          </Grid>
        </Grid>
      </Grow>
      <br />

      <Grow in={true} timeout={700}>
        <Box
          sx={{
            marginBottom: 4
          }}
        >
          <Typography
            variant='h5'
            sx={{
              fontFamily: 'monospace',
              justifyContent: 'center',
              marginBottom: 1.5,
              textDecoration: 'underline',
              fontWeight: 'bold'
            }}
          >
            Intro
          </Typography>

          <Box>
            {`Hello, I am a designer engaged in development work. I enjoy
              designing front-end application pages and also like creating
              back-end algorithms, as well as interfaces and interactions with
              the front end. Currently, I am deeply studying the classic`}{' '}
            <span className='text-important'>Java back-end SSM framwork</span>
            ! <br />
            {`Previously I was a sound effects designer, crafting sound effects
              for games and anime works. Now, I've formed a band with my friends
              in Dublin🎸, and we're rehearsing original songs. I enjoy playing
              electric guitar solos. My ultimate dream is to develop independent
              games.`}
          </Box>
        </Box>
      </Grow>

      <Grow in={true} timeout={1000}>
        <Box
          sx={{
            marginBottom: 4
          }}
        >
          <Typography
            variant='h5'
            sx={{
              fontFamily: 'monospace',
              justifyContent: 'center',
              marginBottom: 1.5,
              textDecoration: 'underline',
              fontWeight: 'bold'
            }}
          >
            Bio
          </Typography>

          <ul>
            <li>
              <Box
                sx={{
                  display: 'flex'
                }}
              >
                <Box className='year'>2016</Box>
                Engaged undergraduate studies at Wuhan University, majoring in
                Hydraulic and Hydropower Engineering.
              </Box>
            </li>
            <li>
              <Box
                sx={{
                  display: 'flex'
                }}
              >
                <Box className='year'>2020</Box>
                After graduation, joined New Oriental Education & Technology
                Group, engaging in both online and offline teaching, and also
                participating in teaching and research work for middle and high
                school physics.
              </Box>
            </li>
            <li>
              <Box
                sx={{
                  display: 'flex'
                }}
              >
                <Box className='year'>2021</Box>
                <Box>
                  Later joined Beijing Kaleidoscope Media Co., Ltd., working on{' '}
                  <span className='text-important'>sound effect design</span>{' '}
                  for games and films.
                </Box>
              </Box>
            </li>
            <li>
              <Box
                sx={{
                  display: 'flex'
                }}
              >
                <Box className='year'>2023</Box>
                <Box>
                  Pursued postgraduate studies at{' '}
                  <span className='text-important'>
                    {' '}
                    University College Cork (UCC)
                  </span>
                  , and graduated with First-Class Honours in the Development
                  and Design of Digital Business.
                </Box>
              </Box>
            </li>
          </ul>
        </Box>
      </Grow>

      <Grow in={true} timeout={1300}>
        <Box
          sx={{
            marginBottom: 6
          }}
        >
          <Typography
            variant='h5'
            sx={{
              fontFamily: 'monospace',
              justifyContent: 'center',
              marginBottom: 1.5,
              textDecoration: 'underline',
              fontWeight: 'bold'
            }}
          >
            I ♥
          </Typography>
          <Typography sx={{}}>
            Muisc, Rock 🎸, Movie 🎥, Guitar, Music and Sound Effect, Chess and
            Go ♟️
          </Typography>
        </Box>
      </Grow>

      <Grow in={true} timeout={1600}>
        <Box>
          <a
            href='https://www.linkedin.com/in/dendi-zhan'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Box className='contact'>
              <LinkedInIcon fontSize='large' />
              <Button size='large'>@Zhan Huang</Button>
            </Box>
          </a>
          <br />
          <a
            href='https://www.instagram.com/dendi.hz/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Box className='contact'>
              <InstagramIcon fontSize='large' />
              <Button size='large'>@dendi.hz</Button>
            </Box>
          </a>
          <br />
          <a
            href='https://github.com/ergouHZ'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Box className='contact'>
              <GitHubIcon fontSize='large' />
              <Button size='large'>@eeeegou</Button>
            </Box>
          </a>
          <br />
          <a href='mailto:zhandendi@gmail.com'>
            <Box className='contact'>
              <EmailIcon fontSize='large' />
              <Button size='large'>zhandendi@gmail.com</Button>
            </Box>
          </a>
        </Box>
      </Grow>
    </Box>
  )
}
