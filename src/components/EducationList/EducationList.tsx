'use client'
import { CardPlayList } from '@/entity/playList'
import { Box, Grow, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'
import EducationCard from './Card/EducationCard'

export default function EducationList () {
  const educationList: CardPlayList[] = [
    {
      title: 'UCC',
      subtitle: 'Digital Business',
      image: '/images/education/ucc.png',
      color: '#a0df82',
      drawerTitle: 'University College Cork',
      drawerImage: '/images/education/ucc_detail.png',
      drawerDescription: 'testtest',
      drawerSubtitle: 'Master Degree',
      drawerSubtitle2: 'Development & Design of Digital Business'
    },
    {
      title: 'Wuhan University',
      subtitle: 'Hydropower Engineering',
      image: '/images/education/whu.jpg',
      color: '#6effe2',
      drawerTitle: 'Wuhan University',
      drawerImage: '/images/education/ucc_detail.png',
      drawerDescription: 'testtest whu',
      drawerSubtitle: 'Bachelor Degree',
      drawerSubtitle2: 'QS195 WHU TEST'
    }
  ]

  const workList: CardPlayList[] = [
    {
      title: 'Sound Designer',
      subtitle: 'Kaleidoscope Media Ltd. Beijing',
      image: '/images/education/ucc.png',
      color: '#ff3b76',
      drawerTitle: 'University College Cork',
      drawerImage: '/images/education/ucc_detail.png',
      drawerDescription: 'testtest',
      drawerSubtitle: 'Master Degree',
      drawerSubtitle2: 'Development & Design of Digital Business'
    },
    {
      title: 'High School Physics Teacher',
      subtitle: 'New Orientation',
      image: '/images/education/whu.jpg',
      color: '#103b76',
      drawerTitle: 'Wuhan University',
      drawerImage: '/images/education/ucc_detail.png',
      drawerDescription: 'testtest whu',
      drawerSubtitle: 'Bachelor Degree',
      drawerSubtitle2: 'QS195 WHU TEST'
    },
    {
      title: 'Supervisor',
      subtitle: 'New Orientation',
      image: '/images/education/whu.jpg',
      color: '#103b76',
      drawerTitle: 'Wuhan University',
      drawerImage: '/images/education/ucc_detail.png',
      drawerDescription: 'testtest whu',
      drawerSubtitle: 'Bachelor Degree',
      drawerSubtitle2: 'QS195 WHU TEST'
    },
  ]

  return (
    <Box
      sx={{
        maxWidth: '820px',
        alignItems: 'center',
        marginBottom: 2,
        padding: 4
      }}
    >
      <Grid size={6}>
        <Typography
          variant='h5'
          sx={{
            fontFamily: 'monospace',
            justifyContent: 'center',
            marginBottom: 2
          }}
        >
          Education
        </Typography>
        <EducationCard cardList={educationList} />
      </Grid>

      <Grow in={true} timeout={1000}>
        <Grid size={6}>
          <Typography
            variant='h5'
            sx={{
              fontFamily: 'monospace',
              justifyContent: 'center',
              marginBottom: 2
            }}
          >
            Work
          </Typography>
          <EducationCard cardList={workList} />
        </Grid>
      </Grow>
    </Box>
  )
}
