//the canvas when the modal is not loaded
import { Box } from '@mui/material'
import './Loader.css'

export default function Loader() {
  return (
    <div className="flex justify-content items-center"
    >Loading...
      <div className="canvas">
        <Box sx={{

        }}>
          
        </Box>
      </div>
    </div>
  )
}