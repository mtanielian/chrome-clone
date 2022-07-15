import UserLoginButton from '../userLoginButton/UserLoginButton'
import { Box, CardMedia, Divider, IconButton, TextField, Toolbar, Typography }  from '@mui/material'
import { ClearOutlined, Mic, SearchOutlined } from '@mui/icons-material'

const NavBarSearch = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Toolbar>
        <CardMedia
          sx={{width: '10%', marginTop: 4, marginRight: 5}}
          component="img"
          image="google-logo.png"
          title="Sign In"
        />
        <TextField
          autoComplete='off'
          sx={{mt: 4, width: "40%", '& fieldset': {borderRadius: "50px"}}}
          fullWidth
          InputProps={{
            endAdornment: (
              <>
                <IconButton>
                  <ClearOutlined />
                </IconButton>
                <Divider orientation="vertical" sx={{height: '16px', border: '1px solid #EAEAEA'}} />
                <IconButton>
                  <SearchOutlined />
                </IconButton>
                <IconButton>
                  <Mic />
                </IconButton>
              </>
            )
          }}
        />
        <Box sx={{ flexGrow: 1 }}/>
        <UserLoginButton />
      </Toolbar>
    </Box>
  );
}

export default NavBarSearch