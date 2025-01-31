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
      drawerDescription: 'Studied professional knowledge in databases, Java, and H5, as well as programming knowledge of web structures. Ultimately completed the graduation project and graduated with first class honors.',
      drawerSubtitle: 'Master Degree',
      drawerSubtitle2: 'Development & Design of Digital Business'
    },
    {
      title: 'Wuhan University',
      subtitle: 'Hydropower Engineering',
      image: '/images/education/whu.jpg',
      color: '#6effe2',
      drawerTitle: 'Wuhan University',
      drawerImage: '/images/education/whu.jpg',
      drawerDescription: 'Studied engineering knowledge in professional courses, as well as advanced mathematics and physics. Conducted practical inspections and research at the Three Gorges Dam.',
      drawerSubtitle: 'Bachelor Degree',
      drawerSubtitle2: 'QS195 WHU TEST'
    }
  ]

  const workList: CardPlayList[] = [
    {
      title: 'Sound Designer',
      subtitle: 'Kaleidoscope Media Ltd. Beijing',
      image: '/images/work/mix.jpeg',
      color: '#ff3b76',
      drawerTitle: 'Sound Designer',
      drawerImage: '/images/work/studio.png',
      drawerDescription: 'Worked at Beijing Binfeng Culture and Media Company Limited in animation and film sound effects production, and produced several TV series for iQIYI and Tencent Animation.',
      drawerSubtitle: 'Sound Designer',
      drawerSubtitle2: 'Animation | Movie'
    },
    {
      title: 'High School Physics Teacher',
      subtitle: 'New Oriental',
      image: '/images/work/new-oriental.jpg',
      color: '#103b76',
      drawerTitle: 'Teaching',
      drawerImage: '/images/work/class.png',
      drawerDescription: 'Engage in online teaching assignments at Beijing Dongfang Youbo Company, assist teachers in course development and research, and complete teaching and class continuation tasks.',
      drawerSubtitle: 'New Oriental Physics',
      drawerSubtitle2: 'High school Teacher'
    },
    {
      title: 'Supervisor',
      subtitle: 'Eurospar',
      image: '/images/work/store.png',
      color: '#403b56',
      drawerTitle: '',
      drawerImage: '/images/work/store.png',
      drawerDescription: 'Perform daily maintenance and management work for the store, responsible for maintaining store order, communicating with customers, and ensuring the normal operation of the store.',
      drawerSubtitle: 'Dublin',
      drawerSubtitle2: ''
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
