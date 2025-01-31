import GitHubIcon from '@mui/icons-material/GitHub'
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography
} from '@mui/material'
import Link from 'next/link'
type Props = {
  title: string
  link: string
  image?: string
  github?: string
  description?: string
}

export default function ProjectCard ({
  title,
  link,
  image,
  github,
  description
}: Props) {
  const openGithub = (
    url: string | undefined,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault()
    event.stopPropagation()
    if (url) {
      window.open(url)
    }
  }

  return (
    <Card
      sx={{
        maxWidth: 400,
        borderRadius: '16px',
        background: 'var(--background)',
        '@media (max-width:768px)': {
          width: '40vw',
        },
      }}
    >
      <Link href={link}>
        <CardMedia
          sx={{ height: 160, borderRadius: '16px' }}
          image={image}
          title={title}
        />
        <CardContent>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'start'
            }}
          >
            <Typography
              gutterBottom
              variant='h5'
              component='div'
              sx={{
                color: 'var(--foreground)'
              }}
            >
              {title}
            </Typography>
            {github ? (
              <Button
                onClick={event => openGithub(github, event)}
                size='small'
                variant='outlined'
                startIcon={<GitHubIcon />}
              >
                Source
              </Button>
            ) : (
              <></>
            )}
          </Box>
          <Typography
            className='text'
            variant='body2'
            sx={{
              color: 'var(--foreground)'
            }}
          >
            {description}
          </Typography>
        </CardContent>
      </Link>
      {/* <CardActions>
        <Button
          onClick={() => openGithub(github)}
          size="small"
          variant="outlined"
          startIcon={<GitHubIcon />}
        >
          Source
        </Button>
        <Button size="small">Know More</Button>
      </CardActions> */}
    </Card>
  )
}
