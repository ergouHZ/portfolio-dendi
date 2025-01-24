import { Typography } from "@mui/material";

export default function NotFound () {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 - Not found</h1>
      <p>Thanks for coming anyway!</p>
      <p> I am still working on this session </p>

      <a href='/'>
      <Typography variant="h4" sx={{
        color: 'primary.main',
        textDecoration: 'underline',
        cursor: 'pointer',
        marginTop: '20px',
      }}>
      Back to home
      </Typography>
      </a>
    </div>
  )
}
