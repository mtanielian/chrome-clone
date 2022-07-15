import { useRouter } from 'next/router';
import UserLoginButton from '../userLoginButton/UserLoginButton'
import FormSearchNav from '../formSearchNav/FormSearchNav';
import { CardMedia, Grid, Toolbar }  from '@mui/material'


const NavBarSearch = () => {
  const router = useRouter()
  return (
    <Toolbar>
      <Grid container sx={{ paddingTop: 2}}>
          <Grid item xs={1}>
            <CardMedia
              component="img"
              image="google-logo.png"
              title="Sign In"
              onClick={() => {router.push('/')}}
            />
          </Grid>
          <Grid item xs={10}>
           <FormSearchNav />
          </Grid>
          <Grid item xs={1} sx={{ display: { xs: 'none', sm: 'flex' }, justifyContent:'flex-end' }} >
            <UserLoginButton />
          </Grid>
      </Grid>
    </Toolbar>
  );
}

export default NavBarSearch