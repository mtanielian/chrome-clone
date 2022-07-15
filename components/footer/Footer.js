import { Box, Typography } from '@mui/material'

const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()

  return (
    <Box sx={{ width:'100%', position:'fixed', bottom: 15, textAlign: 'center'}}>
      <Typography variant='subtitle2' color='gray' component="div">Copiright © {year} - Martin Tanielian</Typography>
    </Box>
  )
}

export default Footer