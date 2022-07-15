import { Button, CardMedia } from "@mui/material"
import { Box } from "@mui/system"
import { signIn } from "next-auth/react"


const SignInPage = () => {

  const login = () => {
    signIn( "google", {callbackUrl: '/' })
  }
  return (
    
      <Box sx={{ display:"flex", height: '80vh', flexDirection: "column", flex:1, justifyContent:"center", alignContent:"center", alignItems: "center"}}>
        <CardMedia
          sx={{ width: "30%"}}
          component="img"
          image="https://cdn2.downdetector.com/static/uploads/logo/Google-new_19.png"
          title="Sign In"
        />
        <Button 
        variant='contained' onClick={login}>Sign In</Button>
      </Box>
    
  )
}

export default SignInPage


/*
export const getServerSideProps = async (ctx) => {
  const { data } = await  

  return {
    props: {
      
    }
  }
}*/