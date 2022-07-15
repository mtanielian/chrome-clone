import UserLoginButton from '../userLoginButton/UserLoginButton'
import { Box, Toolbar, Typography }  from '@mui/material'

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Toolbar>
        <Typography variant='subtitle1' sx={{mr: 2}} component="div">About</Typography>
        <Typography variant='subtitle1' component="div">Store</Typography>
        
        <Box sx={{ flexGrow: 1 }}/>
        <Typography variant='subtitle1' sx={{mr: 2}} component="div">
          Gmail
        </Typography>
        <Typography variant='subtitle1' sx={{mr: 2}} component="div">
          Images
        </Typography>
        <UserLoginButton />
      </Toolbar>
    </Box>
  );
}

export default NavBar