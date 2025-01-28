import { CardPlayList } from '@/entity/playList'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import SkipNextIcon from '@mui/icons-material/SkipNext'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'
import {
  Box,
  Card,
  CardContent,
  Drawer,
  IconButton,
  Slide,
  Typography
} from '@mui/material'
import CardMedia from '@mui/material/CardMedia'
import { useTheme } from '@mui/material/styles'
import { useRef, useState } from 'react'

type Props = {
  cardList: CardPlayList[]
}

export default function EducationCard ({ cardList }: Props) {
  const theme = useTheme()

  //for drawer
  const [open, setOpen] = useState(false)
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen)
  }

  //the index is the index of the Card List content
  const [index, setIndex] = useState(0)

  const moveNext = () => {
    if (audioRefNext.current && audioRefNext.current.play)
      audioRefNext.current.play()
    handleTransition()
    console.log('moveNext', index)
    setIndex(prevIndex => (prevIndex + 1) % cardList.length)
  }

  const movePrevious = () => {
    if (audioRefNext.current && audioRefNext.current.play)
      audioRefNext.current.play()
    handleTransition()
    setIndex(prevIndex => (prevIndex - 1 + cardList.length) % cardList.length)
  }

  const currentCard = cardList[index]

  //for transition
  const [checked, setChecked] = useState(true)

  const handleTransition = () => {
    setChecked(prev => !prev)
    setTimeout(() => {
      setChecked(prev => !prev)
    }, 300)
  }

  //audio effects
  const audioRefNext = useRef<HTMLAudioElement>(null)
  const audioRefPrev = useRef<HTMLAudioElement>(null)
  const audioRefPlay = useRef<HTMLAudioElement>(null)

  const drawerList = (
    <Box
      sx={{
        direction: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
        color: 'var(--foreground)',
      }}
    >
      <Typography variant='h5'>{currentCard.drawerTitle}</Typography>
      <br></br>
      <Typography variant='h6'>
        {currentCard.drawerSubtitle}
        <br></br>
        {currentCard.drawerSubtitle2}
        <br></br>
        {currentCard.drawerDescription}
      </Typography>
      <CardMedia
        component='img'
        sx={{ width: 300, height: 160 }}
        image={currentCard.drawerImage}
        alt={currentCard.drawerTitle}
      />
    </Box>
  )

  return (
    <Box>
      {/* sound effects */}
      <audio ref={audioRefNext} src='/audio/effects/click_next.wav' />
      <audio ref={audioRefPrev} src='/audio/effects/click_pre.wav' />
      <audio ref={audioRefPlay} src='/audio/effects/play.wav' />

      <Card
        sx={{
          display: 'flex',
          backgroundColor: currentCard.color,
          justifyContent: 'space-between',
          maxHeight: '140px',
          borderRadius: '10px',
          marginLeft: 6,
          marginRight: 6,
          marginTop: 3,
          marginBottom: 2,
          transition: 'transform 0.25s ease',
          '&:hover': {
            cursor: 'pointer',
            transform: 'scale(1.03)' // Hover , and scale
          }
        }}
        onClick={toggleDrawer(true)}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          {/* slide animation */}
          <Slide direction='right' in={checked} mountOnEnter>
            <CardContent
              sx={{
                flex: '1 0',
                padding: '14px'
              }}
            >
              <Typography component='div' variant='h6'>
                {currentCard.title}
              </Typography>
              <Typography
                variant='subtitle1'
                component='div'
                sx={{ color: 'text.secondary' }}
              >
                {currentCard.subtitle}
              </Typography>
            </CardContent>
          </Slide>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              pl: 1,
              pt: 10.5,
              position: 'absolute'
            }}
          >
            <IconButton
              onClick={e => {
                e.stopPropagation() //
                movePrevious()
              }}
              aria-label='previous'
            >
              {theme.direction === 'rtl' ? (
                <SkipNextIcon />
              ) : (
                <SkipPreviousIcon />
              )}
            </IconButton>
            <IconButton onClick={toggleDrawer(true)} aria-label='play/pause'>
              <PlayArrowIcon sx={{ height: 38, width: 38 }} />
            </IconButton>
            <IconButton
              onClick={e => {
                e.stopPropagation()
                moveNext()
              }}
              aria-label='next'
            >
              {theme.direction === 'rtl' ? (
                <SkipPreviousIcon />
              ) : (
                <SkipNextIcon />
              )}
            </IconButton>
          </Box>
        </Box>
        <Slide direction='left' in={checked} mountOnEnter>
          <CardMedia
            component='img'
            sx={{ width: 160, height: 160 }}
            image={currentCard.image}
            alt='Live from space album cover'
          />
        </Slide>
      </Card>

      <Drawer
        anchor='right'
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            backdropFilter: 'blur(8px)',
            backgroundColor: 'var(--drawer)' // White color with 80% opacity
          }
        }}
      >
        {drawerList}
      </Drawer>
    </Box>
  )
}
