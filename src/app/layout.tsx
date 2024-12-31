import ResponsiveAppBar from '@/components/AppBar'
import MarioAnimation from '@/components/ThreeAnimation/MarioAnimation'
import TitleHi from '@/components/TitleHi/TitleHi'
import '@fontsource/roboto/400.css'
import { Box } from '@mui/material'
import './globals.css'
export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <ResponsiveAppBar />
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            width: '100%',
            backgroundColor: 'white',
            zIndex: 1000
          }}
        >
          <header>
            <h1>Header Content</h1>
          </header>
        </Box>
        <Box
          className='main-container'
          sx={{
            paddingLeft: 4,
            paddingRight: 4,
            paddingTop: '60px', // 根据实际 Header 高度调整
            justifySelf: 'center',
            maxWidth: '760px'
          }}
        >
          <TitleHi />
  
            <MarioAnimation />

          {children}
        </Box>
        <footer className='footer'>
          <p>@ 2024 Dendi.z eeeegou.</p>
        </footer>
      </body>
    </html>
  )
}
