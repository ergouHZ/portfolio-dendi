'use client'
import MenuIcon from '@mui/icons-material/Menu'
import PetsIcon from '@mui/icons-material/Pets'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import * as React from 'react'
import ToggleTheme from './ToggleTheme'

const pages = ['project', 'experience', 'blog']

const ResponsiveAppBar = () => {
  const pathname = usePathname()
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <AppBar
      position='fixed'
      sx={{
        background: 'var(--bar)',
        color: 'var(--foreground)',
        boxShadow: '0 0px 0px 0px rgba(0, 0, 0, 0.2)',
        height: '56px',
        alignItems: 'center',
        alignContent: 'center',
        alignSelf: 'center'
      }}
    >
      <Container maxWidth='md'>
        <Toolbar disableGutters>
          {/*MOBILE*/}

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              '& svg': {
                transition: 'transform 200ms ease'
              },
              '&:hover svg': {
                transform: 'rotate(20deg)'
              }
            }}
          >
            <PetsIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />

            <Typography
              variant='h6'
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 600,
                letterSpacing: '.2rem',
                color: 'var(--foreground)',
                textDecoration: 'none'
              }}
            >
              <Link href={'/'}>Dendi Zhan</Link>
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none', color: 'var(--foreground)' }
              }}
            >
              {pages.map(page => (
                <Link href={'/home/' + page} key={page}>
                  <MenuItem
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{
                      backgroundColor:
                        pathname === `/home/${page}`
                          ? 'rgba(0, 0, 0, 0.2)'
                          : 'inherit'
                    }}
                  >
                    <Typography
                      sx={{
                        textAlign: 'center',
                        color:
                          pathname === `/home/${page}`
                            ? 'primary.main'
                            : 'var(--foreground)'
                      }}
                    >
                      {page}
                    </Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>

          {/* Pc */}
          <PetsIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant='h5'
            noWrap
            component='a'
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            Dendi
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map(page => (
              <Link href={'/home/' + page} key={page}>
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    backgroundColor:
                      pathname === `/home/${page}`
                        ? 'var(--activate)'
                        : 'inherit',
                    color: 'var(--foreground)',

                    display: 'block'
                  }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>
          <Box
            sx={{
              flexGrow: 0,
              alignItems: 'center',
              marginBottom: '8px'
            }}
          >
            <ToggleTheme />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default ResponsiveAppBar
