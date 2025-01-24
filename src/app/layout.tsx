import ResponsiveAppBar from '@/components/AppBar'
import '@fontsource/roboto/400.css'
import { Box } from '@mui/material'
import './globals.css'

export const metadata = {
  title: 'Dendi Z',
  description: 'Generated by Next.js'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <html lang='en'>
      <body>
        <ResponsiveAppBar />
        <Box
          className='main-container'
          sx={{
            paddingLeft: 4,
            paddingRight: 4,
            paddingTop: '60px',
            justifySelf: 'center',
            maxWidth: '700px',
            minHeight: '100vh'
          }}
        >
          {children}
        </Box>

        <footer className='footer'>
          <p>@{year} Dendi.z eeeegou.</p>
        </footer>
      </body>
    </html>
  )
}
