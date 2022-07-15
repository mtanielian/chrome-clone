import { signIn, signOut, useSession } from 'next-auth/react';
import { Avatar, Button, IconButton } from '@mui/material';

const UserLoginButton = () => {
  const { data: session, status } = useSession();
  
  if (status !== 'loading') {
    if (session) {
      const { user = {} } = session
      const { name = '', image = '' } = user
      return (
        <IconButton>
          <Avatar onClick={signOut} src={image} alt={name} />
        </IconButton>
      )
    }

    return <Button variant='contained' onClick={signIn}>Sign In</Button>
  }
}

export default UserLoginButton