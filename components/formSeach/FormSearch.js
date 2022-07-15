import {useRef} from 'react'
import { useRouter } from 'next/router'
import { Box, Button, CardMedia, IconButton, TextField, Divider } from '@mui/material'
import { SearchOutlined, Mic } from '@mui/icons-material'


const FormSearch = () => {
  const inputSearchRef = useRef(null)
  const router = useRouter()
  const handleSubmit = (event) => {
    event.preventDefault()
    const term = inputSearchRef.current.value
    if (term.trim() !== '') {
      router.push(`/search?q=${term}`)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ display:"flex",
        height: '40vh', 
        flexDirection: "column", 
        alignItems: "center"
      }}>
        <CardMedia
          sx={{ width: "30%"}}
          component="img"
          image="google-logo.png"
          title="Sign In"
        />
        <TextField 
          autoComplete='off'
          inputRef={inputSearchRef}
          sx={{mt: 4, width: "60%", '& fieldset': {borderRadius: "50px"}}}
          fullWidth
          InputProps={{
            startAdornment: (
              <IconButton onClick={handleSubmit}>
                <SearchOutlined />
              </IconButton>
            ),
            endAdornment: (
              <IconButton>
                <Mic />
              </IconButton>
            
            )
          }}
        />
        <Box mt={2}>
          <Button type='submit' sx={{marginRight: 2}} color='inherit'>Google Search</Button>
          <Button color='inherit'>I'm Feeling Lucky</Button>
        </Box>
      </Box>
    </form>
  )
}

export default FormSearch